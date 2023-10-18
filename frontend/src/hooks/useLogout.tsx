import { axiosInstance } from "../api/axios";
import { queryClient } from "../main";
interface LogoutProps {
  refetch: () => void;
}

interface Logout {
  logout: () => void;
}

function useLogout({ refetch }: LogoutProps): Logout {
  const logout = () => {
    axiosInstance.post("/logout").then(() => {
      refetch();
    });
    queryClient.clear();
  };

  return { logout };
}

export default useLogout;
