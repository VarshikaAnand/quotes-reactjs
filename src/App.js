import { useEffect, useState } from 'react';
import './App.css';
import './Quotetile.js';
import Quotetile from './Quotetile.js';
import search from './searchicon.svg'

function App() {
  const [quoteData, setQuoteData] = useState(null);
  const apiKey = 'LPzEWKdC7AtZOoKB/FwFIQ==vJ7mC8MaTjgPEoWQ';

  const fetchData = async () => {
    try {
      const category = document.querySelector('.searchbar').value;
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if(data && data.length>0)
      setQuoteData(data[0]);
      else
      setQuoteData({ quote: "No quotes available :(", author: "" });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiKey]); 

  const click = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="App">
      <h1>Get your random quote</h1>
      <div className='containerdiv'>
        <div className='searchdiv'>
          <input type='search' className='searchbar' placeholder='Search for quotes'></input>
          <button className='searchicon' onClick={click}><img id='image' src={search}/></button>
        </div>
        <div className='quotediv'>
          {quoteData && <Quotetile quote={quoteData.quote} author={quoteData.author}></Quotetile>}
        </div>
      </div>
    </div>
  );
}

export default App;
