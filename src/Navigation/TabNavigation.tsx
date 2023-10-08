import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Riesgo from '../screens/Riesgo';
import Mapa from '../screens/Mapa';
import Alerta from '../screens/Alerta';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Nivel de Riesgo">
        {() => <Riesgo alerta="naranja" />}
      </Tab.Screen>
      <Tab.Screen name="Mapa" component={Mapa} />
      <Tab.Screen name="Alerta" component={Alerta} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
