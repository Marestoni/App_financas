import React, {useState, useContext} from 'react';
import { View, Text, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButtom, SubmitText, Link, LinkText} from './styles';

export default function SignIn() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//verifica em se o usuario está conectado em contexts/auth.js
//  const {user} = useContext(AuthContext)

  function handleLogin(){
    
  }

 return (
   <Background>
       <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
       >
         <Logo source={require('../../assets/Logo.png')} />
         <AreaInput>
            <Input 
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChange={(text) => setEmail(text)}
            />
         </AreaInput>
         <AreaInput>
            <Input 
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChange={(texto) => setPassword(texto)}
            />
         </AreaInput>
         <SubmitButtom onPress={handleLogin}>
           <SubmitText>Acessar</SubmitText>
         </SubmitButtom>

         <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
         </Link>

       </Container>
   </Background>
  );
}