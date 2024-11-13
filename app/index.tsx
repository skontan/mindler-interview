import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView } from "react-native";
import PsychologistDirectory from "../src/components/PsychologistDirectory";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <Container>
        <PsychologistDirectory />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
