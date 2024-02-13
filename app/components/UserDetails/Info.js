import { View } from "react-native";
import moment from 'moment';

import Row from "./Row";
import { capitalizeFirstLetter } from "../../helpers/string";
import styles from "./styles";

const datify = (date) => {
    dateObj = new Date(date);
    return moment(dateObj).format('MMMM Do, YYYY');
};

const Info = ({location, dob, registered, login}) => {
    return (
        <View style={styles.plainDataContainer}>
            <Row label="city" body={capitalizeFirstLetter(location.city)} actions = {[]} />
            <Row label="birthday" body={datify(dob)} actions = {[]} />
            <Row label="registered" body={datify(registered)} actions = {[]} />
            <Row label="username" body={login.username} actions = {[]} />
        </View>
    );
};

export default PlainData;
