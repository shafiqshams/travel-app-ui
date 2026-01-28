![Expo](https://img.shields.io/badge/Expo-000000?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-Tailwind%20for%20React%20Native-38BDF8)
![License](https://img.shields.io/badge/License-MIT-green)


# Expo NativeWind Boilerplate

A ready-to-use **React Native Expo + NativeWind (Tailwind CSS)** boilerplate — so you can skip the painful setup and start building immediately.

Setting up NativeWind correctly in an Expo project can be frustrating:
- Babel config
- Tailwind config
- Metro issues
- Expo + NativeWind compatibility warnings
- Cache problems
- Repeated trial & error

This boilerplate solves all of that once and for all.

---

## 🚀 What’s Included

- ✅ Expo (TypeScript)
- ✅ NativeWind (Tailwind CSS) fully configured
- ✅ Metro + Babel setup done
- ✅ Minimal starting structure (easy to extend as your app grows)
- ✅ Rename script (auto-updates app name & slug)
- ✅ Clean cache behavior (reset scripts)
- ✅ Ready to run on **Expo Go**, Android, and iOS
- ✅ Zero manual NativeWind setup
- ✅ Works immediately with Expo Go

You clone → install → run.  
That’s it.

---

## 📦 Requirements

- Node.js (LTS recommended)
- Yarn (recommended)
- Expo Go app (for running on a real device) or use Android Studio or Xcode. 
- **Expo CLI is used via `npx` / `yarn` and does not need to be installed globally.**
---

## 🧪 Quick Start (Recommended Workflow)

Use **degit** to download the boilerplate **without git history**:

```bash
npx degit shafiqshams/expo-nativewind-boilerplate my-app
cd my-app
yarn setup or yarn install
```
That’s it.
Your app is installed, renamed, and running 🚀

#### What happens during yarn setup?
- Installs dependencies
- Automatically renames:
  - package.json
  - Expo app name
  - Expo slug
- Uses the folder name (my-app) as the base
- No manual changes needed.

#### Why degit?
It:
- copies files only
- removes all Git metadata
- gives a **clean starting point**
- avoids inheriting commit history.

**Because there is no Git initialised, you must:**
```bash
git init
git add .
git commit -m "Initial commit"
```
**This project becomes yours with a clean Git history, ready for development.**

---

## 🏃 Running the App
```bash
yarn start      # Expo Go
yarn android    # Android emulator
yarn ios        # iOS simulator (macOS)
```
---

## 🎨 NativeWind Usage Example

```tsx
// App.tsx
import { View, Text } from "react-native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-xl font-bold">
        NativeWind is working 🚀
      </Text>
    </View>
  );
}
```
---

### 🛠 Scripts
```
yarn setup        # Install dependencies, auto-rename app, and start Expo
yarn start        # Start the Expo development server
yarn android      # Run the app on Android emulator/device
yarn ios          # Run the app on iOS simulator (macOS only)
yarn clean        # Remove node_modules and Expo cache folders
yarn reinstall    # Clean project and reinstall dependencies
yarn reset        # Deep clean caches and reinstall dependencies
yarn start:clean  # Start Expo with a clean cache
```
---

### 🤔 Why this boilerplate?

Setting up **Expo + NativeWind** from scratch is doable — but in practice it often:

- Takes more time than expected
- Breaks due to version or config mismatches
- Produces unclear or confusing error messages
- Repeats the same setup work for every new project

**This boilerplate is meant to remove that overhead and give you a ready-to-use starting point in minutes.**

---

### ⭐ Final Note

If this boilerplate saved you time, consider starring the repo⭐

It helps other developers find it too.

**Happy coding! 🚀**
