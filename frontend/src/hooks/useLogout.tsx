import { axiosInstance } from "../api/axios";

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
  };

  return { logout };
}

export default useLogout;
