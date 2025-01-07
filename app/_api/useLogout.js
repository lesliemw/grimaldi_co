import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "./apiAuth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries("user");
      router.push("/");
    },
    onError: (error) => {
      console.error("Logout failed:", error.message);
    },
  });

  return { logout, isLoading };
}
