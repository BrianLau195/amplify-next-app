"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useRouter } from "next/navigation";
import { AddressCreateForm } from "@/ui-components";

const client = generateClient<Schema>();

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Array<Schema["Address"]["type"]>>(
    [],
  );
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  function listAddresses() {
    client.models.Address.observeQuery().subscribe({
      next: (data) => setAddresses([...data.items]),
    });
  }

  function deleteAddress(id: string) {
    client.models.Address.delete({ id });
  }

  useEffect(() => {
    listAddresses();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Your Addresses</h2>
      {addresses.length === 0 ? (
        <>
          <p>You don't have access to any addresses.</p>
          <AddressCreateForm />
        </>
      ) : (
        <ul>
          {addresses.map((address: Schema["Address"]["type"]) => (
            <li key={address.id}>
              <button onClick={() => router.push(`/address/${address.id}`)} className="address-list-item">
                {address.nickname}
              </button>
              <button onClick={() => address.id && deleteAddress(address.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
