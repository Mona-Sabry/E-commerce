"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { signinSchema } from "../signin/Signin.schemas";
import { FormData } from "../signin/Signin.type";
import { useState } from "react";
import { toastMessage } from "../signup/Signup.toaster";
import { useRouter } from 'next/navigation';
import { FaEye , FaEyeSlash } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { signIn } from "next-auth/react";
import { getCurrentLoggedInOserCart } from "./signin.actions";
import { CartContextType, useCart } from "@/app/_context/cartContext";


const fieldStyle = `h-10 px-3 border-gray-200 border-2 
rounded-md outline-none focus-visible:outline-none 
focus-visible:ring-0 focus-visible:border-green-600 
focus:border-green-300 focus:shadow-green-300/30 focus:shadow-md transition
font-medium text-base`


export default function SigninForm() {
   const router = useRouter();
   const{updateNumberOfCartItems} = (useCart() as CartContextType);
   
  const { handleSubmit, control, watch } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });
 

 async function mySubmit(data: FormData) {
  
  const res = await signIn('credentials', {redirect: false,...data});
  
if (res?.ok) {
      toastMessage("Login Successful", "success");
     const res= await getCurrentLoggedInOserCart();
     updateNumberOfCartItems( res?.products.length ||0);
     router.push("/");
      // setTimeout(() => {
      // }, 2000);
    } else {
      toastMessage("Invalid email or password", "error");
    }
}


  const [showPassword , setShowPassword] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(mySubmit)}
      className="flex flex-col gap-4 p-4 w-full max-w-xl mx-auto"
    >
      <FieldGroup>
        <Controller
          name="email"
          control={control}
          defaultValue=""  
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email"> Email Address* </FieldLabel>
              <Input
                {...field}
                className={`${ fieldStyle} pl-10`}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
                type="email"
              />
              <span className="absolute left-214 top-143 -translate-y-1/2 text-gray-400">
              <IoMdMail />
             </span>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="w-full max-w-xl mx-auto flex flex-col gap-1">
          <Controller
            name="password"
            control={control}
            defaultValue="" 
            render={({ field, fieldState }) => (
              <Field  className="relative" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password"> Password* </FieldLabel>
  
                <Input
                  {...field}
                  className= {`${fieldStyle} pl-10`}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="off"
                  type={ showPassword? 'text' : "password"}
                />
                 <span className="absolute left-3 top-11 -translate-y-1/2 text-gray-400">
                <IoLockClosedSharp />
                </span>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <button      //show/hide password
               type="button"
             onClick={() => setShowPassword(!showPassword)}
             className="absolute -right-120 top-12 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
          {showPassword ? <FaEyeSlash size={18}/> : <FaEye size={18}/>}
         </button>
              </Field>
            )}
          />
        </div>


        <Controller
          name="terms"
          control={control}
          defaultValue={false}
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={field.value ?? false}
                  onCheckedChange={(checked) =>
                    field.onChange(checked === true)
                  }
                />
                <Label htmlFor="terms" className="text-sm font-medium">
                  Keep me signed in
                </Label>
              </div>
              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      </FieldGroup>

      <Button className="w-full h-12 border-lg bg-[#16A34A] text-base font-medium hover:bg-[#15803D] hover:cursor-pointer">
        Sign In
      </Button>
     
    </form>
  );
}
