import React from 'react';
import { Image, View, Text } from 'react-native';

import imageLogo from '../../../assets/images/imaria.png';
import Button from '../../../components/Button/Button';

import FormTextInput from '../../../components/FormTextInput/FormTextInput';

import { SignIn } from '../../../services/access/access.service';

import styles from './styles';

const Login = () => {
  const [userCredentials, setUserCredentials] = React.useState({
    email: '',
    password: ''
  });

  async function handlerLogin() {
    try {
      alert(JSON.stringify(userCredentials));
      const res = await SignIn(userCredentials);
      alert(JSON.stringify(res));
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  function handleEmailChange(email) {
    setUserCredentials({
      ...userCredentials,
      email: email,
    });
  }

  function handlePasswordChange(password) {
    setUserCredentials({
      ...userCredentials,
      password: password,
    });
  }

  return (
    <View style={styles.container}>
      <Image source={imageLogo} style={styles.logo} />
      <View style={styles.form}>
        <FormTextInput
          value={userCredentials.email}
          onChangeText={handleEmailChange}
          placeholder="Email"
        />
        <FormTextInput
          value={userCredentials.password}
          onChangeText={handlePasswordChange}
          password={true}
          placeholder="Senha"
        />
        <Button label="ENTRAR" onPress={handlerLogin} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>INSCREVA-SE</Text>
      </View>
    </View>
  );
};

export default Login;
