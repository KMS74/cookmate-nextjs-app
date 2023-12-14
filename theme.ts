'use client';

import { MantineColorsTuple, createTheme } from '@mantine/core';

// primary color
const primary: MantineColorsTuple = [
  '#fff1e5',
  '#fde1d2',
  '#f5c2a6',
  '#eda176',
  '#e7844d',
  '#e47233',
  '#e36925',
  '#ca5819',
  '#b54d13',
  '#9e400a',
];

// secondary color
const secondary: MantineColorsTuple = [
  '#e9f9f9',
  '#e1ece9',
  '#c6d5d2',
  '#a8beb9',
  '#8ea9a3',
  '#7d9c96',
  '#73978f',
  '#60837c',
  '#52756e',
  '#3f665e',
];

export const theme = createTheme({
  /* Put your mantine theme override here */
  primaryColor: 'primary',
  colors: {
    primary,
    secondary,
  },
});
