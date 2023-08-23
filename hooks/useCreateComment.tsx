import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment } from "@/interfaces/Comment";
import { useRouter } from "next/router";

export default function useCreateComments() {
  const qc = useQueryClient();
  const router = useRouter();
  const { mutate: createComment, isLoading: isCreatingComment } = useMutation({
    mutationFn: async (comment: Omit<Comment, "id">) => {
      const res = await fetch(`/api/comments/${router.query.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      const newComment: Comment = await res.json();
      return newComment;
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["comments"] });
    },
  });
  return { createComment, isCreatingComment };
}
