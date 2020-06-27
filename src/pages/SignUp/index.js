import React, {useState, useContext} from 'react';
import { View, Text, Platform} from 'react-native';
import {AuthContext} from '../../contexts/auth';

import { Background, Container, Logo, AreaInput,
         Input, Botao, SubmitText} from '../SignIn/styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  //verifica em se o usuario está conectado em contexts/auth.js
  //const {user} = useContext(AuthContext);

  


 return (
   <Background>
       <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
       >
         <AreaInput>
            <Input 
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="none"
              value={nome}
              onChange={(text) => setNome(text)}
            />
         </AreaInput>
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
         <Botao onPress={() => alert('Oi Geovana')}>
           <SubmitText>Cadastrar</SubmitText>
         </Botao>

       </Container>
   </Background>
  );
}