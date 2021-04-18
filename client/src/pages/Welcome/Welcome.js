import React from 'react'
import  {useHistory} from 'react-router'


const Welcome = () => {

    const history = useHistory();

    const handleHome = () => {
        return history.push('/home')
    }

    return (
        <>
            <h1>Hi! Welcome to my page!</h1>
            <button onClick={handleHome}>Enter Home</button>
        </>
    )
}

export default Welcome;