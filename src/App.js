import './App.css';
import { useEffect } from 'react';

function App({ hideLoader }) {
  useEffect(() => {
    // hideLoader();
  }, []);

  return (
    <div
      className='loader'
      onClick={() =>
        (window.location.href = 'https://www.instagram.com/travegram.in/')
      }
    >
      <img src='spinner.png' alt='app spinner' />
      <div className='spinner-container'>
        <div className='spinner-pulse'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
