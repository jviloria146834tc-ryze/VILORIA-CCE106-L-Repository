import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 30, color:'#c8b1e4', textAlign: 'center'}}>My Custom Dashboard 👾</Text>
      <StatCard
        title="Total Users"
        value="1,240"
        bgColor="#532b88"
      />
      <StatCard
        title="Revenue"
        value="$12,450"
        bgColor="#532b88"
      />
      <StatCard
        title="Pending Issues"
        value="3"
        bgColor="#532b88"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f184b',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f2937'
  }
});
