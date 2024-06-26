import React, {useState} from 'react';
import NumericalConverter from './NumericalConverter';

export default function InputForm() {

    const [inputValue, setInputValue] = useState('');
    const [inputBase, setInputBase] = useState('');
    const [outputBase, setOutputBase] = useState('');
    const [outputValue, setOutputValue] = useState('');
    
    const handleChange = (e) => {
        e.preventDefault(); 
        let resultValue = NumericalConverter(inputValue, Number(inputBase), Number(outputBase));
        setOutputValue(resultValue);
    };

    return (
        <div>
            <form style={{ display:'flex', flexDirection: 'column', maxWidth: '300px', margin:'auto'}}>
                <label>
                    Original Number: 
                    <input 
                        type='text'
                        value={inputValue} 
                        onChange={e=> setInputValue(e.target.value)}
                        style={{margin: '8px 0'}}
                    />
                </label>
                <label>
                    Original Base: 
                    <input 
                        type='number'
                        min='2'
                        max='16'
                        value={inputBase} 
                        onChange={e=> setInputBase(e.target.value)}
                        style={{margin: '8px 0'}}
                    />
                </label>
                <label>
                    New Base: 
                    <input 
                        type='number'
                        min='2'
                        max='16'
                        value={outputBase} 
                        onChange={e=> setOutputBase(e.target.value)}
                        style={{margin: '8px 0'}}
                    />
                </label>
                <button type="submit" onClick={handleChange}>Convert</button>
            </form>
            <p>
                Here's the output {outputValue}
            </p>

        </div>
    )
}