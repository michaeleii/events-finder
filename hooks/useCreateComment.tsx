import { API_URL } from "@/helpers/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment } from "@/interfaces/Comment";

export default function useCreateComments() {
  const qc = useQueryClient();
  const { mutate: createComment, isLoading: isCreatingComment } = useMutation({
    mutationFn: async (comment: Omit<Comment, "id">) => {
      const res = await fetch(`api/comments`, {
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
