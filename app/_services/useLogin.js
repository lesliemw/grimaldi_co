import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
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
