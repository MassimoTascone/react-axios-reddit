import React from 'react'




export const Input = (props) => {

    return (
        <div className="input">
            <form >
                <input type="text" placeholder="ex: dankmemes..."/>
                <input className="btn" type="submit"/>
            </form>
        </div>
    )
}


export default Input
