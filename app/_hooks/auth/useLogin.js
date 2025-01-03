import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../_services/apiAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      router.push("/");
    },
    onError: (err) => {
      console.log("error", err);
      toast.error(
        "The email or password are incorrect. Please check your details and try again."
      );
    },
  });

  return { login, isLoading };
}
