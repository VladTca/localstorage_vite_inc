import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [value, setValue] = useState<number>(0)
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        console.log('Loaded value from localStorage:', valueAsString)
        if (valueAsString) {
            setValue(JSON.parse(valueAsString))
        }
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if (isLoaded) {
            console.log('Saving value to localStorage:', value)
            localStorage.setItem('counterValue', JSON.stringify(value))
        }
    }, [value, isLoaded])

    const incHandler = () => {
        setValue(value + 1)
    }
    const decHandler = () => {
        setValue(value - 1)
    }

// TODO: add setToSessionStorage
    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue+1', JSON.stringify(value + 1))
        sessionStorage.setItem('counterValue', JSON.stringify(value))
    }

    const getFromLocalStorageHandler = () => {
       const valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            setValue(JSON.parse(valueAsString))
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
