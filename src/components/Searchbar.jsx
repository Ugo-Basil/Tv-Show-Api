import {useState } from 'react'
import Alert from './Alert';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const onSearchHandler = (e) => {
    e.preventDefault();

    console.log('Searching for term' + searchTerm);
  }

  return (
    <div className='searchbar'>
      <Alert message= 'Please enter something' type='danger'/>
      <form className='searchbar__form'>
        <input type="text" placeholder='Search For Tv Show' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        
        <button className='btn btn-block' onClick={onSearchHandler}>Search</button>
      </form> 
     
    
    </div>
  )
}
