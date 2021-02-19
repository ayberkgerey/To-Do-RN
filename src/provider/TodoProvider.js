import React, {useState} from 'react';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={{todo, setTodo}}>
      {props.children}
    </TodoContext.Provider>
  );
};

export {TodoProvider, TodoContext};
