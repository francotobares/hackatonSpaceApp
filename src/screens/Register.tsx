import React, {useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Dropdown from '../components/Dropdown';

type Props = {
  navigation: any;
};

const Register: React.FC<Props> = ({navigation: {navigate}}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    cellularNumber: 0,
  });
  const [, setLoading] = useState(false);
  const [, setSuccess] = useState(false);
  const [, setError] = useState<string | null>(null); // Specify 'string' or 'null' type

  const handleSubmit = async () => {
    setLoading(true);

    try {
      console.log(JSON.stringify(formData));
      const response = await fetch('http://10.0.2.2:8080/api/v1/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        navigate('Login');
      } else {
        setError('Registration failed.');
      }
    } catch (error) {
      setError('An error occurred.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDropdownChange = (text: string) => {
    console.log(text);
    setFormData({
      ...formData,
      location: text,
    });
  };

  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: '#1f41bb',
              marginVertical: 30,
              fontWeight: 'bold',
            }}>
            Create Account
          </Text>
        </View>
        <View style={{marginVertical: 30}}>
          <AppTextInput
            placeholder="Name"
            value={formData.name}
            onChangeText={text => setFormData({...formData, name: text})}
          />
          <AppTextInput
            placeholder="Email"
            value={formData.email}
            onChangeText={text => setFormData({...formData, email: text})}
          />
          <AppTextInput
            placeholder="Number"
            value={formData.cellularNumber.toString()}
            onChangeText={text =>
              setFormData({
                ...formData,
                cellularNumber: Number(text),
              })
            }
          />
          <Dropdown onChangeText={handleDropdownChange} />
        </View>
        <TouchableOpacity
          onPress={handleSubmit} // Connect to the handleSubmit function
          style={{
            padding: 20,
            marginVertical: 10,
            backgroundColor: '#1F41BB',
            borderRadius: 10,
            shadowColor: '#1f41bb',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Login');
          }}
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 14,
            }}>
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
