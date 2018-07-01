import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteItem, toggleCompleted } from '../logic/todos';
import ItemList from '../components/ItemsList';

/* export for test only*/
export class ItemListContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      hide_completed: false
    }
  }

  handleDelete = (itemId) => {
    this.props.onDelete(itemId);
  }

  handleCompleted = (itemId) => {
    this.props.onCompleted(itemId);
  }

  toggleVisibilityCompleted = () => {
    this.setState({
      hide_completed: !this.state.hide_completed
    });
  }

  render() {
    return (
      <div>
        <button
          style = {{marginTop: '10px'}}
          onClick={this.toggleVisibilityCompleted}
        >
          {this.state.hide_completed ? 'Show ':'Hide '} 
          Completed Tasks
        </button>
        <ItemList 
          handleDelete = {this.handleDelete}
          handleCompleted = {this.handleCompleted}
          hide_completed = {this.state.hide_completed}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (itemId) => dispatch(deleteItem(itemId)),
  onCompleted: (itemId) => dispatch(toggleCompleted(itemId)),
});

export default connect(null,mapDispatchToProps)(ItemListContainer);