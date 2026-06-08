'use server';

import { decodeAuthenticatedUserToken } from "@/app/utilities";

export async function updatePassword(data: any) {
  const token = await decodeAuthenticatedUserToken();

  if (!token) return { error: "No token" };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    {
      method: "PUT",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await res.json();
}