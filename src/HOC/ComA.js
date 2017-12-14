import React, { Component } from 'react';
import ComB from './ComB';
import Hoc from './Hoc'

class ComA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value2: "value1",
            boolean2: true,
            data2: {
                "bb": 1,
                "cc": "cd"
            }
        }
    }

    render () {

        console.log('---ComA---');
        console.log('this.props',this.props)
        console.log('{...this.props}',{...this.props})
        console.log('---ComA---');

        return (
            <ComB dataOfComA={123} {...this.props}></ComB>
        );
    }
}

export default Hoc(ComA);