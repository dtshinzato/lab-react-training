import style from './style.module.css';

export function Greetings(props) {
  const lingua = props.lang;
  let saudacao = '';

  switch (lingua) {
    case 'de':
      saudacao = 'Hallo';
      break;
    case 'en':
      saudacao = 'Hello';
      break;
    case 'es':
      saudacao = 'Hola';
      break;
    case 'fr':
      saudacao = 'Bonjour';
      break;

    default:
      throw window.alert('Insira um idioma válido');
  }

  return (
    <p className={style.Saudacao}>
      {saudacao} {props.children}
    </p>
    
  );
}
