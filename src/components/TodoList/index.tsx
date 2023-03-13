import { toast } from 'react-toastify';

import Spinner from 'components/Spinner';
import TodoListItem from 'components/TodoListItem';
import TodoError from 'components/TodoError';
import TodoResults from 'components/TodoResults';
import TodoCount from 'components/TodoCount';

import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import actions from 'state/reducers/todos/todoActions';

const TodoList = () => {
  const { todos, loading, error } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const handleDelete = async (todoId: number): Promise<void> => {
    try {
      const response = await dispatch(actions.deleteTodo({ id: todoId }));

      if (actions.deleteTodo.rejected.match(response)) throw new Error();

      toast.success('To-Do was deleted successfully', { icon: '🗑️' });
    } catch (error) {
      toast.error('API is read-only.', { bodyStyle: { color: '#EF5350' } });
    }
  };

  const toggleCheck = async (todoId: number, isChecked: boolean): Promise<void> => {
    try {
      const response = await dispatch(actions.toggleTodo({ id: todoId, checked: !isChecked }));

      if (actions.toggleTodo.rejected.match(response)) throw new Error();

      toast.success('To-Do was updated successfully', { icon: '✅' });
    } catch (error) {
      toast.error('API is read-only.', { bodyStyle: { color: '#EF5350' } });
    }
  };

  error && setTimeout(() => dispatch(actions.clearError()), 5000);

  return (
    <div className="mb-5">
      <h1 className="bg-cyan-500 rounded shadow-md text-xl lg:text-2xl text-white font-semibold mb-5 text-center py-4">
        Things to do
      </h1>
      {error && <TodoError error={error} />}

      <div className="flex gap-2 mb-5 drop-shadow-md">
        <TodoCount />

        <TodoResults />
      </div>

      {todos.length > 0 ? (
        <div className="flex flex-col drop-shadow-md divide-y divide-slate-200/60 mb-3 rounded bg-white p-4 md:px-10 lg:px-14 h-max max-h-[470px] overflow-y-auto">
          {todos?.map(todo => (
            <TodoListItem
              key={todo.id}
              onCheck={() => toggleCheck(todo.id, todo.checked)}
              onDelete={() => handleDelete(todo.id)}
              {...todo}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded drop-shadow-md p-5 mb-3 text-center text-sm text-slate-600/60">
          Looks like you&apos;re absolutely free today!
        </div>
      )}

      {loading === 'loading' && <Spinner />}
    </div>
  );
};

export default TodoList;
