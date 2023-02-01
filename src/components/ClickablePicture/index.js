import { useState } from 'react';
import Photo from '../../assets/images/maxence.png';
import PhotoGlasses from '../../assets/images/maxence-glasses.png';

export function ClickablePicture(props) {
  const [img, setImg] = useState(Photo);

  function Oculos() {
    if (img === Photo) {
      setImg(PhotoGlasses);
    } else {
      setImg(Photo);
    }
  }

  return <img src={img} alt="Imagem" onClick={Oculos} />;
}
