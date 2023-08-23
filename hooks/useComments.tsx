import { useQuery } from "@tanstack/react-query";
import { Comment } from "@/interfaces/Comment";
import { useRouter } from "next/router";

export default function useComments() {
  const router = useRouter();
  const { isLoading, data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`/api/comments/${router.query.id}`);
      const { comments }: { comments: Comment[] } = await res.json();
      return comments;
    },
  });
  return { isLoading, comments };
}
