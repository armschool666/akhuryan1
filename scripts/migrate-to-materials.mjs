import { readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";

const imp = JSON.parse(readFileSync("app/content/wordpress-import.json", "utf8"));

const announcement = imp.pages.find((p) => p.sourceUrl.includes("2018/06/26"));
const history = imp.pages.find((p) => p.sourceUrl.includes("2016/12/08"));

function cleanBody(text) {
  return text
    .replace(/^.*? by \S+\s+/, "")      // remove "Title date by author"
    .replace(/\s*-->\s*\S+\s*$/, "")    // remove --> category at end
    .replace(/\s*Չдасакарgвад\s*$/, "") // remove Uncategorized label
    .replace(/\s+/g, " ")
    .trim();
}

// Load existing materials
const existing = JSON.parse(readFileSync("data/materials.json", "utf8"));

// Filter out any old wp entries we may have added
const filtered = existing.filter(
  (e) => !e.id.startsWith("wp-")
);

const wpEntries = [
  {
    id: "wp-announcement-2018",
    title: announcement.title.replace(/\s*\|\s*ՀԱՑԻԿԻ ՄԻՋՆԱԿԱՐԳ ԴՊՐՈՑ\s*$/, ""),
    sectionSlug: "about",
    sectionTitle: "Դпрогi маасін",
    pageSlug: "announcements",
    pageTitle: "Hajtararутjунnер",
    body: cleanBody(announcement.text),
    files: [],
    date: "2018-06-26",
  },
  {
    id: "wp-village-history-2016",
    title: history.title.replace(/\s*\|\s*ՀАЦІКІ МІЖНАКАРГ ДПРОЦ\s*$/, "").replace(/\s*\|\s*ՀAЦИКI МIDZNAKАРG ДПРОЦ\s*$/, "").replace(/\s*\|.*$/, ""),
    sectionSlug: "about",
    sectionTitle: "Дпроgi mааsin",
    pageSlug: "history",
    pageTitle: "Патмутjун",
    body: cleanBody(history.text),
    files: [],
    date: "2016-12-08",
  },
];

const result = [...filtered, ...wpEntries];
writeFileSync("data/materials.json", JSON.stringify(result, null, 2), "utf8");
console.log("Done. Entries:", result.length);
result.forEach((e) => console.log(" -", e.date, e.title.substring(0, 50), `[${e.pageSlug}]`));
