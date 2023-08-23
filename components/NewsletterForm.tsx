import { useRef } from "react";

function NewsletterForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = emailInputRef.current?.value;

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  }
  return (
    <form onSubmit={handleSubmit} className="my-10">
      <h2 className="text-3xl font-bold text-center mb-5">
        Sign up for to stay updated!
      </h2>
      <div className="form-control">
        <div className="input-group justify-center">
          <input
            type="text"
            ref={emailInputRef}
            placeholder="Enter your email address"
            className="input input-bordered"
          />
          <button className="btn btn-secondary">Register</button>
        </div>
      </div>
    </form>
  );
}
export default NewsletterForm;
