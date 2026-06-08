import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zod schemas - backend
const backendSchema = zod
  .object({
    name: zod
      .string("Name must be text")
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be Maximum 15 characters"),
    email: zod.string().nonempty("*Email is required").email("Email isn't in format"),
    password: zod
      .string("Password isn't vailde")
      .nonempty("Password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.",
      ),
    rePassword: zod
      .string("RePassword isn't vailde")
      .nonempty("RePassword is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.",
      ),
    phone: zod
      .string("Phone isn't vailde")
      .nonempty("Phone is required")
      .regex(/^01[0125][0-9]{8}$/, "Phone must be Egyption number"),
  })
  .refine(
    function (value) {
      return value.password === value.rePassword;
    },
    { message: "Passwords are inmatch", path: ["rePassword"] },
  );

// terms schema
const termsSchema = zod.boolean().refine((value) => value === true, {
  message: "You must accept the terms",
});

export const signupSchema = backendSchema.extend({
  terms: termsSchema,
});


