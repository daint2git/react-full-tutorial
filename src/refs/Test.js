import React, { Component } from 'react';

class Test extends Component {

    focusTextInput = () => {
        console.log('this.refs',this.refs)
        this.refs.textInput.focus();
    }

    render () {
        return (
          <React.Fragment>
            <input
              type="text"
              ref="textInput" />
            <input
              type="button"
              value="Focus the text input"
              onClick={this.focusTextInput}
            />
          </React.Fragment>
        );
    }
}

export default Test;