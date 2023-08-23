import { API_URL } from "@/helpers/constants";
import { useQuery } from "@tanstack/react-query";
import { Comment } from "@/interfaces/Comment";

export default function useComments() {
  const { isLoading, data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`/api/comments`);
      const comments: Comment[] = await res.json();
      return comments;
    },
  });
  return { isLoading, comments };
}
