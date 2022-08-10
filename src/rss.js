let Parser = require("rss-parser");
let parser = new Parser({
  customFields: {
    // feed: ['extendedDescription'],
    item: ["media:group"],
    "media:group": ["media:description"],
  },
});

const rssUrl =
  "https://www.youtube.com/feeds/videos.xml?playlist_id=PL2yzO4BDk7OuTWsq4004KBp-7xjYAL-wZ";

(async () => {
  let feed = await parser.parseURL(rssUrl);
  console.log(feed.title);

  feed.items.forEach((item) => {
    // console.log(item.title + " : " + item.link);
    console.log(item["media:group"]["media:description"]);
  });
})();
