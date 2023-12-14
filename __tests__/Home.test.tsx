import { describe } from 'node:test';
import { render, screen } from '@/test-utils';
import HomePage from '@/app/page';

describe('Home page', () => {
  it('should render Cookmate App text', () => {
    render(<HomePage />);
    expect(screen.getByText('Cookmate App')).toBeInTheDocument();
  });
});
