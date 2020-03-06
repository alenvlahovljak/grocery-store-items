import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AddItem from "./AddItem";
import EditItem from "./EditItem";


class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} items={this.props.items} onEdit={this.props.onEdit} onDelete={this.props.onDelete} />} />
          <Route path='/add' render={(props) =><AddItem onAdd={this.props.onAdd} {...props} />} />
          <Route path='/edit/:id' component={EditItem} />
        </Switch>
      </main>
    );
  }
}


export default Main;