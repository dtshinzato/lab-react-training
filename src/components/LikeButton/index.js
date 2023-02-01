import { useState } from 'react';
import style from './style.module.css';

export function LikeButton() {
  const arrColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [counter, setCounter] = useState(0);

  function LikeBtn() {
    setCounter(counter + 1);
  }

  return (
    <button
      onClick={LikeBtn}
      style={{
        backgroundColor: arrColor[Math.floor(Math.random() * arrColor.length)],
        color: 'white',
      }}
      className={style.LikeButton}
    >
      {counter} Likes
    </button>
  );
}
