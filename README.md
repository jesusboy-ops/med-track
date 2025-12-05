# MedTrack - Medication Management Platform

A modern, secure medication tracking platform built with React, Firebase, and Tailwind CSS.

## Features

- 🔐 Secure authentication with Firebase
- 💊 Medication tracking and reminders
- 📊 Analytics dashboard
- 💬 Pharmacy chat integration
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Charts**: Recharts
- **Icons**: Heroicons
- **Routing**: React Router v7

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd medtrack
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Add your Firebase configuration to `.env.local`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

5. Start the development server:
```bash
npm run dev
```

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password
4. Create Firestore Database:
   - Go to Firestore Database
   - Create database in test mode
5. Copy your Firebase config to `.env.local`

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel:
   - Go to Project Settings > Environment Variables
   - Add all `VITE_FIREBASE_*` variables from your `.env.local`
6. Deploy!

### Environment Variables for Vercel

Make sure to add these in Vercel Dashboard:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

## Project Structure

```
medtrack/
├── src/
│   ├── components/       # Reusable components
│   │   ├── modals/      # Modal components
│   │   ├── cards/       # Card components
│   │   ├── charts/      # Chart components
│   │   └── ui/          # UI components
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── services/        # API and Firebase services
│   └── utils/           # Utility functions
├── public/              # Static assets
└── .env.local          # Environment variables (not in git)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Security

- All Firebase credentials are stored in environment variables
- `.env.local` is gitignored
- HIPAA-compliant data handling
- Secure authentication flows

## License

MIT

## Support

For support, email support@medtrack.com or open an issue in the repository.
