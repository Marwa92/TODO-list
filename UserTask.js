import React from 'react';
import BE from './BE';
import { Dropdown } from 'semantic-ui-react';

class UserTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      value: '',
      selectedUser: null,
    };
   // this.displayList = this.displayList.bind(this);
   this.changeUser = this.changeUser.bind(this);
  }

  async componentDidMount() {
    const { usersList } = this.props;
    const { tasks } = this.props;
    console.log('RRRRR,', usersList);
    console.log('TTTT,', tasks);
  
    this.setState({
      users: usersList,
    });
  }
 
   changeUser(e, {value}){
    const { usersList, tasks } = this.props;
    let selectedUser = null;
    usersList.forEach((user) => {
      if(user.value===value){
      selectedUser=user;
      }
      this.setState({ selectedUser, })
        tasks.forEach(async(task, index) => {
          if (selectedUser){
            tasks[index].user=selectedUser.value;
            console.log('test task id inside loop:', task.id);
            
            await BE.updateTaskUser(tasks[index].id, selectedUser.value);
          }
        });
       
      
    });
  }
  
  //  changeUser(e, { value }) {
  //   const { usersList, tasks } = this.props;
  // console.log('test usersList:', usersList);
  // console.log('test tasks:', tasks);
  
  //   let selectedUser = null;

  //   usersList.forEach((user) => {
  //     if (user.value === value) {
  //       selectedUser = user;
  //       console.log('test value: ', value);
  //     }
  //   });
  //   this.setState({
  //     selectedUser,
  //   });
  //   tasks.forEach(async(task,index) => {
  //     if (selectedUser) {
  //       tasks[index].user = selectedUser.value;
  //       await BE.updateTaskUser(tasks[index].id, selectedUser.value);
  //     }
  //   });
    // if(selectedUser){
    //   task.user = selectedUser.value;
    // }
    // { selectedUser ?
    //   this.changeUserColor(selectedUser.label.style.backgroundColor)
    //   : this.changeUserColor(color)
    // }
    // console.log('selectedUser for user setState:', selectedUser);
    // this.displayUserTasks(value);
  //}
  // displayList(users) {
  //   this.setState({ users });
  //   console.log('displayList:', users);
  // }

  render() {
    const { userId } = this.state;
    console.log('current value check:', userId);
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
          value={userId}
          onChange={this.changeUser}
        />

      </div>
    );
}
}
export default UserTask;
