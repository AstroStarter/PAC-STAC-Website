// @ts-nocheck
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import compress from "astro-compress";
import rome from "astro-rome";
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import sitemap from "@astrojs/sitemap";
import worker from "astrojs-service-worker";

export default defineConfig({
	// TODO Place your site URL here
	// site: "",
	output: "server",
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
