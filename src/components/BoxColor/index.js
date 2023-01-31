import style from './style.module.css';

export function BoxColor(props) {
  return (
    <div
      style={{
        display: 'flex',
        border: '2px solid black',
        height: '200px',
        width: '400px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}
