//Tarea
//hooks
import {useState} from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value )


    const handelAdd = () => { 
        // console.log(event)
        setCounter( counter + 1)
        // setCounter( (c) => c + 1)
    }

    const handelSubstract = () => { 
        // console.log(event)
        setCounter( counter - 1)
        // setCounter( (c) => c - 1)
    }

    const handelReset = () => { 
        // console.log(event)
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p> {counter} </p>

            <button onClick={ handelAdd }>
                +1
            </button>
            <button onClick={ handelSubstract }>
                -1
            </button>
            <button onClick={ handelReset }>
                Reset
            </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

//Podemos dejar los estados aqui en el default
//usualmente esto siempre se coloca al final
CounterApp.defaultProps = {
    value: 0
}