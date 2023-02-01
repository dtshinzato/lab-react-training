import style from './style.module.css';
import { useState } from 'react';

export function Carousel(props) {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState(props.images[0]);

  function NextImg() {
    if (counter >= 3) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
    setImg(props.images[counter]);
    console.log(counter);
  }

  function PrevImg() {
    if (counter <= 0) {
      setCounter(props.images.length - 1);
    } else {
      setCounter(counter - 1);
    }
    setImg(props.images[counter]);
    console.log(counter);
  }

  return (
    <>
      <div>
        <img src={img} alt="ImagensCar" className={style.ImgCar}></img>
      </div>
      <div className={style.Botoes}>
        <button className={style.BotoesCar} onClick={PrevImg}>
          Left
        </button>
        <button className={style.BotoesCar} onClick={NextImg}>
          Right
        </button>
      </div>
    </>
  );
}
