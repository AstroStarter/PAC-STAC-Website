// @ts-nocheck
import { defineConfig } from "astro/config";

import compress from "astro-compress";
import rome from "astro-rome";
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import sitemap from "@astrojs/sitemap";
import worker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
	output: "server",
	// TODO Place your site URL here
	// site: "",
	integrations: [
		worker(),
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
	adapter: node({
		mode: "standalone | middleware",
	}),
});
