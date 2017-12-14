import React, { Component } from 'react';

class Test extends Component {
    
    render () {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: 'Nhiet nao; &isin;'}}></div>
                <div dangerouslySetInnerHTML={{__html: '&#916;&#8364;&rarr; abc'}}></div>
            </div>
        );
    }
}

export default Test;