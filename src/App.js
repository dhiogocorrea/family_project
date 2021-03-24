import {createMuiTheme, ThemeProvider} from '@material-ui/core';

import ROUTES, {RenderRoutes} from './routes';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Berkshire Swash', 'cursive'],
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RenderRoutes routes={ROUTES} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
