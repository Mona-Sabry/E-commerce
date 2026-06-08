import * as zod from "zod";
import { signinSchema } from "./Signin.schemas";

export 
type FormData = zod.infer<typeof signinSchema> ;