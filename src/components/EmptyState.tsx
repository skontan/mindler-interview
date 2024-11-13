import styled from "styled-components/native";

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

const EmptyState = () => {
  return (
    <CenteredView>
      <StatusText>No psychologists available at the moment.</StatusText>
    </CenteredView>
  );
};

export default EmptyState;
