import CommentItem from "./CommentItem";
import { Comment } from "@/interfaces/Comment";

function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <ul className="space-y-5 mt-5">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
export default CommentList;
