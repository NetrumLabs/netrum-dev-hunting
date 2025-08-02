// src/📁 applications/DEV-APPLICATION.ts
import fs from "fs";
import path from "path";
const devApplications = [];
console.log("🚀 Application loaded");
const devRegistry = [
    {
        name: "Barizi M",
        folder: "barizi211-dev",
    }
];
devRegistry.forEach((dev) => {
    const mdPath = path.resolve(process.cwd(), "dev", dev.folder, "application.md");
    try {
        const content = fs.readFileSync(mdPath, "utf-8");
        devApplications.push({
            name: dev.name,
            content,
        });
    }
    catch (e) {
        console.warn(`⚠️ Could not load: ${mdPath}`);
    }
});
console.log("✅ Registered Developers:");
devApplications.forEach((dev, i) => {
    console.log(`${i + 1}. ${dev.name}`);
});
export { devApplications };
