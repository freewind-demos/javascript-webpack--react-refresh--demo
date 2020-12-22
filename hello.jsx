import React, {useState} from 'react';

export const Hello = () => {
  const [name, setName] = useState('');
  return <div>
    <h1>Hello {name}</h1>
    <div>Input something in the textfield, and change me to see if it's still kept</div>
    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
  </div>;
}
