import React from 'react';
import RocketItem from './RocketItems';
import '../styling/rocket.css';

const Rockets = () => {
  const rockets = [
    {
      id: 0,
      name: 'Rocket 1',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'Lo molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis',
    },
    {
      id: 1,
      name: 'Rocket 2',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'Lo molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis',
    },
    {
      id: 2,
      name: 'Rocket 3',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'Lo molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis',
    },
  ];
  return (
    <main>
      {
      rockets.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))
    }
    </main>
  );
};

export default Rockets;
