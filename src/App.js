import React from 'react';


function Food({name, picture}) {
  return (
    <div>
      <h1> I like {name}</h1>
      <img src = {picture}/>
    </div>
  );
}

const foodILike = [
  {
    name: 'kimchi',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.koreatimes.co.kr%2Fwww%2Fculture%2F2021%2F06%2F141_309975.html&psig=AOvVaw0ELPm8gOPo967EGr1bzFRd&ust=1632211803156000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMjGqv2MjfMCFQAAAAAdAAAAABAD',

  },
];

function App() {
  return (
  <div>
    <h1>Hello!</h1>
    {foodILike.map(dish => (
    <Food name = {dish.name} picture = {dish.image}/>))}
  </div>
  );
}

export default App;
