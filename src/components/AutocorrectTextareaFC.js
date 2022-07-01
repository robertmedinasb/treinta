import React, { useState, useEffect } from "react";
import { CORRECTIONS } from "./../index";

const AutocorrectTextarea = ({ corrections }) => {
  const [text, setText] = useState("");

  const handlerChange = (e) => {
    setText(e.target.value);
  };

  const validateCorrections = (e) => {
    setText({ text: e.target.value });

    if (!/\s$/.test(e.target.value)) return;

    const arrayWord = text.split(" ");
    if (arrayWord.length === 0) return;
    const word = arrayWord[arrayWord.length - 1];
    const error = Object.keys(corrections).find((error) => error === word);

    if (error === undefined) return;

    arrayWord[arrayWord.length - 1] = `${corrections[error]} `;
    setText({ text: arrayWord.join(" ") });
  };

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
};

export default AutocorrectTextarea;
