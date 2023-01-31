import style from './style.module.css';

export function CreditCard(props) {
  let ultimos = props.number;
  const quatroDig = ultimos.substr(12, 4);
  let bandImg = props.type;
  bandImg = bandImg.toLowerCase();

  return (
    <div
      className={style.Container}
      style={{
        backgroundColor: `${props.bgColor}`,
        color: props.color,
      }}
    >
      <div className={style.Bandeira}>
        <img src={`src/assets/images/${bandImg}.png`} alt="Bandeira"></img>
      </div>
      <h2 className={style.Numero}>•••• •••• •••• {quatroDig}</h2>
      <div className={style.Dados}>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <div className={style.Owner}>{props.owner}</div>
    </div>
  );
}
