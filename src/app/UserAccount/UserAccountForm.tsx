'use client'

import { updateUser } from "./userAccountActions";
import { signupSchema } from "../(Auth)/signup/Signup.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "../(Auth)/signup/Signup.type";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSaveSharp } from "react-icons/io5";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";


const fieldStyle = ` h-10 px-3 border-gray-200 border-2 
rounded-md outline-none focus-visible:outline-none 
focus-visible:ring-0 focus-visible:border-green-600 
focus:border-green-300 focus:shadow-green-300/30 focus:shadow-md transition`;

type UserProps = {
  user: {
    name: string;
    email: string;
    phone: string;
  };
};

export default function UserAccountForm({ user }: UserProps) {
  
     const { handleSubmit, control } = useForm<FormData>({
    mode: "onChange",
     resolver: zodResolver(signupSchema),
        defaultValues: {
          name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
        },
      });

      const onSubmit = async (data:FormData) => {
  const res = await updateUser({
    name: data.name,
    email: data.email,
    phone: data.phone,
  });

  console.log("updated user:", res);
};


  return (
    <div>
   <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 w-full mx-auto"
    >
      <FieldGroup>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Full Name </FieldLabel>
              <Input
                {...field}
                className={fieldStyle}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder={user?.name}
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email"> Email Address </FieldLabel>
              <Input
                {...field}
                className={fieldStyle}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
                type="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phone"> Phone Number </FieldLabel>
              <Input
                {...field}
                className={fieldStyle}
                id="phone"
                aria-invalid={fieldState.invalid}
                placeholder="01XXXXXXXXX"
                autoComplete="off"
                type="tel"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
</FieldGroup>

      <Button className="w-48 h-10 p-6 border-lg bg-[#16A34A] text-base font-medium hover:cursor-pointer">
        <IoSaveSharp />
        save changes
      </Button>
      <hr className="border-gray-200 " />
      <h4 className="text-base font-bold my-2">
       Account Information
      </h4>
      <div className='flex justify-between'>
        <h4 className='text-base font-medium text-[#6a7282]'>User ID</h4>
        <h4></h4>
      </div>

      <div className='flex justify-between'>
        <h4 className='text-sm font-medium text-[#6a7282]'>Role</h4>
        <h4 className='text-[#15803D] bg-[#DCFCE7] px-2.5 py-1 rounded-xl'>user</h4>
      </div>
    </form>
   </div>
  )
}
