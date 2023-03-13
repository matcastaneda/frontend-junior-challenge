import { useAppSelector } from 'hooks/useStore';
import { selectTodosCompleted } from 'state/reducers/todos/todoSelectors';

const TodoResults = () => {
  // Fix an ability to calculate completed To-Dos
  const todosCompleted = useAppSelector(selectTodosCompleted);

  return (
    <div className="w-full rounded text-center bg-green-200 py-2 text-green-900">
      Done: <span className="font-bold">{todosCompleted}</span>
    </div>
  );
};

export default TodoResults;
