import React from 'react'


const validationComponent: React.FC<{size: number}> = props => {
    
    return (
        <div style={{marginTop: '10px'}}>
            {props.size > 5 ? (  <p>txt long</p>) :
             <p>txt short</p>
            }
        </div>
    )
}

export default validationComponent