import { useState, useEffect } from "react";

export interface DisplayPreferences {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  compactMode: boolean;
  reduceMotion: boolean;
  highContrast: boolean;
  colorBlindMode?: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

const DEFAULT_PREFERENCES: DisplayPreferences = {
  theme: 'system',
  fontSize: 'medium',
  compactMode: false,
  reduceMotion: false,
  highContrast: false,
  colorBlindMode: 'none'
};

export const useGlobalDisplayPreferences = () => {
  const [preferences, setPreferences] = useState<DisplayPreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    if (preferences.compactMode) {
      document.documentElement.classList.add("compact-mode");
    } else {
      document.documentElement.classList.remove("compact-mode");
    }

    if (preferences.reduceMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [preferences]);

  return {
    ...preferences,
    updatePreferences: (updates: Partial<DisplayPreferences>) => setPreferences(prev => ({ ...prev, ...updates })),
    resetPreferences: () => setPreferences(DEFAULT_PREFERENCES),
    isLoading: false,
  };
};
