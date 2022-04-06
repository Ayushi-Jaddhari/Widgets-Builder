import React,{useState} from 'react';
import Convert from './Convert';
import DropDown from './DropDown';

const Translate=()=> {
   
    const options =[
        {
            label:'Afrikans',
            value:'af'
        },
        {
            label:'Arabic',
            value:'ar'
        },
        {
            label: 'Hindi',
            value:'hi'
        }
    ];
    const [text,setText]= useState('')
    const [language,setLanguage]=useState(options[0])
  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter Text</label>
                <input value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
        </div>
        <DropDown label="Select Language" options={options} selected={language} onSelectedChange={setLanguage}/>
        <hr />
        <h3 className='ui header'>Output</h3>
        <Convert text={text} language={language} />
    </div>
  )
}

export default Translate