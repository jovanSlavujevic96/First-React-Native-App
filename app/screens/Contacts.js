import React, { Component, PropTypes } from 'react';
import { FlatList, View, Text } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item);
    return null;
  }
  render = () => {
    return (
      <View>
          <FlatList
            style={{ backgroundColor: colors.background }}
            data={contacts}
            renderItem={
              ({ item }) => <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
            }
            keyExtractor={(item) => item.email}
          />
      </View>
    );
  }
}

export default Contacts;
