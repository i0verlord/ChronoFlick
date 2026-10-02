import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Platform } from 'react-native';
import { SettingsContext, themes, ThemeName } from '../context/SettingsContext';
import { useTime } from '../hooks/useTime';

export const PortraitDashboard = () => {
  const { is24Hour, setIs24Hour, themeName, setThemeName, colors } = useContext(SettingsContext);
  const time = useTime();

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour,
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>ChronoFlip Settings</Text>

      <View style={styles.previewContainer}>
        <Text style={[styles.previewClock, { color: colors.text, textShadowColor: colors.shadow }]}>
          {formattedTime}
        </Text>
      </View>

      <View style={styles.settingRow}>
        <Text style={[styles.settingLabel, { color: colors.text }]}>24-Hour Format</Text>
        <Switch
          value={is24Hour}
          onValueChange={setIs24Hour}
          trackColor={{ false: '#767577', true: colors.text }}
          thumbColor={is24Hour ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.themeSection}>
        <Text style={[styles.settingLabel, { color: colors.text, marginBottom: 10 }]}>Theme</Text>
        <View style={styles.themeRow}>
          {(Object.keys(themes) as ThemeName[]).map((t) => (
            <TouchableOpacity
              key={t}
              style={[
                styles.themeCircle,
                { backgroundColor: themes[t].text },
                themeName === t && styles.themeCircleSelected,
              ]}
              onPress={() => setThemeName(t)}
            />
          ))}
        </View>
        <Text style={[styles.themeName, { color: colors.text }]}>{themeName}</Text>
      </View>

      <Text style={[styles.instruction, { color: colors.text }]}>
        Rotate your device to view the clock
      </Text>
    </View>
  );
};

const fontFamily = Platform.select({
  ios: 'Marker Felt',
  android: 'casual', // 'casual' on Android maps to something similar to Comic Sans
  default: 'Comic Sans MS',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    fontFamily,
  },
  previewContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  previewClock: {
    fontSize: 48,
    fontFamily,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
  },
  settingLabel: {
    fontSize: 18,
    fontFamily,
  },
  themeSection: {
    marginBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  themeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  themeCircleSelected: {
    borderColor: '#fff',
  },
  themeName: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontFamily,
  },
  instruction: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    opacity: 0.7,
    fontFamily,
  },
});
