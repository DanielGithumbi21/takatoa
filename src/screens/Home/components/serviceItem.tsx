import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  serviceItemWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  serviceItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 110,
    height: 110,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 110,
    height: 110,
  },
  label: {
    width: 98,
    textAlign: 'center',
    marginTop: 2,
    fontSize: 13,
    color:'black',
    fontWeight:"600"
  },
});

interface Props {
  label: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
  testID?: string;
}

const ServiceItem: React.FC<Props> = ({
  label,
  imageSource,
  onPress,
  testID,
}) => {
  return (
    <View style={styles.serviceItemWrapper}>
      <TouchableOpacity
        style={styles.serviceItem}
        testID={testID}
        onPress={onPress}>
        <Image style={styles.image} source={imageSource} />
      </TouchableOpacity>
      {label.split(' ').map((l, i) => (
        <Text
          key={i}
          style={styles.label}>
          {l}
        </Text>
      ))}
    </View>
  );
};

export default ServiceItem;
