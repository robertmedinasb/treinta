import React, { useState, useEffect } from 'react';
import { CORRECTIONS } from './../index';

const AutocorrectTextarea = () => {
    const [text, setText] = useState("");

    const handlerChange = (e) => {
      setText(e.target.value)
    }
    
    const validateCorrections = (e) => {
        const arrayWord = text.split(" ");
        const word = arrayWord[arrayWord.length - 1];
        const error = Object.keys(CORRECTIONS).find((error)=> text === word)
        arrayWord[arrayWord.length - 1] = CORRECTIONS[error];
        setText(arrayWord.join(" "));
    }

    return (
      <div className="text-center">
        <textarea 
          data-testid="textarea" 
          rows={10} 
          cols={80} 
          className="card" 
          value={text}
          onChange={handlerChange}
          onKeyPress={validateCorrections}
          />
      </div>
    );
}

export default AutocorrectTextarea;
