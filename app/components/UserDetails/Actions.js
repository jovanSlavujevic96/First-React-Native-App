import React from "react";
import { View } from "react-native";

import styles from "./styles";
import { toPhoneNumber } from "../../helpers/string";
import Row from './Row';

const Actions = ({ email, cell, phone }) => {
    return (
        <View style={styles.actionContainer}>
            <Row
                label="email"
                body={email}
                actions = {[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-mail',
                        androidIcon: 'mail',
                    },
                ]}
            />

            <Row
                label="cell"
                body={toPhoneNumber(cell)}
                actions = {[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-call',
                        androidIcon: 'call',
                    },
                    {
                        onPress: () => null,
                        iosIcon: 'ios-chatbox',
                        androidIcon: 'chatbox-ellipses',
                    },
                ]}
            />

            <Row
                label="home"
                body={toPhoneNumber(phone)}
                actions = {[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-call',
                        androidIcon: 'call',
                    },
                ]}
            />

        </View>
    );
};

export default Actions;
