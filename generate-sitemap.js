const SitemapGenerator = require("sitemap-generator");

// Create generator
const generator = SitemapGenerator("https://naprawaprzemysl.pl", {
  stripQuerystring: false,
});

// Register event listeners
generator.on("done", () => {
  console.log("Sitemap generated!");
});

// Start the crawler
generator.start();
