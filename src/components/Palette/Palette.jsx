import './style.css'
import React from 'react';
import { SchemeColor } from '../SchemeColor/SchemeColor';
export const Palette = ({paletteData}) => { 
    return (
        <div className="palette">
          <div className= { paletteData.direction === 'vertical' ? 'palette-scheme palette-scheme--vertical' : 'palette-scheme palette-scheme--horizontal'} >
            <img className="scheme-image" src={paletteData.image} alt={paletteData.name} />
            <div className="scheme-colors">
              {paletteData.colors.map((zkouska) => (
                <SchemeColor 
                colorNumber={zkouska}/>
              ))}
            
            </div>
          </div>
          <div className="palette-info">
            <h2>{paletteData.name}</h2>
            <p>{paletteData.description}</p>
            <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
          </div>
        </div>
    )
}
