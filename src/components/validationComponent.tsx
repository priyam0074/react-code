import React from 'react'


const validationComponent: React.FC<{size: number}> = props => {
    
    return (
        <div style={{marginTop: '10px'}}>
            {props.size > 5 ? (  <p>txt long</p>) :
             <span>txt short</span>
            }
        </div>
    )
}

export default validationComponent