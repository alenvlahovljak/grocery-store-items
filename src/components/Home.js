import React, { Component } from 'react';
import Item from './Item';


class Home extends Component{
  render(){
    let items = this.props.items.map((item) =>{
      return (
        <Item key={item.id}
              item={item}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
        />
      );
    });

    return(
      <div className="collection">
        {items}
      </div>
    );
  }
}


export default Home;