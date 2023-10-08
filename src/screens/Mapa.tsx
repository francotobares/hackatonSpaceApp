import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const Mapa = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black', // Background color for the video player
    },
    video: {
      flex: 1,
    },
  });

  return (
    <View style={{flex: 1, backgroundColor: '#white'}}>
      <Text style={{fontSize: 42, fontWeight: 'bold', textAlign: 'center'}}>
        Mapa
      </Text>
      <View style={styles.container}>
        <Video
          source={require('../assets/mapaVideo.mp4')} // Use require to access local asset
          style={styles.video}
          controls={false}
        />
      </View>
    </View>
  );
};

export default Mapa;
