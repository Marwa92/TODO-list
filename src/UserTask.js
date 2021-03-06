import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class UserTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.displayList = this.displayList.bind(this);
    // this.chooseUser = this.chooseUser.bind(this);
  }

  async componentDidMount() {
    const { usersList } = this.props;
    // const newUsersList = usersList.splice(0, 1);
    console.log('RRRRR,', usersList);
    // console.log('users list without All', newUsersList);
    this.setState({
      // users: newUsersList,
    });
  }

  displayList(users) {
    this.setState({ users });
    console.log('displayList:', users);
  }

  render() {
    const { currentValue } = this.state;
    console.log('current value check:', currentValue);
    const { usersList } = this.props;
    console.log('users assign options:', usersList);
    return (
      <div>
        <Dropdown
          options={usersList}
          placeholder="Choose user"
          search
          selection
          fluid
          value={currentValue}
          onChange={this.chooseUser}
        />

      </div>
    );
}
}
export default UserTask;
