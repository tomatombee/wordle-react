import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Game from './Game';
const styles= {
    border:'2px solid pink',
    display:'inline-flex',
    width:'50px',
    justifyContent:'center',
    height:'50px',
    alignItems:'center',
    margin:'10px'
}

function Word() {
  return (
      <div>
      <div style={styles}>1</div>
      <div style={styles}>2</div>      
      <div style={styles}>3</div>
      <div style={styles}>4</div>
      <div style={styles}>5</div>
      </div>
  );
}

export default Word;
