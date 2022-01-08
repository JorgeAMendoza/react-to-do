import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    backgroundImageDesktop: string;
    backgroundImageMobile: string;
    color: {
      primary: string;
      secondary: string;
      light: string;
      active: string;
    };
    todo: {
      backgroundColor: string;
      borderColor: string;
    };
  }
}
