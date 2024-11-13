import React, { memo, useCallback } from "react";
import { FlatList, StyleSheet, ListRenderItemInfo } from "react-native";
import PsychologistCard from "./PsychologistCard";
import EmptyState from "./EmptyState";
import { Psychologist } from "../hooks/useFetchPsychologists";

type Props = {
  psychologists: Psychologist[];
};

const PsychologistList: React.FC<Props> = ({ psychologists }) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Psychologist>) => (
      <PsychologistCard
        thumbnail={item.thumbnail}
        firstName={item.firstName}
        lastName={item.lastName}
        headline={item.headline}
      />
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: Psychologist) => item.psychologistId.toString(),
    []
  );

  return (
    <FlatList
      data={psychologists}
      keyExtractor={keyExtractor}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={EmptyState}
      removeClippedSubviews
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
  listContent: {
    padding: 10,
  },
});

export default memo(PsychologistList);
