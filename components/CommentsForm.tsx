function CommentsForm() {
  return (
    <form className="card card-body bg-neutral mt-10">
      <div className="grid sm:grid-cols-2 gap-2">
        <div>
          <label htmlFor="email" className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="name" className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="comment">
          <span className="label-text">Your Comment</span>
        </label>
        <textarea
          name="comment"
          className="h-24 w-full textarea textarea-bordered"
        ></textarea>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary w-full">Submit</button>
      </div>
    </form>
  );
}
export default CommentsForm;
