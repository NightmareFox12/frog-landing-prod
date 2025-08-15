import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FrogHackLanding from './FrogHackLanding';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FrogHackLanding />
  </StrictMode>
);
