import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import BE from './BE';

class Collections extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '',
      collections: [{ value: 0, text: 'All' }],
      currentValue: 0,
    };
    this.addCollection = this.addCollection.bind(this);
    this.chooseCollection = this.chooseCollection.bind(this);
  }

  async componentDidMount() {
    const collectionsList = await BE.getCollection();
    const options= collectionsList.map(({id, name}) => ({value:id , text:na}));
 const { collections }=this.state;
    console.log('collections from db:', collections);
  this.setState({ collections: collections.concat(options) });



async addCollection (e, { value }) {

  const { collections } = this.state;
  console.log('collections:', collections);
  console.log('New collection value:', value);
  const addCollection = await BE.postCollection(value);
  console.log('addcolection id, ' , addCollection);
  this.setState({
    // collections: [{ text: value, value: addCollection.id }, ...this.state.collections],
    collections: collections.concat(addCollection),
  });
  console.log ("collections test, ", collections );
  e.preventDefault();
}

chooseCollection(e, { value }){
  console.log('value ,', value);
   this.setState({ currentValue: value });
   this.props.displayTasks(value);
 };

  render(){
     const { currentValue, collections } = this.state;

    return (
      <div>

        <Dropdown
          options={collections}
          placeholder='Add new collection'
          search
          selection
          fluid
          allowAdditions
          value={currentValue}
          onAddItem={this.addCollection}
          onChange={this.chooseCollection}
        />
      </div>
    );
  }

}

export default Collections;
