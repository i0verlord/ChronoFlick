import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { SettingsContext } from '../context/SettingsContext';
import { useTime } from '../hooks/useTime';

export const LandscapeClock = () => {
  // Prevent the screen from sleeping while in landscape mode
  useKeepAwake();

  const { is24Hour, colors } = useContext(SettingsContext);
  const time = useTime();

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour,
  });

  const { width } = Dimensions.get('window');
  // Responsive font size based on screen width
  const fontSize = width * 0.2;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text
        style={[
          styles.clockText,
          {
            color: colors.text,
            textShadowColor: colors.shadow,
            fontSize,
          },
        ]}
      >
        {formattedTime}
      </Text>
    </View>
  );
};

const fontFamily = Platform.select({
  ios: 'Marker Felt',
  android: 'casual',
  default: 'Comic Sans MS',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockText: {
    fontFamily,
    fontWeight: 'bold',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20, // Stronger glow in landscape
  },
});
