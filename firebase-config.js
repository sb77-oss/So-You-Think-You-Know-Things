// ═══════════════════════════════════════════════════════════════
//  firebase-config.js
//  ─────────────────────────────────────────────────────────────
//  THE ONLY FILE YOU NEED TO EDIT after creating your Firebase
//  project. Replace every value below with your own project's
//  values. You get these from:
//
//    Firebase Console → Your Project → Project Settings →
//    "Your apps" → Web app → SDK setup and configuration
//
//  Both host.html and team.html import this file.
//  Never commit this file to a public repo with real credentials.
//  For GitHub Pages it is unavoidable — use Firestore Security
//  Rules (included in the setup instructions) to limit what
//  anonymous users can actually do.
// ═══════════════════════════════════════════════════════════════

export const firebaseConfig = {
  apiKey:            "REPLACE_WITH_YOUR_API_KEY",
  authDomain:        "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId:         "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket:     "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId:             "REPLACE_WITH_YOUR_APP_ID"
};
