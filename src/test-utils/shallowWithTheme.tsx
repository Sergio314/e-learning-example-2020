import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

export const renderWithTheme = (child: any) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{child}</ThemeProvider>
    </BrowserRouter>
  );
