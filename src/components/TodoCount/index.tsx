import { useAppSelector } from 'hooks/useStore';
import { selectTodos } from 'state/reducers/todos/todoSelectors';

const TodoCount = () => {
  const count = useAppSelector(selectTodos);

  return (
    <div className="w-full text-center rounded bg-sky-200 text-sky-900 py-2">
      To-Do: <span className="font-bold">{count}</span>
    </div>
  );
};

export default TodoCount;
