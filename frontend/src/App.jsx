import {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/test')
    .then(res => {
      console.log(res.data);
      setMessage(res.data.message);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Test Connection</h1>
      <p>{message}</p>
    </div>
  )
}


export default App;