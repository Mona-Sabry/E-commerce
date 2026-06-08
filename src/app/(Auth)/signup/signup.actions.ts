
'use server';

import { SignupApiData } from "./signup.api.type";

export async function SignupActiondata(data: SignupApiData) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          rePassword: data.rePassword,
          phone: data.phone,
        }),
      }
    );

    const result = await res.json();

    console.log("SIGNUP STATUS:", res.status);
    console.log("SIGNUP RESULT:", result);

    return { ok: res.ok, data: result };
  } catch (error) {
    console.log(error);
    return { ok: false, data: { message: "Network error" } };
  }
}