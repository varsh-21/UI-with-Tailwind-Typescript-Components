import { useState } from 'react';
import { Counter } from './components/Counter';
import { DebouncedSearch } from './components/DebouncedSearch';
import { FetchApi } from './components/FetchApi';
import { FormValidation } from './components/FormValidation';
import { Modal } from './components/Modal';
import { SearchFilter } from './components/SearchFilter';
import { TodoApp } from './components/TodoApp';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">React + TypeScript + Vite</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Tailwind component playground for everyday UI patterns.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore reusable examples for counters, filtering, forms, API loading, debounced search, todos, and accessible modal overlays.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#components">View components</a>
              <button className="btn-secondary" onClick={() => setIsModalOpen(true)} type="button">Open modal</button>
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-500 p-1 shadow-soft">
            <div className="rounded-[1.8rem] bg-white/95 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-slate-500">Project includes</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {['Tailwind CSS', 'Reusable components', 'Strict TypeScript', 'Vite build', 'GitHub Pages notes', 'Fetch API'].map((item) => (
                  <span className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2" id="components">
          <Counter />
          <SearchFilter />
          <FormValidation />
          <FetchApi />
          <DebouncedSearch />
          <TodoApp />
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default App;
