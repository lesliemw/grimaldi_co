import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./apiAuth";

export function useUser() {
  const { isLoading, data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return {
    isLoading,
    currentUser,
    isAuthenticated: currentUser?.role === "authenticated",
  };
}
