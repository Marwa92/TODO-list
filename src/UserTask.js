import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const UserTask = (props) => {
  let disabled = false;
  if (props.collection === 0) {
    disabled = true;
  }
 
    return (
        <Dropdown text='Filter' icon='filter' floating labeled button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Header icon='tags' content='Filter by tag' />
          <Dropdown.Divider />
          <Dropdown.Item label={{ color: 'red', empty: true, circular: true }} text='Important' />
          <Dropdown.Item label={{ color: 'blue', empty: true, circular: true }} text='Announcement' />
          <Dropdown.Item label={{ color: 'black', empty: true, circular: true }} text='Discussion' />
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <Dropdown
          options={usersList}
          placeholder="Assign to user"
          search
          selection
          fluid
          value={currentValue}
          onChange={this.chooseUser}
        />
      </div>
    );
};

export default UserTask;