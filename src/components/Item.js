import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Item extends Component{
  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onDelete(){
    this.props.onDelete(this.props.item);
  }

  onEdit(event){
    event.preventDefault();
    let newItem = this.props.item;
    if(event.target[0].value.length !== 0){
      newItem.name = event.target[0].value;
      this.props.onEdit(newItem);
    }
  }

  render(){
    return(
      <div className="collection-item">
        <div className="row">
          <div className="col s9">
            {this.props.item.name}
          </div>
          <div className="col s3">
          <Link className="btn-small orange lighten-1" to={{pathname: `/edit/${this.props.item.id}`, name: this.props.item.name, onEdit: this.onEdit}}>
          Edit
        </Link>
        <button className="btn-small red" onClick={this.onDelete}>Delete</button>
          </div> 
        </div>
        
        
      </div>
    );
  }
}


export default Item;