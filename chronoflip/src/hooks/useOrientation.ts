import { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

export type Orientation = 'PORTRAIT' | 'LANDSCAPE';

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<Orientation>('PORTRAIT');

  useEffect(() => {
    // Initial check
    const checkOrientation = async () => {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      updateOrientation(currentOrientation);
    };

    checkOrientation();

    // Listen for changes
    const subscription = ScreenOrientation.addOrientationChangeListener((evt) => {
      updateOrientation(evt.orientationInfo.orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const updateOrientation = (orientationValue: ScreenOrientation.Orientation) => {
    if (
      orientationValue === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientationValue === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ) {
      setOrientation('LANDSCAPE');
    } else {
      setOrientation('PORTRAIT');
    }
  };

  return orientation;
};
