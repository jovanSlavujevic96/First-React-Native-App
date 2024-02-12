import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header, Actions } from '../components/UserDetails';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const DataRow = ({typeOfData, valueOfData, iconName}) => {
  const isArray = Array.isArray(iconName);
  const iconNames = (isArray) ? iconName : [iconName];
  return(
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ color: colors.subtleText }}>{`${typeOfData}`}</Text>
        <Text style={{ fontSize: 20, color: colors.primaryText }}>{`${valueOfData}`}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        {iconNames.map((item, index) => (
          <Icon
            key={index}
            name={`${item}`}
            size={30}
            color="blue"
            style={{ alignSelf: 'flex-end', margin: 3 }}
          />
        ))}
      </View>
    </View>
  );
};

class Details extends Component {
  render() {
    const contact = this.props.route.params;
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...contact} />
        <Actions {...contact} />
        {/* <View style={{ padding: 20, backgroundColor: colors.rowLight }}>
          <DataRow typeOfData="email" valueOfData={contact.email} iconName="mail"/>
          <DataRow typeOfData="cell" valueOfData={contact.cell} iconName={["call", "chatbox-ellipses"]}/>
          <DataRow typeOfData="home" valueOfData={contact.phone} iconName="call"/>
        </View> */}
      </ScrollView>
    );
  }
}

export default Details;
