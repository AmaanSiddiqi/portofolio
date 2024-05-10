import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home.css'

function Home() {
  const [text] = useTypewriter({
    words: ['Amaan Siddiqi'],
    loop: 1, // Loop once
    onLoopDone: () => console.log('Loop completed.')
  });

  return (
    <div className="home-container">
      <div className="typewriter-container">
        <h1>{text}<Cursor cursorColor='black' /></h1>
      </div>
    </div>
  );
}

export default Home;

