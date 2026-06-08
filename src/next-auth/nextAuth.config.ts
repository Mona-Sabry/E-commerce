import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from 'jwt-decode'

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "fresh cart credentials",
      credentials: {
        email: {
          label: "Email Address",
          placeholder: "Enter your email",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
      },
      authorize: async function (credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "post",
            body: JSON.stringify(credentials),
            headers: { "content-type": "application/json" },
          },
        );
        const finalRes = await res.json();
        console.log("finalRes", finalRes);

if (finalRes.message !== "success") return null;

      const data:{id:string}= jwtDecode(finalRes.token);

if(finalRes.message === "success"){
 return {
            name: finalRes.user.name,
            email: finalRes.user.email,
            id: data.id,
            tokenCredentials: finalRes.token,
          }
}
         
             return null;
        }

    }),
  ],

  callbacks: {
    jwt: function (param) {
      if (param.user) {
        param.token.routeToken = param.user.tokenCredentials;
        param.token.id = param.user.id
      }
      console.log("jwt params", param);
      return param.token;
    },

session:function(param){
   param.session.id = param.token.id; 
   param.session.routeToken = param.token.routeToken;
console.log("session's param", param);
return param.session;
  },
  },

  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/signin",
  },
};
