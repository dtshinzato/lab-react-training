import style from './style.module.css';

export function IdCard(props) {
  const height = props.height;
  const birth = props.birth;
  const diasSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dia = diasSemana[birth.getUTCDay()];
  const mesesAno = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const mes = mesesAno[birth.getUTCMonth()];

  return (
    <div className={style.person}>
      <img src={props.picture} alt="Foto"></img>
      <div>
        <article>
          <strong>First Name</strong>:{props.firstName}
        </article>
        <article>
          <strong>Last Name</strong>:{props.lastName}
        </article>
        <article>
          <strong>Gender</strong>:{props.gender}
        </article>
        <article>
          <strong>Height</strong>:{(height / 100).toFixed(2)}m
        </article>
        <article>
          <strong>Birth</strong>:{dia} {mes} {props.birth.getDate()}{' '}
          {props.birth.getFullYear()}
        </article>
      </div>
    </div>
  );
}
