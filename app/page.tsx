import { Box, Stack, Title } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function HomePage() {
  return (
    <Box component="main">
      <HeroSection />
      <Stack align="center">
        <Welcome />
        <Title order={1} c="primary">
          Cookmate App
        </Title>
        <ColorSchemeToggle />
      </Stack>
    </Box>
  );
}
