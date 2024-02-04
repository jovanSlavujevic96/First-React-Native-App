import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Contacts from '../screens/Contacts';
import Detail from '../screens/Details';

export const ContactsStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="Details" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
   );
}
