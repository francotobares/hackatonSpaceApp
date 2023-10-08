/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import AppTextInput from '../components/AppTextInput';

type Props={
  navigation: any
  }

const Login: React.FC<Props> = ({navigation: {navigate}}) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focused, setFocused] = useState<boolean>(false);
  const [mail, setMail] = useState('');


  return (
    <SafeAreaView>
      <View style={{padding:20}}>
          <View style={{alignItems:'center'}}>
                <Text style={{fontSize:30, color:'#1f41bb', marginVertical:30, fontWeight:'bold'}}>
                      Login Here
                </Text>
                <Text style={{fontSize:24, maxWidth:'60%', textAlign:'center', fontWeight:'600'}}>
                  Welcome back you've been missed!
                </Text>
          </View>
          <View style={{marginVertical:30}}>
              <AppTextInput
            placeholder="Email"
            value={mail}
            onChangeText={text => setMail(text)} />
          </View>
          <TouchableOpacity style={{
              padding:20,
              marginVertical:30,
              backgroundColor: '#1F41BB',
              borderRadius: 10,
              shadowColor: '#1f41bb',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.3,
              shadowRadius: 10}}
              onPress={()=>navigate('TabNavigator')}
              >
                  <Text style={{
                    color:'#fff',
                    textAlign:'center',
                    fontSize:20,
                  }}>
                    Sign in
                  </Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
                console.log('login');
                navigate('Register');
              }} style={{
              padding:10}}>

                  <Text style={{
                    color:'#000',
                    textAlign:'center',
                    fontSize:14,
                  }}>
                   Create new account
                  </Text>

          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
