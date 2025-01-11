import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "./apiAuth";
import { useRouter } from "next/navigation";

export function useUpdateUser() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (response) => {
      if (!response || !response.user) {
        toast.error("Failed to update user details.");
        return;
      }

      const { user } = response;
      toast.success("Account details updated successfully");

      // Update query cache
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });

      // Redirect to account page
      router.push("/account");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
