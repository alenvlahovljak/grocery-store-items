import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';

import '../styles/App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      nextId: 0
    };
  }

  addHandler = (event) =>{
    event.preventDefault();
    let newItems = this.state.items;
    if(event.target[0].value.length !== 0){
      newItems.push({
        name: event.target[0].value, 
        id: this.state.nextId
      });
      this.setState({
        items: newItems,
        nextId: this.state.nextId + 1
      });
    }
  }

  deleteHandler = (toDelete) =>{
    const newItems = this.state.items.filter(item =>item.id !== toDelete.id);
    this.setState({items: newItems});
  }

  editHandler = (toEdit) =>{
    let newItems = this.state.items;
    newItems = newItems.map(item =>{
      if(item.id === toEdit.id) 
        item.name = toEdit.name;
      return item;
    });
    this.setState({items: newItems});
  }

  render(){
    return(
      <div className="App">
        <Header />
        <Main items={this.state.items}
              onAdd={this.addHandler}
              onDelete={this.deleteHandler}
              onEdit={this.editHandler}
        />
      </div>
    );
  }
}


export default App;