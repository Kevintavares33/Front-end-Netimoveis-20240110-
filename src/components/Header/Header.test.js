import { render, screen } from 'vitest/react';
import Header from './Header';

jest.mock('@/src/hooks/useScreenSize', () => ({
  __esModule: true,
  default: jest.requireActual('@/src/hooks/useScreenSize').default,
}));

describe('<Header />', () => {
  it('renders HeaderDesktop when screen width is greater than md breakpoint', () => {
    
    global.innerWidth = 1000;

    render(<Header />);

    expect(screen.getByTestId('header-desktop')).toBeDefined();
    expect(screen.queryByTestId('header-mobile')).toBeNull();
  });

  it('renders HeaderMobile when screen width is less than or equal to md breakpoint', () => {
   
    global.innerWidth = 500;

    render(<Header />);

    expect(screen.getByTestId('header-mobile')).toBeDefined();
    expect(screen.queryByTestId('header-desktop')).toBeNull();
  });
});
