import useCreateComments from "@/hooks/useCreateComment";
import { useRef } from "react";

function CommentsForm() {
  const { createComment, isCreatingComment } = useCreateComments();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;
    const enteredComment = commentInputRef.current?.value;
    if (!enteredEmail || !enteredName || !enteredComment) {
      return;
    }
    const newComment = {
      email: enteredEmail,
      name: enteredName,
      comment: enteredComment,
    };

    createComment(newComment);
  }
  return (
    <form onSubmit={handleSubmit} className="card card-body bg-neutral mt-10">
      <div className="grid sm:grid-cols-2 gap-2">
        <div>
          <label htmlFor="email" className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            ref={emailInputRef}
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
            ref={nameInputRef}
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
          ref={commentInputRef}
        ></textarea>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary w-full" disabled={isCreatingComment}>
          {isCreatingComment ? "Please wait..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
export default CommentsForm;
