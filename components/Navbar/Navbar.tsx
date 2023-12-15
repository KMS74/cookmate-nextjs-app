import { Group, Box, Button } from '@mantine/core';
import Link from 'next/link';
import classes from './Navbar.module.css';
import Logo from '../Logo/Logo';

const Navbar = () => (
  <Group className={classes.header} component="header" w="100%" justify="space-between">
    <Logo />
    <Box className={classes.nav} component="nav">
      <Group component="ul" gap="xl">
        <Link href="">Recent Recipes</Link>
        <Link href="">Account</Link>
        <Link href="/recipes/add-new">
          <Button color="secondary" radius="xl">
            Add new recipe
          </Button>
        </Link>
      </Group>
    </Box>
  </Group>
);

export default Navbar;
