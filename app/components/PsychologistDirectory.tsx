import React, { useState, useMemo, useCallback } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import PsychologistList from "./PsychologistList";
import EmptyState from "./EmptyState";
import { useFetchPsychologists } from "../hooks/useFetchPsychologists";

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StatusText = styled.Text`
  font-size: 16px;
  color: #555555;
  margin-top: 10px;
  text-align: center;
`;

const ErrorText = styled.Text`
  font-size: 16px;
  color: red;
  text-align: center;
`;

const SearchInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: #cccccc;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #333333;
`;

const PsychologistDirectory: React.FC = () => {
  const { data, error, isError, isLoading } = useFetchPsychologists();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const filteredPsychologists = useMemo(() => {
    if (!data) return [];

    const query = searchQuery.trim().toLowerCase();
    if (query === "") return data;

    return data.filter((psychologist) => {
      const fullName =
        `${psychologist.firstName} ${psychologist.lastName}`.toLowerCase();
      const headline = psychologist.headline.toLowerCase();
      return fullName.includes(query) || headline.includes(query);
    });
  }, [data, searchQuery]);

  if (isLoading) {
    return (
      <CenteredView>
        <ActivityIndicator size="large" />
        <StatusText>Loading psychologists...</StatusText>
      </CenteredView>
    );
  }

  if (isError) {
    return (
      <CenteredView>
        <ErrorText>
          Error: {error?.message || "Something went wrong."}
        </ErrorText>
      </CenteredView>
    );
  }

  if (!data || data.length === 0) {
    return <EmptyState />;
  }

  return (
    <Container>
      <SearchInput
        placeholder="Search psychologists..."
        placeholderTextColor="#999999"
        value={searchQuery}
        onChangeText={handleSearch}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <PsychologistList psychologists={filteredPsychologists} />
    </Container>
  );
};

export default PsychologistDirectory;
