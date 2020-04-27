import React from "react";
import { StyledShareBlock } from "./styled";
import { Card } from 'semantic-ui-react'
import ModalComponent  from '../Modal/modalComponent'

const shareFileComponent: React.FC<{ }> = () => {
  return ( <>
  <div className='card-placement'>
  <Card.Group>
    <StyledShareBlock style={{    width: '30rem',
    height: '18rem', backgroundColor: '#8080805e'}}>
      <Card.Content>
       
        <Card.Header>Share Files</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description style={{ height:'75px'}}>
          
        </Card.Description >
      </Card.Content>
      <Card.Content  style={{borderTop:' 0'}}>
        <div className='ui two buttons' >
          <ModalComponent ></ModalComponent>
        </div>
      </Card.Content>
    </StyledShareBlock>
    </Card.Group> 
    </div>
    </>)
}


export default shareFileComponent;
