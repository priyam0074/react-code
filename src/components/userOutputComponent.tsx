import React, { useState } from 'react'


const userOutputComponent: React.FC<{title:string }> = props => {
   
    const {
        title
      } = props
    return (
        <div style={{marginTop: '10px'}}>
             <span>{title}</span>
        </div>
    )
}

export default userOutputComponent