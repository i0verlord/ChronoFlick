import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeName = 'Cyberpunk Yellow' | 'Matrix Green' | 'Dark' | 'Light';

export interface ThemeColors {
  background: string;
  text: string;
  shadow: string;
}

export const themes: Record<ThemeName, ThemeColors> = {
  'Cyberpunk Yellow': { background: '#0d0d0d', text: '#fce205', shadow: 'rgba(252, 226, 5, 0.7)' },
  'Matrix Green': { background: '#000000', text: '#00ff41', shadow: 'rgba(0, 255, 65, 0.7)' },
  'Dark': { background: '#121212', text: '#ffffff', shadow: 'rgba(255, 255, 255, 0.5)' },
  'Light': { background: '#f5f5f5', text: '#333333', shadow: 'rgba(51, 51, 51, 0.3)' },
};

interface SettingsContextType {
  is24Hour: boolean;
  setIs24Hour: (val: boolean) => void;
  themeName: ThemeName;
  setThemeName: (val: ThemeName) => void;
  colors: ThemeColors;
}

export const SettingsContext = createContext<SettingsContextType>({
  is24Hour: false,
  setIs24Hour: () => {},
  themeName: 'Cyberpunk Yellow',
  setThemeName: () => {},
  colors: themes['Cyberpunk Yellow'],
});

const STORAGE_KEY = '@chronoflip_settings';

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [is24Hour, setIs24Hour] = useState<boolean>(false);
  const [themeName, setThemeName] = useState<ThemeName>('Cyberpunk Yellow');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.is24Hour !== undefined) setIs24Hour(parsed.is24Hour);
          if (parsed.themeName && themes[parsed.themeName as ThemeName]) {
            setThemeName(parsed.themeName);
          }
        }
      } catch (e) {
        console.error('Failed to load settings', e);
      } finally {
        setIsLoaded(true);
      }
    };
    loadSettings();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ is24Hour, themeName }));
      } catch (e) {
        console.error('Failed to save settings', e);
      }
    };
    saveSettings();
  }, [is24Hour, themeName, isLoaded]);

  return (
    <SettingsContext.Provider
      value={{
        is24Hour,
        setIs24Hour,
        themeName,
        setThemeName,
        colors: themes[themeName],
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
