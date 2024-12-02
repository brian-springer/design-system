import React from 'react';
import { useEffect } from 'react';
import { useGlobals } from '@storybook/preview-api';

interface ThemeDecoratorProps {
  Story: React.ComponentType;
}

export const ThemeDecorator: React.FC<ThemeDecoratorProps> = ({ Story }) => {
  const [{ theme }] = useGlobals();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme === 'dark' ? 'dark' : 'light');
    root.style.setProperty('color-scheme', theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="relative flex min-h-screen flex-col">
        <Story />
      </div>
    </div>
  );
};
