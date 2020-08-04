import React from 'react';

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.complete}>
        {todo.text}
      </input>
    </li>
  );
};
