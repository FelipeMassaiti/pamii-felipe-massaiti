import React from 'react';
import { Text } from 'react-native';

interface TextComponentProps {
  content: string;
}

const TextComponent: React.FC<TextComponentProps> = ({ content }) => {
  return <Text>{content}</Text>;
};

export default TextComponent;