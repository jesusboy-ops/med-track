# MedTrack - Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Firebase project configured with Authentication and Firestore
- Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Prepare Your Repository

1. Make sure all your code is committed to Git:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import your Git repository
3. Configure your project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. Add Environment Variables (click "Environment Variables"):
   ```
   VITE_FIREBASE_API_KEY=AIzaSyD1vjTIUU9TIv6WuNYNCMiLvtv-PYg8hNw
   VITE_FIREBASE_AUTH_DOMAIN=medtrack-8ea14.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=medtrack-8ea14
   VITE_FIREBASE_STORAGE_BUCKET=medtrack-8ea14.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=789866166064
   VITE_FIREBASE_APP_ID=1:789866166064:web:3cad02af8ad37f95147af5
   VITE_FIREBASE_MEASUREMENT_ID=G-6F90NYTZ3Z
   ```

5. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and add environment variables when asked

## Step 3: Configure Firebase for Production

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project: medtrack-8ea14
3. Go to **Authentication** > **Settings** > **Authorized domains**
4. Add your Vercel domain (e.g., `medtrack.vercel.app`)

## Step 4: Update Firebase Security Rules

### Firestore Rules
Go to Firestore Database > Rules and update:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Add other collection rules as needed
  }
}
```

### Storage Rules
Go to Storage > Rules and update:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., https://medtrack.vercel.app)
2. Test the following:
   - ✅ Home page loads
   - ✅ Navigation works
   - ✅ Login modal opens
   - ✅ Registration works
   - ✅ Login works
   - ✅ Dashboard is accessible after login
   - ✅ All pages load correctly

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Add the custom domain to Firebase Authorized domains

## Environment Variables Management

To update environment variables:
1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add/Edit variables
3. Redeploy for changes to take effect

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Firebase Authentication Errors
- Verify domain is added to Firebase Authorized domains
- Check Firebase API key is correct
- Ensure Authentication is enabled in Firebase Console

### 404 Errors on Refresh
- Verify `vercel.json` has the rewrite rule for SPA routing
- Check that the file exists in your repository

## Monitoring

- View deployment logs: Vercel Dashboard > Deployments
- Monitor Firebase usage: Firebase Console > Usage
- Check errors: Vercel Dashboard > Analytics

## Support

- Vercel Docs: https://vercel.com/docs
- Firebase Docs: https://firebase.google.com/docs
- MedTrack Issues: Create an issue in your repository

---

**Your MedTrack app is now live! 🎉**
