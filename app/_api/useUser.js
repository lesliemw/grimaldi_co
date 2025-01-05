import { useQuery } from "@tanstack/react-query";
import { getUser } from "./apiAuth";
import toast from "react-hot-toast";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}

// const {
//   user: {
//     email,
//     user_metadata: { fullName: currentFullName },
//   },
// } = useUser();
