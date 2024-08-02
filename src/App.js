import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  return (
    <div className="App">
        <button onClick={()=> {
          console.log("sup")
        axios.get(`http://127.0.0.1:5000/`)
            .then(res => {
              console.log(res)
            })
        }}>Hello there</button>
    </div>
  );
}

export default App;
