import type { TodoListItemProps } from '@types';

const TodoListItem = ({ onCheck, checked, onDelete, label }: TodoListItemProps) => (
  <div className="flex justify-between items-start space-x-3 py-5">
    <div
      onClick={onCheck}
      tabIndex={0}
      role="checkbox"
      aria-checked
      className="flex space-x-5 mr-3 items-start lg:items-center cursor-pointer"
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={checked}
        onChange={() => onCheck}
        className=" mt-1 lg:mt-0 cursor-pointer"
      />
      <span className={`${checked ? 'line-through opacity-50' : ''} hover:text-slate-800`}>{label}</span>
    </div>

    <div onClick={onDelete}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="mt-1 lg:mt-0 hover:text-red-500 hover:font-bold cursor-pointer"
        viewBox="0 0 16 16"
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>
    </div>
  </div>
);

export default TodoListItem;
