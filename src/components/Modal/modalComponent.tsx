import React, { useState, SyntheticEvent } from "react";
import { Button, Modal, Header, Dropdown, DropdownItemProps } from "semantic-ui-react";
import countryOptions from "../../__json__/data/searchData.json";

const initialFilterQuery = {
    name: 'Al',
    email: '',
    isOwner: false,
}

const ModalComponent= () => {
    const [status, setStatus] = useState([])
   
   
    function handleChangeStatus(
        event: SyntheticEvent,
        { value }: DropdownItemProps,
      ): void {
        
          console.log(value)
        
        }
      
  return (
    <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <div>
            {/* <Dropdown
              clearable
              fluid
              multiple
              className="ui selection dropdown"
              search
              selection
              options={countryOptions.data}
              placeholder="Select Country"
            >  */}
{console.log(countryOptions.data)}
                        <Dropdown
                placeholder='State'
                fluid
                multiple
                search
                selection
               
                value={status}
            >
            
              <Dropdown.Menu>
              <Dropdown.Header icon="tags" content='Owner' />
                {countryOptions.data.map(
                  (item, index1: string | number | undefined) => { 
                    
                      return item.isOwner ?(
                 <Dropdown.Item
                text={item.name}
                value={item.name}
                key={index1}
                data-testid={`dropdown-update-business-item${index1}`}
              />
                ) : (
                null )
                
                  } 
                )}
                 <Dropdown.Header icon="tags" content='member' />
                {countryOptions.data.map(
                  (item, index1: string | number | undefined) => { 
                    
                      return !item.isOwner ?(
               
                 <Dropdown.Item
                text={item.name}
                onClick={handleChangeStatus}
                value={item.name}
                key={index1}
                data-testid={`dropdown-update-business-item${index1}`}
              />
                ) : (
                null )
                
                  } 
                )}
              </Dropdown.Menu> 
         </Dropdown>
        </div>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalComponent;
