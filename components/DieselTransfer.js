import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  searchBox,
  button,
  buttonText,
  text,
  boxContainer,
} from './styles/MainStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SideBar from './ui/SideBar';
const {width, height} = Dimensions.get('window');
export default function DieselTransfer({navigation, route}) {
  const parameter = route.params;
  const [selected, setSelected] = useState(null);
  return (
    <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'white'}}>
      <SideBar all={true} navigation={navigation} vehicle={parameter.vehicle} />
      <View style={{flex: 1, padding: 20}}>
        <Text style={text}>{parameter.vehicle}</Text>
        <TouchableOpacity
          style={searchBox}
          onPress={() => navigation.navigate('VehicleList')}>
          <Icon name="exchange" color="#01315C" size={20} />

          <Text style={[text, {marginLeft: 10}]}>Change vehicle</Text>
        </TouchableOpacity>
        <Text style={[text, {marginTop: 20}]}>{`Return`}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderBottomWidth: 3,
              borderBottomColor: '#01315C',
              marginVertical: 20,
              width: 40,
            }}></View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#01315C',
              marginVertical: 20,
              flex: 1,
            }}></View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 20,
            marginRight: 20,
          }}>
          <TouchableOpacity
            onPress={() => setSelected('jin')}
            style={[
              boxContainer,
              {borderWidth: selected == 'jin' ? 3 : 0, borderColor: 'green'},
            ]}>
            <Image source={require('../assets/jin.png')} />
            <Text style={[text, {fontSize: 25}]}>{`Jin Besut`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected('caltec')}
            style={[
              boxContainer,
              {borderWidth: selected == 'caltec' ? 3 : 0, borderColor: 'green'},
            ]}>
            <Image source={require('../assets/chin.png')} />

            <Text style={[text, {fontSize: 25}]}>{`Chin Bee`}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 20,
            marginRight: 20,
          }}></View>
      </View>
      <View
        style={{
          width: width * 0.35,
          backgroundColor: '#EEF7FF',
          padding: 50,
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 80}}>
          <Text style={text}>{`Welcome back,`}</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#01315C',
              marginVertical: 20,
            }}></View>
          <Text
            style={[
              text,
              {marginTop: 20},
            ]}>{`Select a module to continue`}</Text>
        </View>
      </View>
    </View>
  );
}
