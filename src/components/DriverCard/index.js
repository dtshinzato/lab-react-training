import style from "./style.module.css"

export function DriverCard(props) {
  
    let nota = props.rating
    nota = Math.round(nota)
    let avaliacao = ''
    
    switch (nota) {
        case 0:
            avaliacao = '☆☆☆☆☆';
          break;
        case 1:
          avaliacao = '★☆☆☆☆';
          break;
        case 2:
            avaliacao = '★★☆☆☆';
          break;
        case 3:
            avaliacao = '★★★☆☆';
          break;
        case 4:
            avaliacao = '★★★★☆';
          break;
        case 5:
            avaliacao = '★★★★★';
        break;
    
        default:
          
      }
    
    return(
        <div className={style.container}>
            <img src={props.img} alt='Foto' className={style.FotoMotorista}></img>
            <div className={style.Infos}>
                <h2>{props.name}</h2>
                <p className={style.Stars}>{avaliacao}</p>
                <p className={style.CarInfo}>{props.car.model} - {props.car.licensePlate}</p>
                
                
            </div>
        </div>
    )
}
