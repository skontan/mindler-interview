import React, { memo } from "react";
import Animated, {
  Easing,
  FadeInDown,
  LinearTransition,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { Image } from "expo-image";

const DELAY = 200;
const DURATION = 600;

const CardContainer = styled(Animated.View)`
  width: 48%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;

const Thumbnail = styled(Image)`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const InfoContainer = styled.View`
  padding: 10px;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`;

const Headline = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
`;

type Props = {
  thumbnail: string;
  firstName: string;
  lastName: string;
  headline: string;
};

const PsychologistCard: React.FC<Props> = ({
  thumbnail,
  firstName,
  lastName,
  headline,
}) => {
  return (
    <CardContainer
      layout={LinearTransition.easing(Easing.linear).duration(DURATION)}
      entering={FadeInDown.delay(DELAY).duration(DURATION)}
    >
      <Thumbnail source={{ uri: thumbnail }} />
      <InfoContainer>
        <Name>
          {firstName} {lastName}
        </Name>
        <Headline>{headline}</Headline>
      </InfoContainer>
    </CardContainer>
  );
};

export default memo(PsychologistCard);
