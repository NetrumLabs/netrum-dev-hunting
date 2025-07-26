// src/applications/DEV-APPLICATION.ts

import fs from "fs";
import path from "path";

// ✅ Define devRegistry locally — no import needed
const devRegistry = [
  {
    name: "Jhon Russel Masigcal",
    folder: "0xjhinkz-dev",
  },
];

type DevInfo = {
  name: string;
  folder: string;
};

const devApplications: { name: string; content: string }[] = [];

console.log("🚀 Application loaded");

devRegistry.forEach((dev: DevInfo) => {
  const mdPath = path.resolve(process.cwd(), "dev", dev.folder, "application.md");

  try {
    const content = fs.readFileSync(mdPath, "utf-8");
    devApplications.push({
      name: dev.name,
      content,
    });
  } catch (e) {
    console.warn(`⚠️ Could not load: ${mdPath}`);
  }
});

console.log("✅ Registered Developers:");
devApplications.forEach((dev, i) => {
  console.log(`${i + 1}. ${dev.name}`);
});

export { devApplications };
