import style from './style.module.css'

export function Rating(props){
    
    
    let nota = props.children
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
        <p className={style.Notas}>{avaliacao}</p>
      )
}