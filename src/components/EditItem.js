import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class EditItem extends Component{
  constructor(props){
    super(props);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(event){
    this.props.location.onEdit(event);
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onEdit}>
          <input maxLength="50" placeholder='Update grocerie' defaultValue={this.props.location.name}/>
          <button className="btn-small orange lighten-1 right">Update</button>
        </form>
        <Link className="left" to="/">Back</Link>
      </div>
    );
  }
}


export default EditItem;