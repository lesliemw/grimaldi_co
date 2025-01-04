import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../_services/apiAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useSignup() {
  const router = useRouter();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account successfully created.");
      router.push("/user/login");
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });
  return { signup, isLoading };
}
