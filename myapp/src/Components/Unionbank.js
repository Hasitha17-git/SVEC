import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

function Unionbank() {
    return (
        <div>
            <h1>
                Union Bank
            </h1>
             <Andhrabank location="Nellore"/>
             <Corporationbank location="Tirupathi"/>
        </div>
    )
}

export default Unionbank
