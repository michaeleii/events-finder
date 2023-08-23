import { Comment } from "@/interfaces/Comment";
function CommentItem({ comment }: { comment: Comment }) {
  return (
    <li>
      <p>{comment.comment}</p>
      <p className="text-right">By {comment.name}</p>
      <div className="divider"></div>
    </li>
  );
}
export default CommentItem;
