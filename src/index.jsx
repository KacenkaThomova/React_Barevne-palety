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
      <div className='colorIndex'>
          {palettes[0].colors.map((colorIndex) => {
            <SchemeColor 
            key={colorIndex}
            colorNumber={colorIndex}/>
          })}
        </div>
        <div className='zkouska'>
          {palettes.map((palety) => {
            <Palette
            key={palety.name}
            paletteData={palety}/>
            })}
        </div>
       {/* <div className="palette">
          <div className="palette-scheme palette-scheme--horizontal">
            <img className="scheme-image" src="/img/ocean-waves.jpg" alt="Ocean Waves" />
            <div className="scheme-colors">
              <div className="scheme-color" style={{ backgroundColor: '#012e4a' }} >#012e4a</div>
              <div className="scheme-color" style={{ backgroundColor: '#036280' }} >#036280</div>
              <div className="scheme-color" style={{ backgroundColor: '#378ba4' }} >#378ba4</div>
              <div className="scheme-color" style={{ backgroundColor: '#81bece' }} >#81bece</div>
              <div className="scheme-color" style={{ backgroundColor: '#e8ede7' }} >#e8ede7</div>
            </div>
          </div>
          <div className="palette-info">
            <h2>Ocean Waves</h2>
            <p>Wildlife has given humanity an indescribable variety of color shades that, at first glance, cannot be combined for balance. However, the combination of dark greens canonically turns into a bright light green shade, growing into banana yellow. From the yellow tones, a sudden rich pink breaks through.</p>

            <p>Photo by <a href="https://unsplash.com/photos/wc9avd2RaN0" target="_blank">Christoffer Engström</a>.</p>
          </div>
          </div>*/}
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
