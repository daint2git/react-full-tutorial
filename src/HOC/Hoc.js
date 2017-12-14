import React, { Component } from 'react';
import ComA from './ComA';

function Hoc (ComA) {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                value1: "value1",
                boolean: true,
                data: {
                    "bb": 1,
                    "cc": "cd"
                }
            }            
        }

        render () {

            console.log('---Hoc---');
            console.log('this.props', this.props)
            console.log('{...this.props}', {...this.props})
            console.log('---Hoc---')

            return (
                <div>
                    <ComA dataOfHoc={'Hoc'} {...this.props}></ComA>
                </div>
            );
        }
    }

}

export default Hoc;