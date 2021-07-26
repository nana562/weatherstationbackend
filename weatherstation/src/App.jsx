import './App.css';
import Search from './Search';
import Stats from './Stats'
import DetailedState from './DetailedState'
import {useState} from 'react'

function App() {
 
    const [seeStats, setSeeStats] = useState(false)

  return (
    <div className="App">
      <button className='floating-button' onClick={()=>setSeeStats(!seeStats)} >Switch View</button>
      {seeStats ? <DetailedState /> : <><Search/><Stats/></>}
    </div>
  );
}

export default App;
