import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';
import styles, { ICON_SIZE } from "./styles";
import { toPhoneNumber } from "../../helpers/string";

const Actions = ({ email, cell, phone }) => {
    return (
        <View style={styles.actionContainer}>

            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>email</Text>
                    <Text style={styles.actionBody}>{email}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-mail' : 'mail'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>cell</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(cell)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-call' : 'call'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-chatbox' : 'chatbox-ellipses'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>home</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(phone)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-call' : 'call'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default Actions;
