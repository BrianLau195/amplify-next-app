"use client";

import { useParams, useRouter } from "next/navigation";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useState, useEffect } from "react";

const client = generateClient<Schema>();

export default function AddressPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [address, setAddress] = useState<Schema["Address"]["type"]>();

  function getAddress() {
    client.models.Address.get({ id: id as string }).then((response) => {
      if (response.data) {
        setAddress(response.data);
      }
    });
  }

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div>
      <h1>Address {address?.nickname}</h1>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
