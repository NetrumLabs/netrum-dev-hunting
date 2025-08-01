#!/bin/bash

echo "🧹 Resolving .gitignore and tsconfig.main.tsbuildinfo conflict..."

# Ensure tsconfig tsbuildinfo is in .gitignore
if ! grep -q 'tsconfig.*.tsbuildinfo' .gitignore; then
    echo "tsconfig.*.tsbuildinfo" >> .gitignore
    echo "✅ Added tsconfig.*.tsbuildinfo to .gitignore"
fi

# Remove conflict markers from .gitignore if any
sed -i '/^<<<<<<<\|^=======\|^>>>>>>>/d' .gitignore

# Remove tsbuildinfo file from Git tracking but keep it locally
if git ls-files --error-unmatch tsconfig.main.tsbuildinfo >/dev/null 2>&1; then
    git rm --cached tsconfig.main.tsbuildinfo
    echo "🗑️ Removed tsconfig.main.tsbuildinfo from Git tracking"
else
    echo "ℹ️ tsconfig.main.tsbuildinfo not tracked"
fi

# Add changes and commit
git add .gitignore
git commit -m "🔧 Fix: Resolved .gitignore conflict and removed tsconfig.main.tsbuildinfo" || echo "✅ No changes to commit."

echo "🚀 Done. You can now push your branch with: git push origin your-branch-name"
