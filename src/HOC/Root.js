import React, { Component } from 'react';
import ComA from './ComA'

class Root extends Component {

    render () {

        let objectOfRoot = {xRoot: 1, yRoot: 2};

        return (

            <div>
                <ComA stringOfRoot={'abcRoot'} {...objectOfRoot}></ComA>
            </div>
        );
    }
}

export default Root;