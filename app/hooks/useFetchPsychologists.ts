import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Psychologist = {
  psychologistId: number;
  firstName: string;
  lastName: string;
  thumbnail: string;
  headline: string;
};

type ApiResponse = {
  data: Psychologist[];
};

const fetchPsychologists = async (): Promise<Psychologist[]> => {
  const { data } = await axios.get<ApiResponse>(
    "https://mindler.se/api/mindlerproxy/psychologists/available"
  );
  return data.data;
};

export const useFetchPsychologists = () => {
  return useQuery<Psychologist[]>({
    queryKey: ["psychologists"],
    queryFn: fetchPsychologists,
    refetchInterval: 5 * 60 * 1000,
  });
};
