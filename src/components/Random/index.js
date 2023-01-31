import style from '../Greetings/style.module.css';

export function Random(props) {
  let result = Math.random() * (props.max - props.min) + props.min;

  return (
    <p className={style.Saudacao}>
      Random value between {props.min} and {props.max} => {Math.round(result)}
    </p>
  );
}
