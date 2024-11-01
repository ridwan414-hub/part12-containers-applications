import PropTypes from 'prop-types';

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={() => deleteTodo(todo)}> Delete </button>
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
        <button onClick={() => completeTodo(todo)}> Set as done </button>
      </span>
      <span>
        <button onClick={() => deleteTodo(todo)}> Delete </button>
      </span>
    </>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto', border: '1px solid black', padding: '10px' }}>
      <span style={{ width: '50%', textAlign: 'left' }}>
        {todo.text}
          </span>
          
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todo;