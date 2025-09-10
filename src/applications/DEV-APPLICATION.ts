// src/applications/DEV-APPLICATION.ts

import fs from "fs";
import path from "path";
import { devRegistry } from "../main";

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
  } catch (e: unknown) {  // Burada 'unknown' tipini kullandık
    // 'e' tipini 'Error' olarak doğruluyoruz
    if (e instanceof Error) {
      console.warn(`⚠️ Could not load: ${mdPath}. Error: ${e.message}`);
    } else {
      console.warn(`⚠️ Could not load: ${mdPath}. Unknown error.`);
    }
  }
});

console.log("✅ Registered Developers:");
devApplications.forEach((dev, i) => {
  console.log(`${i + 1}. ${dev.name}`);
});

export { devApplications };
