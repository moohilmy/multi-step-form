import Card from "./card/Card.jsx"
import {Provider}  from "react-redux"
import store from "./redux/store.js"
 
function App() {

  return (
    <Provider store={store}>
    <div className="main-section">
      <Card/>
    </div>
    </Provider>
  )
}

export default App
