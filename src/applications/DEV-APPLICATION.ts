import { registeredDevs } from "../main.js";

registeredDevs.push({
  name: "0xEixa",
  discord: "0xeixa",
  github: "https://github.com/nheoshikuyanhemo",
  languages: ["TypeScript", "Python"],
  experience: "Newbie, still learning Web3 and AI",
  aiTools: ["ChatGPT", "Langchain", "Pinecone"],
  reason: "I’m a student passionate about building decentralized AI tools."
});

console.log("🚀 Application loaded");
console.log("✅ Registered Developers:");
console.log(registeredDevs.map((d, i) => `${i + 1}. ${d.name}`).join("\n"));
