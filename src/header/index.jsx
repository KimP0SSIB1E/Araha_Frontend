import React from 'react'
import '../header/styleSheet.css'

function Header(){
    return (
        <>
            <div className='header'>
                <h1 className='title'>ARAHA</h1>
                <input type='text' placeholder='Search...'></input>
               
            </div>
        </>       
    )
}

export default Header