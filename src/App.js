import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture}) {
  return (
    <div>
      <h1> I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name}/>
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name: 'kimchi',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.koreatimes.co.kr%2Fwww%2Fculture%2F2021%2F06%2F141_309975.html&psig=AOvVaw0ELPm8gOPo967EGr1bzFRd&ust=1632211803156000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMjGqv2MjfMCFQAAAAAdAAAAABAD',
    rating : 5,
  },
  {
    id : 2,
    name: 'Samgyeopsal',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.koreatimes.co.kr%2Fwww%2Fculture%2F2021%2F06%2F141_309975.html&psig=AOvVaw0ELPm8gOPo967EGr1bzFRd&ust=1632211803156000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMjGqv2MjfMCFQAAAAAdAAAAABAD',
    rating : 4.9,
  }
];

function App() {
  return (
  <div>
    <h1>Hello!</h1>
    {foodILike.map(dish => (
    <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>))}
  </div>
  );
}

Food.PropTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};

export default App;
