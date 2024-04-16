import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const handleOnButtonPress = () => {
    console.log('Botão pressionado!');
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity 
          style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }} 
          onPress={handleOnButtonPress}
        >
          <Text style={{ color: 'white' }}>Pressione-me!</Text>
        </TouchableOpacity>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
