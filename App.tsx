/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect,useRef } from 'react';
import { requestLocationPermission } from './src/utils/requestLocationPermission';
import Home from './src/screens/Home';
import Menu from './src/assets/icons/menu.png'

import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
function App(): JSX.Element {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const navigationView = () => (
    <View style={[styles.drawerContainer, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Im in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );
  useEffect(() => {
    requestLocationPermission();
  }, []);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
      <TouchableOpacity  onPress={() => drawer.current?.openDrawer()}  style={styles.icon}>
        <Image source={Menu} style={styles.iconImage} />
      </TouchableOpacity>
      
      
    </View>
    <Home/>

    </DrawerLayoutAndroid>
    
   
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    margin:5
  },
  drawerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    padding: 10,
    borderRadius:999,
    backgroundColor: '#ecf0f1',
    elevation:11
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor:'black',
    borderWidth:1
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
    zIndex:99999
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;
