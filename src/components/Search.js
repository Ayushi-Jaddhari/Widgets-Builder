import axios from 'axios';
import React, { useState,useEffect } from 'react'

const Search=()=> {
    const [term,setTerm]= useState('C++');
    const [debouncedTerm,setDebouncedTerm] = useState(term)
    const [results,setResults]=useState([])
   
  //   useEffect(()=>{
    
  //     if(term && !results.length){
  //         searchArticles();
  //     }else{
  //       const timeoutID=setTimeout(() => {
  //         if(term){
  //           searchArticles();
  //         }  
  //       }, 500);
  // return ()=>{
  //   clearTimeout(timeoutID);
  // }
  //     }
    
  //   },[term]); 

    useEffect(()=>
    {
      const timerID = setTimeout(() => {
        setDebouncedTerm(term)
      }, 500);
      return ()=>{
        clearTimeout(timerID)
      }
    },[term]);

    useEffect(()=>{
      const searchArticles = async()=>{
        const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
            params:{
              action:'query',
              list:'search',
              origin:'*',
              format:'json',
              srsearch:debouncedTerm
            }
          });
          setResults(data.query.search);
      };
      searchArticles()

    },[debouncedTerm]);
   const renderedResults = results.map((result)=>{
     return (
       <div className='item' key={result.pageid}>
         <div className='right floated content'>
           <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
         </div>
         <div className='content'>
           <div className='header'>
             {result.title}
           </div>
           <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
           
         </div>
       </div>
     )
   })
    
  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter Search Term</label>
                <input className='input' value={term} 
                
                onChange={e=>setTerm(e.target.value)} />
            </div>

        </div>
        <div className='ui celled list'>
          {renderedResults}
        </div>
    </div>
  )
}

export default Search