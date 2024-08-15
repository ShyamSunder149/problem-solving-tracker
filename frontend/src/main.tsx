import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
)
