import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './_store';
import App  from './App';
import Appp  from './Appp';
import './index.css';
import './styles/global.scss'
import './styles/index.css'
// setup fake backend
import { fakeBackend } from './_helpers';
import { ThemeProvider } from './component/Context';
fakeBackend();

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>

            <BrowserRouter>
                <App/>
            </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
