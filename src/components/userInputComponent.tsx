import React, { ChangeEvent } from 'react'

export type userInputs = {
    title?:string,
    changed: (event: ChangeEvent<HTMLInputElement>)=> void
}
const userInputComponent: React.FC<userInputs> = props => {
    return (
        <div style={{marginTop: '10px'}}>
            <form>
                <div>
                    <label>Enter User Input</label>
                    <input type="text" onChange={props.changed} value={props.title}/>
                </div>
            </form>
        </div>
    )
}

export default userInputComponent