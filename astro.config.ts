import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";

// https://astro.build/config
export default defineConfig({
	output: "server",
	// TODO Place your site URL here
	// site: "",
	integrations: [
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
