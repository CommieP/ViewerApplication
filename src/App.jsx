import RoutesHOC from "./routes"
import store from "./store" 
import { Provider } from "react-redux" 

function App() {
  return (
    <>
      <Provider store={store}>
        <RoutesHOC></RoutesHOC>
      </Provider>
    </>
  )
}

export default App
