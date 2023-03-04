import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import { Palette } from './components/Palette/Palette';
import { SchemeColor } from './components/SchemeColor/SchemeColor';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        <div>
          {palettes.map((palety) => (
            <Palette
            key={palety.name}
            paletteData={palety}/>
            ))}
        </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
