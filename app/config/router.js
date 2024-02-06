import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Contacts from '../screens/Contacts';
import Detail from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';

export const ContactsStack = () => {
    const Stack = createNativeStackNavigator();
    const contactsTitle = (name) => {
        return `${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contacts">
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="Details" component={Detail} options={({ route }) => ({ title: contactsTitle(route.params.name) })} />
            </Stack.Navigator>
        </NavigationContainer>
   );
}
