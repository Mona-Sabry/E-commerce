import * as zod from "zod";

// zod schemas - backend
const backendSchema = zod
  .object({
   email: zod.string().nonempty("*Email is required").email("Email isn't in format"),
    password: zod
      .string()
      .nonempty("*Password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      ),
  })
 
// terms schema
const termsSchema = zod.boolean().refine((value) => value === true, {
  message: "You must accept the terms",
});

export const signinSchema = backendSchema.extend({
  terms: termsSchema,
});


