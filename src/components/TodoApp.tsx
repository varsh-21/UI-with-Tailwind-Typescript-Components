import { FormEvent, useMemo, useState } from 'react';
import type { Todo } from '../types';

const initialTodos: Todo[] = [
  { id: crypto.randomUUID(), text: 'Create reusable components', completed: true },
  { id: crypto.randomUUID(), text: 'Document GitHub deployment', completed: false },
];

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [todoText, setTodoText] = useState('');
  const remainingCount = useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);

  function addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = todoText.trim();

    if (!text) {
      return;
    }

    setTodos((current) => [...current, { id: crypto.randomUUID(), text, completed: false }]);
    setTodoText('');
  }

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Todo application</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">Manage local tasks</h2>
      <form className="mt-5 flex gap-3" onSubmit={addTodo}>
        <input
          className="input-field"
          onChange={(event) => setTodoText(event.target.value)}
          placeholder="Add a task"
          type="text"
          value={todoText}
        />
        <button className="btn-primary shrink-0" type="submit">Add</button>
      </form>
      <ul className="mt-5 space-y-3">
        {todos.map((todo) => (
          <li className="flex items-center justify-between gap-3 rounded-2xl bg-amber-50 p-3" key={todo.id}>
            <label className="flex items-center gap-3 text-sm font-medium text-slate-800">
              <input
                checked={todo.completed}
                className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                onChange={() => setTodos((current) => current.map((item) => (item.id === todo.id ? { ...item, completed: !item.completed } : item)))}
                type="checkbox"
              />
              <span className={todo.completed ? 'text-slate-400 line-through' : ''}>{todo.text}</span>
            </label>
            <button
              className="text-sm font-semibold text-amber-700 hover:text-amber-900"
              onClick={() => setTodos((current) => current.filter((item) => item.id !== todo.id))}
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-slate-500">{remainingCount} task{remainingCount === 1 ? '' : 's'} remaining</p>
    </section>
  );
}
