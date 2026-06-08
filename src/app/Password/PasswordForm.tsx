'use client'

import { updatePassword } from './PasswordActions'
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    newPassword: z.string().min(6, "Must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

const fieldStyle = `h-10 px-3 border-gray-200 border-2 
rounded-md outline-none focus-visible:outline-none 
focus-visible:ring-0 focus-visible:border-green-600 
focus:border-green-300 focus:shadow-green-300/30 
focus:shadow-md transition`;

export default function Password() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
 const [showCurrent, setShowCurrent] = useState(false);
const [showNew, setShowNew] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

  const { handleSubmit, control, reset } = useForm<PasswordFormData>({
    mode: "onChange",
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: PasswordFormData) => {
    setLoading(true);
    setSuccess(false);

    const res = await updatePassword({
      currentPassword: data.currentPassword,
      password: data.newPassword,
      rePassword: data.confirmPassword,
    });

    setLoading(false);

    if (res?.success || !res?.error) {
      setSuccess(true);
      reset();
    } else {
      console.log(res);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 w-full mx-auto"
    >
      <FieldGroup>

        {/* Current Password */}
        <Controller
          name="currentPassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Current Password</FieldLabel>

             <div className="relative">
  <Input
    {...field}
    type={showCurrent ? "text" : "password"}
    className={fieldStyle}
    placeholder="Enter current password"
  />

  <button
    type="button"
    onClick={() => setShowCurrent(!showCurrent)}
    className="absolute right-3 top-2.5 text-gray-500"
  >
    {showCurrent ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* New Password */}
        <Controller
          name="newPassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>New Password</FieldLabel>

 <div className="relative">
              <Input
                {...field}
                className={fieldStyle}
                type="password"
                placeholder="Enter your new password"
              />
               <button
    type="button"
    onClick={() => setShowNew(!showNew)}
    className="absolute right-3 top-2.5 text-gray-500"
  >
    {showNew ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Confirm Password</FieldLabel>

<div className="relative">
              <Input
                {...field}
                className={fieldStyle}
                type="password"
                placeholder="Confirm your new password"
              />

 <button
    type="button"
    onClick={() => setShowConfirm(!showConfirm)}
    className="absolute right-3 top-2.5 text-gray-500"
  >
    {showConfirm ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

      </FieldGroup>

      {/* Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-48 h-10 p-6 bg-[#E17100] text-base font-medium flex items-center gap-2"
      >
        <FaLock />
        {loading ? "Updating..." : "Change Password"}
      </Button>

      {/* Success message */}
      {success && (
        <p className="text-green-600 text-sm mt-2">
          Password updated successfully ✅
        </p>
      )}
    </form>
  );
}