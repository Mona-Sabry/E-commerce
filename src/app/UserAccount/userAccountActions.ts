// 'use server';

// import { decodeAuthenticatedUserToken } from "@/app/utilities";

// export async function updateUser(data: any) {
//   const token = await decodeAuthenticatedUserToken();

//   if (!token) return { error: "No token" };

//   const res = await fetch(
//     "https://ecommerce.routemisr.com/api/v1/users/updateMe/",
//     {
//       method: "PUT",
//       headers: {
//         token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );

//   return await res.json();
// }

'use server';

import { decodeAuthenticatedUserToken } from "@/app/utilities";

type UpdateUserData = {
  name?: string;
  email?: string;
  phone?: string;
};

export async function updateUser(data: UpdateUserData) {
  const token = await decodeAuthenticatedUserToken();

  if (!token) return { error: "No token" };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/users/updateMe/",
    {
      method: "PUT",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    return { error: result?.message || "Update failed" };
  }

  return result;
}

export async function getLoggedUserData() {
  const token = await decodeAuthenticatedUserToken();

  if (!token) return { error: "No token" };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/users/getMe",
    {
      method: "GET",
      headers: {
        token,
      },
    }
  );

  return await res.json();
}