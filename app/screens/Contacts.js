import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';


const Item = ({contact}) => {
  const name = contact.name;
  return (
    <View>
        <Text >Email: {contact.email}</Text>
        <Text >Name: {name.title + " " + name.first + " " + name.last}</Text>
        <Text/>
    </View>
  );
}

class Contacts extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color:"red"}}>Contacts Screen</Text>
        <FlatList
          style={{backgroundColor: colors.background}}
          data={contacts}
          renderItem={({item}) => <Item contact={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

export default Contacts;
