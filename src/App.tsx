
import './App.css'
import {useState} from "react";

function App() {

    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const decHandler = () => {
        setValue(value - 1)
    }


    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue+1', JSON.stringify(value+1))
    }

    const getFromLocalStorageHandler = () => {
        const value = localStorage.getItem('counterValue')
        if (value) {
            setValue(JSON.parse(value))
        }
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue+1')
        setValue(0)
    }
  return (
      <div className="App">
          <h1>{value}</h1>
          <button onClick={incHandler}>+</button>
          <button onClick={decHandler}>-</button>
          <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
          <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
          <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
          <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
      </div>
  )
}

export default App
