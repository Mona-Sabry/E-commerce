
import { CartResponse, categoryType, ProductType } from "../types";
import { brandType } from "../types";
import {decodeAuthenticatedUserToken} from "@/app/utilities";

export async function getAllProducts(): Promise<ProductType[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
      cache: "force-cache",
    });
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getSpecificProduct(id: string,): Promise<ProductType | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getAllCategories(): Promise<categoryType[] | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
    );
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getSpecificCategories(id: string,): Promise<ProductType | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    );
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getAllBrands(): Promise<brandType[] |  undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getSpecificBrand( id: string,): Promise<brandType | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    );
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}
// ,{cache:'force-cache'}
export async function getProductsByBrand(id: string): Promise<ProductType[]> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`);
    const finalRes = await res.json();
    return finalRes.data ?? [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getUserCart(): Promise<CartResponse | undefined> {
  const userToken = await decodeAuthenticatedUserToken();
  if(userToken){
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart`,{
        headers: {token :userToken}
        }
      );
      const finalRes = await res.json();
      console.log("finalRes of cart",finalRes);
      return finalRes.data;
    } catch (error) {
      console.log("error", error);
    }

  }
  else {
    return undefined;
  }
}

export async function updateCartCount(productId: string, count: number) {
  const userToken = await decodeAuthenticatedUserToken();

  if (!userToken) {
    return new Error("Session ended, please login again");
  }

  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
      {
        method: "PUT",
        headers: {
          token: userToken, 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      }
    );

    const data = await res.json();
    console.log("cart update response:", data);

    return data;
  } catch (error) {
    console.log("error updating cart", error);
  }
}

// export async function deleteCartItem(productId: string) {
//   const userToken = await decodeAuthenticatedUserToken();

//   if (!userToken) {
//     return new Error("Session ended, please login again");
//   }

//   try {
//     const res = await fetch(
//       `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
//       {
//         method: "DELETE",
//         headers: {
//           token: userToken, 
//           "Content-Type": "application/json",
//         },
    
//       }
//     );

//     const data = await res.json();
//     console.log("item delete", data);

//     return data;
//   } catch (error) {
//     console.log("error delete", error);
//   }
// }

