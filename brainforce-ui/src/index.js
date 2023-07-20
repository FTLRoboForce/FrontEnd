import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.jsx';
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';

// Extend the default theme to customize the color mode
const theme = extendTheme({
  colors: {
    brand: {
      100: "#004D85", // Dark blue color
      200: "#00A1E0", // Light blue color
      300: "#D9D9D9", // Light grey color
    },
  },
  config: {
    initialColorMode: "light", // Set the initial color mode to "light"
    useSystemColorMode: false, // Set to true to use the user's system preference for dark mode
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
