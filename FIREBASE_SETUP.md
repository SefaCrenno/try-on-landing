# Firebase Setup for Contact Form

This document provides instructions on how to set up Firebase for the contact form in the Luuls AI application.

## Prerequisites

1. A Google account
2. Node.js and npm installed

## Steps to Set Up Firebase

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "Luuls AI")
4. Follow the prompts to set up your project (you can disable Google Analytics if not needed)
5. Click "Create project"

### 2. Set Up Firestore Database

1. In your Firebase project, navigate to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode" and select a location closest to your users
4. Click "Enable"

### 3. Create a Collection for Contact Messages

1. In Firestore, click "Start collection"
2. Set the Collection ID to "contactMessages"
3. You can skip adding the first document (our app will create documents automatically)

### 4. Set Up Firebase Authentication (Optional)

If you want to secure your Firestore database with authentication:

1. Navigate to "Authentication" in the left sidebar
2. Click "Get started"
3. Enable the authentication methods you want to use (Email/Password is a good start)

### 5. Register Your Web App

1. In the Firebase console, click on the gear icon next to "Project Overview" and select "Project settings"
2. Scroll down to "Your apps" and click the web icon (</>) to add a web app
3. Register your app with a nickname (e.g., "Luuls AI Web")
4. Click "Register app"
5. Copy the Firebase configuration object that appears

### 6. Configure Environment Variables

1. In your project root, create or edit the `.env` file
2. Add your Firebase configuration values:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Replace the placeholder values with the actual values from your Firebase configuration.

### 7. Set Up Firestore Security Rules

1. In the Firebase console, navigate to "Firestore Database" > "Rules"
2. Update the rules to allow write access to the contactMessages collection:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public write access to contact messages
    match /contactMessages/{document=**} {
      allow write: if true;
      allow read: if false;
    }

    // Deny access to all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Click "Publish"

## Testing the Integration

1. Start your application
2. Open the contact form
3. Submit a test message
4. Check the Firebase console > Firestore Database > contactMessages collection to verify that your message was stored

## Security Considerations

- The current setup allows anyone to write to your contactMessages collection, which could lead to spam
- Consider implementing rate limiting or CAPTCHA to prevent abuse
- For production, you might want to use Firebase Cloud Functions to process form submissions with additional validation

## Troubleshooting

- If messages aren't being saved, check the browser console for errors
- Verify that your Firebase configuration values in the .env file are correct
- Ensure that your Firestore security rules allow write access to the contactMessages collection
- If you see "400 Bad Request" errors, make sure your Firebase project is properly set up and the API key is valid
- For Vite projects, remember that environment variables must be prefixed with `VITE_` to be accessible in the client-side code
