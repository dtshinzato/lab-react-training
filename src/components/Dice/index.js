import { useState } from 'react';
import Empy from '../../assets/images/dice-empty.png';
import One from '../../assets/images/dice1.png';
import Two from '../../assets/images/dice2.png';
import Three from '../../assets/images/dice3.png';
import Four from '../../assets/images/dice4.png';
import Five from '../../assets/images/dice5.png';
import Six from '../../assets/images/dice6.png';
import style from './style.module.css';

export function Dice() {
  const [img, setImg] = useState(Empy);
  let arr = [One, Two, Three, Four, Five, Six];

  function RollDice() {
    setTimeout(() => {
      return setImg(Empy);
    }, 200);

    setTimeout(
      () => {
        return setImg(arr[Math.floor(Math.random() * arr.length)]);
      },

      1000
    );
  }

  return (
    <img src={img} alt="Dado" onClick={RollDice} className={style.Dado}></img>
  );
}
