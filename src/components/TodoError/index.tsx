import { TodoErrorProps } from '@types';

const TodoError = ({ error }: TodoErrorProps) => {
  return <div className="shadow-md rounded bg-red-300 text-red-900 py-3 w-full text-center my-5">{error}</div>;
};

export default TodoError;
