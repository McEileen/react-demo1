import Sum from './Sum';
import React from 'react';
import { render } from 'react-dom';

let tags = [];
for (let i = 0; i < 10; i++) {
  let rnd1 = Math.floor(Math.random() * 100);
  let rnd2 = Math.floor(Math.random() * 100);
  let tag = <Sum key={i} x={rnd1} y={rnd2} />;
  tags.push(tag);
}

render(
  <div>
    {tags}
  </div>, document.getElementById('root'));
