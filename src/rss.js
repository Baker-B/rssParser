let Parser = require("rss-parser");
let parser = new Parser({
  customFields: {
    // feed: ['extendedDescription'],
    item: ["media:group"],
    "media:group": ["media:description"],
  },
});

(async () => {
  let feed = await parser.parseURL(
    "https://www.youtube.com/feeds/videos.xml?playlist_id=PL2yzO4BDk7OuTWsq4004KBp-7xjYAL-wZ"
  );
  console.log(feed.title);

  feed.items.forEach((item) => {
    // console.log(item.title + " : " + item.link);
    console.log(item["media:group"]["media:description"]);
  });
})();
