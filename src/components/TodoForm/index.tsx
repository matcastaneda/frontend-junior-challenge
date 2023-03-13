import { useState } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import actions from 'state/reducers/todos/todoActions';

const TodoForm = () => {
  const { loading } = useAppSelector(state => state.todos);

  const dispatch = useAppDispatch();
  const [label, setLabel] = useState<string>('');

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!label) return toast.error('Please enter a To-Do', { toastId: 'empty' });

    try {
      await dispatch(actions.addTodo({ label, checked: false }));
      toast.success('To-Do added successfully', { icon: '📝' });
      setLabel('');
    } catch (error) {
      toast.error('Something went wrong', { bodyStyle: { color: '#EF5350' } });
    }
  };

  return (
    <form className="w-full drop-shadow-md" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-5">
        <input
          className={`w-full rounded outline-none focus:border focus:border-black md:w-2/3 py-3 px-4 md:px-10 lg:px-14 ${
            loading === 'loading' ? 'cursor-not-allowed opacity-50' : 'cursor-text'
          }`}
          type="text"
          value={label}
          onChange={handleLabelChange}
          placeholder="Enter a new todo"
          disabled={loading === 'loading'}
        />

        <button
          className="py-3 transition-colors rounded w-full md:w-1/3 bg-cyan-500 text-white hover:bg-cyan-600"
          type="submit"
        >
          ADD TO DO
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
