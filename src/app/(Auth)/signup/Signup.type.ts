import * as zod from "zod";
import { signupSchema } from "./Signup.schemas";

export 
type FormData = zod.infer<typeof signupSchema> ;