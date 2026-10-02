import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('expo-screen-orientation', () => ({
  getOrientationAsync: jest.fn().mockResolvedValue(1),
  addOrientationChangeListener: jest.fn().mockReturnValue({ remove: jest.fn() }),
  removeOrientationChangeListener: jest.fn(),
  Orientation: {
    PORTRAIT_UP: 1,
    PORTRAIT_DOWN: 2,
    LANDSCAPE_LEFT: 3,
    LANDSCAPE_RIGHT: 4,
  }
}));

jest.mock('expo-keep-awake', () => ({
  useKeepAwake: jest.fn(),
}));
