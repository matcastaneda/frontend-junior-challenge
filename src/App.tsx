import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';
import Social from 'components/Social';

import { useAppDispatch } from 'hooks/useStore';
import actions from 'state/reducers/todos/todoActions';

import './index.css';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTodos());
  }, [dispatch]);

  return (
    <div className="relative flex justify-center items-center w-full h-screen p-4">
      <div className="m-auto w-full max-w-2xl">
        <TodoList />
        <TodoForm />

        <ToastContainer autoClose={4000} pauseOnFocusLoss={false} pauseOnHover={false} />

        <Social />
      </div>
    </div>
  );
};

export default App;
