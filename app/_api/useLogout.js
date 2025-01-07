import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "./apiAuth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      console.log("Logout successful");
      queryClient.removeQueries("user"); // Optionally, specify only relevant queries
      router.push("/");
    },
    onError: (error) => {
      console.error("Logout failed:", error.message);
    },
  });

  return { logout, isLoading };
}
