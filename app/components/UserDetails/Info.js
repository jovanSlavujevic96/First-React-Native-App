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
        <View style={styles.infoContainer}>
            <Row label="city" body={capitalizeFirstLetter(location.city)} />
            <Row label="birthday" body={datify(dob)} />
            <Row label="registered" body={datify(registered)} />
            <Row label="username" body={login.username} />
        </View>
    );
};

export default Info;
