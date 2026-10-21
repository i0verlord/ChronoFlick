# ChronoFlip ⏱️

**ChronoFlip** is a Sensor-Driven React Native Desk Clock built with Expo. The application leverages your device's physical gyroscope to seamlessly transition between a Portrait settings dashboard and an immersive Landscape digital clock display.

## ✨ Features

- **Sensor-Driven UI**: Dynamically changes layouts based on device orientation (Portrait vs. Landscape).
- **Desk Clock Mode**: Uses `expo-keep-awake` to prevent your screen from falling asleep while the landscape clock is active.
- **Customizable Themes**: Choose between 4 distinct themes ("Cyberpunk Yellow", "Matrix Green", "Dark Mode", and "Light Mode").
- **State Persistence**: Your 12/24 hour preferences and active themes are automatically saved locally using `AsyncStorage`.
- **High-Performance Ticking**: Built with `requestAnimationFrame` hooks to ensure millisecond accuracy without choking the React render cycle.
- **Comic Sans Typography**: Defaults to a casual, marker-felt style font across iOS and Android for a unique retro desk clock feel.

## 🚀 Getting Started

### 🏃‍♂️Running the App

Start the Expo development server:

```bash
npm start
```

### 🧪 Testing

```bash
npm run test
# or
npx jest
```
