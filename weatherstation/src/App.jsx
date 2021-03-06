import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Search';
import Stats from './Stats'
import DetailedState from './DetailedState'
import { useSelector } from 'react-redux'

function App() {
 
    const [seeStats, setSeeStats] = useState(false)
    const location = useSelector(state => state.location)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState('')

    useEffect(()=>{
        fetchData();
    },[location])

    const fetchData = () =>{
        setData([])
        setLoading('Loading...')
        fetch(`https://weatherstationbackend.herokuapp.com/${location}`)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                setData(data)
            })
            .catch(error=>{
                setLoading('Location Not available. Try somewhere Else')
                console.log(error)
                fetchData()
            })
    }
    if(data.length === 0){
      return <div className="stats">{loading}</div>
  }

  return (
    <div className="App">
      <button className='floating-button' onClick={()=>setSeeStats(!seeStats)} >Switch View</button>
      {seeStats ? <div className="container"><Search/><DetailedState data={data} /></div> : <div className="container"><Search/><Stats data={data} /></div>}
      <footer>Copyright CSD Cap Developed by Martin and Kingsford</footer>
    </div>
  );
}

export default App;
