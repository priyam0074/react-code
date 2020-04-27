import React, { useState } from "react";
import {
  Button,
  Modal,
  Header,
} from "semantic-ui-react";
// import countryOptions from "../../__json__/data/searchData.json";
import ReactSelect  from '../Modal/menu'

const ModalComponent = () => {
  const [showDropdown, setshowDropdown] = useState({open: false});
  
  const openModal =() => (
    setshowDropdown({open:true})
  )
  const close = () =>  setshowDropdown({...showDropdown, open:false})
   
  return (
    <Modal open={showDropdown.open} onClose={close} size="large" trigger={<Button onClick={openModal} style={{background:'blue', color:'white'}}>share</Button>}>
      <Modal.Header>Share Settings</Modal.Header>
      <Modal.Content image style={{height:'480px'}}>
        <Modal.Description>
          <Header>Add Members</Header>
          <div>
            <ReactSelect></ReactSelect>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      <Button
           onClick={close}
           positive
           labelPosition='right'
           icon='checkmark'
           content='Done'
            />
          </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
