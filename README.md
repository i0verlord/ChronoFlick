# ChronoFlip ⏱️

**ChronoFlip** is a Sensor-Driven React Native Desk Clock built with Expo. The application leverages your device's physical gyroscope to seamlessly transition between a Portrait settings dashboard and an immersive Landscape digital clock display.

## ✨ Features

- **Sensor-Driven UI**: Dynamically changes layouts based on device orientation (Portrait vs. Landscape).
- **Desk Clock Mode**: Uses `expo-keep-awake` to prevent your screen from falling asleep while the landscape clock is active.
- **Customizable Themes**: Choose between 4 distinct themes ("Cyberpunk Yellow", "Matrix Green", "Dark Mode", and "Light Mode").
- **State Persistence**: Your 12/24 hour preferences and active themes are automatically saved locally using `AsyncStorage`.
- **High-Performance Ticking**: Built with `requestAnimationFrame` hooks to ensure millisecond accuracy without choking the React render cycle.
- **Comic Sans Typography**: Defaults to a casual, marker-felt style font across iOS and Android for a unique retro desk clock feel.

## 🛠️ Tech Stack

- **Framework**: React Native / Expo
- **Language**: TypeScript
- **Testing**: Jest, `@testing-library/react-native`
- **Core Modules**:
  - `expo-screen-orientation`
  - `expo-keep-awake`
  - `@react-native-async-storage/async-storage`

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed along with the Expo CLI. You will also need the **Expo Go** application installed on your iOS or Android device if you want to test the physical orientation sensors.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ChronoFlick.git
   cd ChronoFlick/chronoflip
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the App

Start the Expo development server:
```bash
npm start
```

- **Physical Device (Recommended)**: Open the Expo Go app on your phone and scan the generated QR code. Rotate your device to see the app flip into desk clock mode!
- **Emulator/Simulator**: Press `a` for Android or `i` for iOS in your terminal. Note: You will need to manually trigger rotation inside the emulator's hardware menus to see the landscape clock.

## 🧪 Testing

ChronoFlip includes automated unit tests to verify component rendering and state management.

To run the test suite, execute:
```bash
npm run test
# or
npx jest
```

## 📜 License
This project is open-source and available under the MIT License.
