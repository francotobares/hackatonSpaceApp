import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconF from 'react-native-vector-icons/MaterialCommunityIcons';

type RiesgoProps = {
  alerta: string;
};

const Riesgo: React.FC<RiesgoProps> = ({alerta}) => {
  const AlertaRoja: React.FC = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 42, fontWeight: 'bold'}}>Danger Level</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <IconF
              name="thermometer-alert"
              size={120}
              color="#EA1F12"
              style={{marginVertical: 30, marginLeft: 40}}
            />
          </View>
          <View style={{flex: 1}}>
            <Icon
              name="arrow-left"
              size={30}
              color="#EA1F12"
              style={{marginTop: 70, paddingLeft: 50}}
            />
          </View>
          <View style={{flex: 1}}>
            <IconF
              name="fire-alert"
              size={60}
              color="#EA1F12"
              style={{marginTop: 60}}
            />
          </View>
        </View>

        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          High risk: There's fire activity nearby. Extreme caution required.
          Stay in a safe place, have an emergency kit at hand and await further
          information in case of evacuation.
        </Text>
      </View>
    );
  };
  const AlertaNaranja: React.FC = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F6DD',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 42, fontWeight: 'bold'}}>Danger Level</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <IconF
              name="thermometer"
              size={120}
              color="#FF950E"
              style={{marginVertical: 30, marginLeft: 40}}
            />
          </View>
          <View style={{flex: 1}}>
            <Icon
              name="arrow-left"
              size={30}
              color="#FF950E"
              style={{marginTop: 70, paddingLeft: 50}}
            />
          </View>
          <View style={{flex: 1}}>
            <IconF
              name="fire-alert"
              size={60}
              color="#FF950E"
              style={{marginTop: 60}}
            />
          </View>
        </View>

        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          Moderate risk: Proceed with caution when ahandling flammable
          materials. Stay hydrated. Beware further alerts.
        </Text>
      </View>
    );
  };
  const AlertaVerde: React.FC = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F6DD',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 42, fontWeight: 'bold'}}>Danger Level</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <IconF
              name="thermometer-low"
              size={120}
              color="#61CC58"
              style={{marginVertical: 30, marginLeft: 40}}
            />
          </View>
          <View style={{flex: 1}}>
            <Icon
              name="arrow-left"
              size={30}
              color="#61CC58"
              style={{marginTop: 70, paddingLeft: 50}}
            />
          </View>
          <View style={{flex: 1}}>
            <IconF
              name="alert-remove"
              size={60}
              color="#61CC58"
              style={{marginTop: 60}}
            />
          </View>
        </View>

        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          Low risk: Proceed with caution when ahandling flammable materials.
          Preserving the environment is our resposibility
        </Text>
      </View>
    );
  };
  function Alerta(alerta: string) {
    if (alerta === 'roja') {
      return <AlertaRoja />;
    }
    if (alerta === 'naranja') {
      return <AlertaNaranja />;
    }
    return <AlertaVerde />;
  }

  return Alerta(alerta);
};

export default Riesgo;
