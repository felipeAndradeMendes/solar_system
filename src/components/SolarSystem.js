import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <Title headline="Planetas" />
        {Planets.map(({ name, image }) => (
          <PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />
        ))}
        ;
      </div>
    );
  }
}

export default SolarSystem;
