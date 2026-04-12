const https = require("https");

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

    const saved = new Set();

    json.result.forEach(sub => {
      if (sub.verdict !== "OK") return;

      const problem = sub.problem;
      const contest = problem.contestId || "practice";
      const index = problem.index;
      const name = safeName(problem.name);

      const key = `${contest}_${index}_${name}`;
      if (saved.has(key)) return;
      saved.add(key);

      console.log(
`Contest ID: ${contest}
Problem: ${index} - ${problem.name}
Language: ${sub.programmingLanguage}
Submission ID: ${sub.id}
`);
    });

    console.log("✅ Printed all unique accepted problems!");
  });
}).on("error", () => {
  console.log("❌ Network error");
});