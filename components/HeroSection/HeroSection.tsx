import React from 'react';
import { Group, Box, Stack, Title, Text, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import FeaturedRecipe from '../FeaturedRecipe/FeaturedRecipe';

const HeroSection = () => (
  <Group component="section" justify="space-between" align="center" p={50}>
    <Stack w="45%">
      <Box>
        <Title>Hello John</Title>
        <Text>What you are looking today?</Text>
      </Box>
      <TextInput placeholder="Search recipes" radius="lg" rightSection={<IconSearch />} />
    </Stack>
    <FeaturedRecipe />
  </Group>
);

export default HeroSection;
