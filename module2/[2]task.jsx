import React, { useState, useEffect } from 'react'

const App = () => {
  const [image, setImage] = useState('');
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random').
      then(response =>response.json()).
      then(data => setImage(data)).
      catch(err => console.log(err));
  }, []);
  return(
    <img src={image.message} alt="picture"/>
  )
}

export default App;