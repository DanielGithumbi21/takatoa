import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import ServiceItem from './components/serviceItem';
import { requestLocationPermission } from '../../utils/requestLocationPermission';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    flexWrap:'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    padding:16,
    marginTop:150
  },
});
 
const onClick = (() => {
    requestLocationPermission()
})
const Home = () => {
  return (
    <View style={styles.container}>
       <ServiceItem label='Taka-collect' onPress={onClick} imageSource={require('../../assets/taka-collect.png')}  />
       <ServiceItem label='Special-orders' onPress={onClick} imageSource={require('../../assets/special-orders.png')}  />
       <ServiceItem label='Collection-history' onPress={onClick} imageSource={require('../../assets/collection-history.png')} />
       <ServiceItem label='Taka-track'onPress={onClick} imageSource={require('../../assets/taka-track.png')} />
    </View>
  );
};

export default Home;