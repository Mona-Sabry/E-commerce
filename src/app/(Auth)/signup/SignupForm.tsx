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
import { Progress } from "@/components/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { signupSchema } from "./Signup.schemas";
import { toastMessage } from "./Signup.toaster";
import { FormData } from "./Signup.type";
import { SignupActiondata } from "./signup.actions";

const fieldStyle = `h-10 px-3 border-gray-200 border-2 
rounded-md outline-none focus-visible:outline-none 
focus-visible:ring-0 focus-visible:border-green-600 
focus:border-green-300 focus:shadow-green-300/30 focus:shadow-md transition`;

//---------------------- {progress-password}-----------------------------------
export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} className="w-full" />;
}

//-------------------- calculate password strongth---------------------------
export function calculatePasswordStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score += 25;
  if (/[a-z]/.test(password)) score += 15;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[0-9]/.test(password)) score += 15;
  if (/[^A-Za-z0-9]/.test(password)) score += 30;
  return Math.min(score, 100);
}

export default function SignupForm() {
  const router = useRouter();

  const { handleSubmit, control, watch } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
  });
  const password = watch("password") || "";
  const score = calculatePasswordStrength(password);

  const getStrength = (score: number) => {
    if (score < 40) return "Weak";
    if (score < 80) return "Medium";
    return "Strong";
  };

  //---------------------------- change progress color-------------------------
  const getColor = (score: number) => {
    if (score < 40) return "bg-red-500";
    if (score < 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  async function mySubmit(data: FormData){
     console.log("FORM DATA:", data);
    
    try {
      const response = await SignupActiondata(data);

      if (response.ok) {
        toastMessage(
          "Congratulations, your account has been created",
          "success",
        );
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      } else {
        if (response.data?.message === "duplicate") {
          toastMessage("This email or username is already taken.", "error");
        } else {
          toastMessage(
            "Oops! Your account hasn't been created. Please try again.",
            "error",
          );
        }
      }
    } catch (error) {
      toastMessage("Something went wrong. Please try again.", "error");
      console.error(error);
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(mySubmit)}
      className="flex flex-col gap-4 p-4 w-full max-w-xl mx-auto"
    >
      <FieldGroup>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name"> Name* </FieldLabel>
              <Input
                {...field}
                className={fieldStyle}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="Ali"
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
              <FieldLabel htmlFor="email"> Email* </FieldLabel>
              <Input
                {...field}
                className={fieldStyle}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="ali@example.com"
                autoComplete="off"
                type="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="w-full max-w-xl mx-auto flex flex-col gap-1">
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="relative" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password"> Password* </FieldLabel>
                <Input
                  {...field}
                  className={fieldStyle}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="create a strong password"
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                />
                <div className="flex gap-2">
                  <Progress
                    value={score}
                    className={`progress mt-2`}
                    data-progress={
                      score < 40 ? "weak" : score < 80 ? "medium" : "strong"
                    }
                  />
                  <span
                    className={`text-sm font-medium mt-1 ${
                      score < 40
                        ? "text-red-500"
                        : score < 80
                          ? "text-yellow-500"
                          : "text-green-500"
                    }`}
                  >
                    {getStrength(score)}
                  </span>
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <button //show/hide password
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute -right-120 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </Field>
            )}
          />
          <p className="text-sm font-normal text-gray-400 mr-40">
            Must be at least 8 characters with numbers and symbols
          </p>
        </div>

        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="relative" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="rePassword">Confirm Password*</FieldLabel>
              <Input
                {...field}
                className={fieldStyle}
                id="rePassword"
                aria-invalid={fieldState.invalid}
                placeholder="confirm your password"
                autoComplete="off"
                type={showConfirm ? "text" : "password"}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              <button //show/hide repassword
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute -right-120 top-1/2 translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phone"> Phone Number* </FieldLabel>
              <Input
                {...field}
                className={fieldStyle}
                id="phone"
                aria-invalid={fieldState.invalid}
                placeholder="+1 234 567 8900"
                autoComplete="off"
                type="tel"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="terms"
          control={control}
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
                <Label htmlFor="terms" className="text-base font-medium">
                  I agree to the
                  <span className="text-[#16A34A]"> Terms of Service </span> and
                  <span className="text-[#16A34A]"> Privacy Policy </span> *
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

      <Button className="h-10 border-lg bg-[#16A34A] text-base font-medium hover:cursor-pointer">
        <FaUserPlus />
        Create My Account
      </Button>
      <hr className="border-gray-200 " />
      <h4 className="text-base font-medium my-10">
        Already have an account?
        <Link href="/signin" className="text-[#16A34A] pl-2">
          Sign In
        </Link>
      </h4>
    </form>
  );
}
