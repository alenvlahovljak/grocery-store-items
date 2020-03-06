import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddItem extends Component{
  constructor(props){
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }
  
  onAdd(event){
    this.props.onAdd(event);
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onAdd}>
          <input maxLength="50" placeholder="Add new grocerie" />
          <button className="btn-small green right">Add to list</button>
        </form>
        <Link className="left" to='/'>Back</Link>
      </div>
    );
  }
}


export default AddItem;