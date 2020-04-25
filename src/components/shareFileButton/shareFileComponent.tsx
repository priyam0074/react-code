import React from "react";
import { StyledShareBlock } from "./styled";
import { Card, Button } from 'semantic-ui-react'
import ModalComponent  from '../Modal/modalComponent'

const shareFileComponent: React.FC<{ }> = () => {
  return ( <>
  <Card.Group>
    <StyledShareBlock>
      <Card.Content>
       
        <Card.Header>Share Files</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          {/* <Button basic color='green'>
            Share Files
          </Button> */}
          <ModalComponent></ModalComponent>
         
        </div>
      </Card.Content>
    </StyledShareBlock>
    </Card.Group> 
    </>)
}


export default shareFileComponent;
