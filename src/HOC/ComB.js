import React, { Component } from 'react';

class ComB extends Component {

    render () {
        console.log('---ComB---');
        console.log('this.props',this.props)
        console.log('{...this.props}',{...this.props})
        console.log('---ComB---');
        return (
            <div> 
                Content ComB
            </div>
        );
    }
}

export default ComB;