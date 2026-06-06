import { FormEvent, useState } from 'react';

type FormState = {
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (values.message.trim().length < 12) {
    errors.message = 'Message must be at least 12 characters.';
  }

  return errors;
}

export function FormValidation() {
  const [values, setValues] = useState<FormState>({ email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">Form validation</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">Accessible feedback</h2>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="input-field mt-2"
            id="email"
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            placeholder="you@example.com"
            type="email"
            value={values.email}
          />
          {errors.email && <p className="error-text" id="email-error">{errors.email}</p>}
        </div>
        <div>
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            aria-describedby={errors.message ? 'message-error' : undefined}
            className="input-field mt-2 min-h-28"
            id="message"
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
            placeholder="Tell us about your component needs"
            value={values.message}
          />
          {errors.message && <p className="error-text" id="message-error">{errors.message}</p>}
        </div>
        <button className="btn-primary" type="submit">Validate form</button>
        {submitted && <p className="rounded-2xl bg-green-50 p-3 text-sm font-medium text-green-700">Looks good! The form is ready to submit.</p>}
      </form>
    </section>
  );
}
