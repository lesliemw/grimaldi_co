import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "./apiAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries("user");
      toast.success("You have signed out of your account");
      router.push("/");
    },
    onError: (error) => {
      console.error("Logout failed:", error.message);
    },
  });

  return { logout, isLoading };
}
