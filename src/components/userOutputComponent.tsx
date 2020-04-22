import React from 'react'


const userOutputComponent: React.FC<{title:string }> = props => {
    const {
        title
      } = props
    return (
        <div style={{marginTop: '10px'}}>
             <p>{title}</p>
        </div>
    )
}

export default userOutputComponent