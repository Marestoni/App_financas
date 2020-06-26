import React from 'react';
import { View, Text } from 'react-native';

import { Background, Container, Logo, AreaInput,
  Input, SubmitButtom, SubmitText} from '../SignIn/styles';

export default function Home() {
 return (
   <Background>
     <Container
     behavior={Platform.OS === 'ios' ? 'padding' : ''}
     enabled>
       <SubmitText>Home</SubmitText>
      </Container>
   </Background>
  );
}