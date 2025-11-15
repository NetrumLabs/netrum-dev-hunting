export const devRegistry = [
  {
    name: "Kalitva",
    folder: "kalitva-dev"
  }
];

// 🚀 Вивід у консоль
console.log("🚀 Application loaded");
console.log("✅ Registered Developers:");
devRegistry.forEach((dev, i) => {
  console.log(`${i + 1}. ${dev.name}`);
});
