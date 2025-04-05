"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useRouter } from "next/navigation";

const client = generateClient<Schema>();

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Array<Schema["Address"]["type"]>>(
    [],
  );
  const router = useRouter();

  function listAddresses() {
    client.models.Address.observeQuery().subscribe({
      next: (data) => setAddresses([...data.items]),
    });
  }

  useEffect(() => {
    listAddresses();
  }, []);

  return (
    <div>
      <ul>
        {addresses.map((address: Schema["Address"]["type"]) => (
          <li key={address.id} style={{ cursor: "pointer" }}>
            <button onClick={() => router.push(`/address/${address.id}`)}>
              {address.address}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
