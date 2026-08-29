import { StyleSheet, Text, View } from "react-native";

export default function StatCard(props){
    return(
        <View style={[styles.card, { backgroundColor: props.bgColor }]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        padding: 25,
        borderRadius: 60,
        marginVertical: 10,
        marginLeft: 90,
        width: '50%',
        borderWidth: 6,
        borderColor: '#c8b1e4',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '600',
        textAlign: 'center',
    },
    value: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
});