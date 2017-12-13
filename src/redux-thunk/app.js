import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles = {
    container: {
      marginTop: 100
    },
    text: {
      textAlign: 'center'
    },
    button: {
      display: 'flex',
      minHeight: 60,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0b7eff'
    },
    buttonText: {
      color: 'red',
      backgroundColor: 'green',
      width: 500,
      height: 500
    }
  }

class App extends Component {
  render() {
    const {container, text, button, buttonText} = styles
    
      let {appData} = this.props;
      console.log('appData------', appData)
      let status, showData = null;
      if (appData) {
         status = appData.isFetching;
         showData = appData.data.map((person, index) => {
          return  <div key={index}>
                      <p>Name: {person.name}</p>
                      <p>Age: {person.age}</p><br/>
                  </div>
        });
        console.log(showData)
      }

      return (
        <div style={container}>
          <div style={text}>Redux-thunk Examples</div>
          <button style={button} onClick={() => this.props.fetchData()}>Click</button>
            <div style={buttonText}>
                {status}
                {showData}
            </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    appData: state.dataReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
