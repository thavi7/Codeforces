const https = require("https");
const fs = require("fs");
const path = require("path");

const HANDLE = "avi_777";

function safeName(name) {
  return name.replace(/[\\/:*?"<>|]/g, "").replace(/\s+/g, "_");
}

const url = `https://codeforces.com/api/user.status?handle=${HANDLE}`;

https.get(url, (res) => {
  let data = "";

  res.on("data", chunk => data += chunk);
  res.on("end", () => {
    const json = JSON.parse(data);

    if (json.status !== "OK") {
      console.log("❌ Failed to fetch data");
      return;
    }

    if (!fs.existsSync("codeforces")) {
      fs.mkdirSync("codeforces");
    }

    const saved = new Set();

    json.result.forEach(sub => {
      if (sub.verdict !== "OK") return;

      const problem = sub.problem;
      const contest = problem.contestId || "practice";
      const index = problem.index;
      const name = safeName(problem.name);

      const folder = path.join("codeforces", String(contest));
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }

      const filename = path.join(folder, `${index}_${name}.txt`);
      if (saved.has(filename)) return;
      saved.add(filename);

      const content =
`Handle: ${HANDLE}
Contest ID: ${contest}
Problem: ${index} - ${problem.name}
Verdict: ${sub.verdict}
Language: ${sub.programmingLanguage}
Submission ID: ${sub.id}
`;

      fs.writeFileSync(filename, content, "utf-8");
    });

    console.log("✅ All Codeforces metadata files created successfully!");
  });
}).on("error", () => {
  console.log("❌ Network error");
});
