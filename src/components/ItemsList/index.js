import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';

export const ItemsList = ({items, handleCompleted, handleDelete, hide_completed}) => {

  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items
          .filter(item => !(item.completed && hide_completed))
          .map((item) => 
          <li key={item.id}>
            <span 
              style={ {
                textDecoration: item.completed ? 'line-through' : 'none',
                marginRight: '10px'
              }}
            >
              {item.content} 
            </span>
            <button 
              data-test="completed-button"
              style = {{marginRight: '10px'}}
              onClick={() => handleCompleted(item.id)}
            >
              { item.completed ? 'Incomplete' : 'Complete' }
            </button> 
            <button
              data-test="delete-button" 
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  hide_completed: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return { items: state.todos.items };
};

export default connect(mapStateToProps)(ItemsList);
