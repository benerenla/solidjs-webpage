/* @refresh reload */
import 'windi.css';
import './global.css'
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import App from './app';
import { createSignal, Show } from 'solid-js';
import Loading from './errors/Loading';


render(
  () => (
    <Router>
        <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
