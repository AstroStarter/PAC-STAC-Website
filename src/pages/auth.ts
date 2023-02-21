import type { AstroAuthConfig } from "auth-astro";
import { AstroAuth } from "auth-astro";

// @ts-ignore
import GitHub from "@auth/core/providers/github";
import env from "@lib/env.js";

export const authOpts: AstroAuthConfig = {
	providers: [
		GitHub({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
		}),
	],
};

export const { get, post } = AstroAuth(authOpts);
