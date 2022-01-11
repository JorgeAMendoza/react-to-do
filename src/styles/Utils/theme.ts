 import { DefaultTheme } from 'styled-components';
import lightBackgroundDesktop from '../../assets/images/bg-desktop-light.jpg';
import lightBackgroundMobile from '../../assets/images/bg-mobile-light.jpg';
import darkBackgroundDesktop from '../../assets/images/bg-desktop-dark.jpg';
import darkBackgroundMobile from '../../assets/images/bg-mobile-dark.jpg';

const lightTheme: DefaultTheme = {
  backgroundColor: '#fafafa',
  backgroundImageDesktop: lightBackgroundDesktop,
  backgroundImageMobile: lightBackgroundMobile,
  color: {
    primary: '#494C6B',
    secondary: '#9495A5',
    light: '#fff',
    active: '#3A7CFD',
  },
  todo: {
    backgroundColor: '#fff ',
    borderColor: '#E3E4F1',
  },
};

const darkTheme: DefaultTheme = {
  backgroundColor: '#171823',
  backgroundImageDesktop: darkBackgroundDesktop,
  backgroundImageMobile: darkBackgroundMobile,
  color: {
    primary: '#C8CBE7',
    secondary: '#5B5E7E',
    light: '#fff',
    active: '#3A7CFD',
  },
  todo: {
    backgroundColor: '#25273D',
    borderColor: '#393A4B',
  },
};

export { lightTheme, darkTheme };
