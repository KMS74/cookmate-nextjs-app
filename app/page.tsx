import { Stack, Title } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <Stack align="center">
      <Welcome />
      <Title order={1} c="primary">
        Cookmate App
      </Title>
      <ColorSchemeToggle />
    </Stack>
  );
}
