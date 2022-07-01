import React from "react";

class AutocorrectTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(e) {
    this.setState({ text: e.target.value });

    if (!/\s$/.test(e.target.value)) return;

    const arrayWord = this.state.text.split(" ");
    if (arrayWord.length === 0) return;
    const word = arrayWord[arrayWord.length - 1];
    const error = Object.keys(this.props.corrections).find(
      (error) => error === word
    );

    if (error === undefined) return;

    arrayWord[arrayWord.length - 1] = `${this.props.corrections[error]} `;
    this.setState({ text: arrayWord.join(" ") });
  }

  render() {
    return (
      <div className="text-center">
        <textarea
          data-testid="textarea"
          rows={10}
          cols={80}
          className="card"
          value={this.state.text}
          onChange={this.handlerChange}
        />
      </div>
    );
  }
}

export default AutocorrectTextarea;
