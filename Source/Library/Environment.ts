import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
	.object({
<<<<<<< HEAD
		AUTH_SECRET: z.string().default(""),
		AUTH_TRUST_HOST: z.string().default(""),
		GITHUB_ID: z.string().default(""),
		GITHUB_SECRET: z.string().default(""),
=======
		GH_AUTH_TOKEN: z.string().default(""),
>>>>>>> upstream/main
	})
	.parse(process.env);
