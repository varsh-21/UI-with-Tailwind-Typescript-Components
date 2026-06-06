import { useMemo, useState } from 'react';

const frameworks = ['React', 'Vue', 'Svelte', 'Angular', 'Solid', 'Qwik', 'Astro', 'Next.js'];

export function SearchFilter() {
  const [query, setQuery] = useState('');
  const filteredFrameworks = useMemo(
    () => frameworks.filter((framework) => framework.toLowerCase().includes(query.toLowerCase().trim())),
    [query],
  );

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Search filter</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">Filter reusable data</h2>
      <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="framework-search">
        Search frameworks
      </label>
      <input
        className="input-field mt-2"
        id="framework-search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try React or Astro"
        type="search"
        value={query}
      />
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {filteredFrameworks.map((framework) => (
          <li className="rounded-2xl bg-emerald-50 px-4 py-3 font-medium text-emerald-900" key={framework}>
            {framework}
          </li>
        ))}
      </ul>
      {filteredFrameworks.length === 0 && <p className="mt-4 text-sm text-slate-500">No frameworks matched your search.</p>}
    </section>
  );
}
