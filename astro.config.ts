// @ts-nocheck
import { defineConfig } from "astro/config";

import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";
import worker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
	output: "server",
	site: "https://nikolahristov.tech",
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
