'use server';
import { getUserCart } from "@/api/services/route.services";
import { FormData } from "./Signin.type";
import { cookies } from "next/headers";


export async function SigninActiondata(data  : FormData){
     try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        {
          method: "post",
          body: JSON.stringify(data ),
          headers: { "content-type": "application/json" },
        },
      );
      const finalRes = await res.json();
      console.log("finalRes", finalRes);

      if(res.ok){
const cookie = await cookies();
cookie.set('tkn', finalRes.token ,{
  httpOnly:true,
  maxAge:60*60*24,
  sameSite:"lax",
});

return {
  ok:true,
   data: { message: finalRes.message },
      }
      };
return {
  ok: false,
   data: { message: finalRes.message },
      }      }
    catch (error) {
      console.log("error", error);
     
    }
  }

  export async function getCurrentLoggedInOserCart(){
   return getUserCart();
  }