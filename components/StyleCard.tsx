import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface StyleCardProps {
  image: React.ReactNode | (() => React.ReactNode);
  title: string;
}

const StyleCard = ({image, title}: StyleCardProps) => {
  return (
    <TouchableOpacity style={{borderRadius: 10, padding: 5, justifyContent: 'center', alignItems: 'center'}}>
      {image && typeof image === 'function' ? image() : image}
      <Text style={{color: '#000', fontWeight: 600}}>{title}</Text>
    </TouchableOpacity>
  );
}

export default StyleCard;