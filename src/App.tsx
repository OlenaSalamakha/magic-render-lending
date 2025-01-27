import { Router } from './containers';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Magic Render comming soon...</h1>
      <Router />
    </ThemeProvider>
  );
}

export default App;
