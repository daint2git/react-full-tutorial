const PresentationalComponent = props => {
  const { title, message, toggleVisiblity, isVisible } = props
  return (
    <div>
      <h1>{title}</h1>
      {isVisible ? <p>I'm visible</p> : <p>Not visible</p>}
      <p>{message}</p>
      <button onClick={toggleVisiblity}>Click!</button>
    </div>
  )
}

import {compose, withState, withHandlers} from 'recompose'
export default compose(
  /*********************************** 
   *
   * We will be adding enhancers here 
   *
   ***********************************/  

   // the withState enhancer to setup internal Component state
   // state key isVisible, method to toggleVis,  initial state of false
   withState('isVisible', 'toggleVis', false),
   // the withHandlers enhancer to setup event handlers for the component
   // Tạo higher-order functions, nó chấp nhận một tập hợp các props và trả về một function handler
   // toggleVisiblity sẽ có sẵn cho PresentationalComponent như 1 prop
   withHandlers({
    toggleVisiblity: ({toggleVis, isVisible}) => {
      return (e) => {
        return toggleVis(!isVisible)
      }
    }
   })
)(PresentationalComponent)
