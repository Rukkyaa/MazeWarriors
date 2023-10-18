import { useQuery } from "react-query";
import { axiosInstance } from "../api/axios";

interface Authenticated {
  data: boolean | undefined;
  isLoading: boolean;
  refetch: () => void;
}

function useAuthenticated(): Authenticated {
  const LoggedIn = async () => {
    const req = await axiosInstance.get("/loggedIn");
    return req.data.loggedIn;
  };

  const { data, isLoading, refetch } = useQuery("user", LoggedIn);

  return { data, isLoading, refetch };
}

export default useAuthenticated;
