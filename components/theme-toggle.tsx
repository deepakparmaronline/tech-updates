'use client';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
type Theme = 'light' | 'dark' | 'system';
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  useEffect(() => { const saved = (localStorage.getItem('theme') as Theme) || 'system'; setTheme(saved); apply(saved); }, []);
  function apply(value: Theme) { const dark = value === 'dark' || (value === 'system' && matchMedia('(prefers-color-scheme: dark)').matches); document.documentElement.classList.toggle('dark', dark); localStorage.setItem('theme', value); }
  function cycle() { const next: Theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'; setTheme(next); apply(next); }
  return <button className="icon-button" onClick={cycle} aria-label={`Theme: ${theme}`} title={`Theme: ${theme}`}>{theme === 'dark' ? <Moon/> : theme === 'light' ? <Sun/> : <Monitor/>}</button>;
}
