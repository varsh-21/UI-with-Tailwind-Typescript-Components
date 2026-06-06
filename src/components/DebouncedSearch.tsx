import { useMemo, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const countries = ['Argentina', 'Australia', 'Brazil', 'Canada', 'Denmark', 'France', 'Germany', 'India', 'Japan', 'Kenya', 'Mexico', 'New Zealand', 'South Africa', 'United States'];

export function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const results = useMemo(
    () => countries.filter((country) => country.toLowerCase().includes(debouncedQuery.toLowerCase().trim())),
    [debouncedQuery],
  );

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">Debounced search</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">Delay expensive filtering</h2>
      <input
        className="input-field mt-5"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search countries"
        type="search"
        value={query}
      />
      <p className="mt-3 text-sm text-slate-500">Searching for: {debouncedQuery || 'all countries'}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {results.map((country) => (
          <span className="rounded-full bg-purple-50 px-3 py-2 text-sm font-medium text-purple-800" key={country}>
            {country}
          </span>
        ))}
      </div>
    </section>
  );
}
