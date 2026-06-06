import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Counter</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Interactive state</h2>
          <p className="mt-2 text-slate-600">Reusable controls powered by React state and TypeScript.</p>
        </div>
        <span className="rounded-2xl bg-indigo-50 px-4 py-2 text-3xl font-black text-indigo-700">{count}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="btn-primary" onClick={() => setCount((value) => value + 1)} type="button">
          Increment
        </button>
        <button className="btn-secondary" onClick={() => setCount((value) => value - 1)} type="button">
          Decrement
        </button>
        <button className="btn-ghost" onClick={() => setCount(0)} type="button">
          Reset
        </button>
      </div>
    </section>
  );
}
