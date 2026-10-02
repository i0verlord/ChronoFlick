import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SettingsProvider } from './src/context/SettingsContext';
import { useOrientation } from './src/hooks/useOrientation';
import { PortraitDashboard } from './src/components/PortraitDashboard';
import { LandscapeClock } from './src/components/LandscapeClock';

const AppContent = () => {
  const orientation = useOrientation();
  const isLandscape = orientation === 'LANDSCAPE';

  return (
    <View style={styles.container}>
      {isLandscape ? <LandscapeClock /> : <PortraitDashboard />}
      <StatusBar hidden={isLandscape} style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
