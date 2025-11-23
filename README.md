# Furniture Marketplace Mobile App

This is a React Native app I made for a school project. It's basically a furniture marketplace where people can buy and sell furniture. The design is based on a Figma prototype we got, and I built it to work on mobile devices.

## Project Similarity Clarification

This project was built from a course assignment using a shared Figma prototype.

### Parts that are shared
- React Native / Expo starter setup
- Folder structure (screens, components, assets)
- Basic login and signup forms
- Initial navigation and screen layout

### Parts that are written by me:
- **Favorites functionality and state handling** - Custom implementation for adding/removing favorites with state management
- **Creating listings with image upload** - Full implementation of the listing creation flow with image picker integration
- **Search and category filter logic** - Custom search functionality and category filtering system

## What it does

The app lets users browse furniture, search for items, and create their own listings. You can also favorite items, contact sellers, and manage your profile. It has all the basic features you'd expect from a marketplace app.

## Features

- **Sign up and login** - Users can create accounts and sign in
- **Browse items** - See all available furniture listings
- **Filter by category** - Sort items by type (chairs, tables, etc.)
- **Search** - Find specific items using keywords
- **Product pages** - View detailed info about each item
- **Image carousel** - Scroll through multiple product photos
- **Contact seller** - Opens email to message the seller
- **Favorites** - Save items you like and view them later
- **Add listings** - Create new listings and upload photos from your gallery
- **My listings** - See all the items you've posted
- **Settings** - Update your personal information
- **Help center** - Links to help resources
- **Logout** - Sign out of your account

## Project structure

```
FurnitureMobileApp/
│── assets/              # Icons for loading screen
│── src/
│   ├── assets/          # Images and graphics used in the app
│   ├── components/      # Reusable components
│   ├── data/            # Product and category data
│   ├── screens/         # All the screens
│   │   ├── auth/        # Login and signup screens
│   │   └── app/         # Main app screens
│   └── utils/           # Helper functions and constants
│── App.js               # Main app file that handles navigation
```

## How to run it

1. Clone the repo:
   ```bash
   git clone https://github.com/Tuvi9/FurnitureApp.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npx expo start
   ```

4. Use the Expo Go app on your phone to scan the QR code

5. You can edit files in the `src` folder and the changes will show up automatically
