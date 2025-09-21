#!/bin/bash

echo "🚀 Deploying Physique AI to Vercel..."

# Build the project
npm run build

echo "✅ Build complete!"
echo "📁 Files ready in dist/ folder"
echo ""
echo "🔧 MANUAL VERCEL DEPLOYMENT STEPS:"
echo "1. Go to vercel.com/dashboard"
echo "2. Click 'Add New' -> 'Project'"
echo "3. Import from GitHub: physique-visionary"
echo "4. Set custom domain: sculptyai.com"
echo "5. Deploy!"
echo ""
echo "✅ Your favicon files are ready:"
ls -la public/favicon*
echo ""
echo "💪 Your Physique AI logo will appear in browser tabs!"