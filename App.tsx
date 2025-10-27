import React from 'react';
import { Alert, Image, FlatList,StatusBar, StyleSheet, useColorScheme, View, Text , Dimensions, TouchableOpacity} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';

type ItemProps = {title : string, image : string, price : string , onPress?: () => void   // ✅ add this
}
useEffect(() => {
  console.log('App mounted');
},[]);

const DATA: ItemProps[] = [
  { title: 'Couple Massage', image : 'https://reactnative.dev/img/tiny_logo.png', price: '$100'},
  { title: 'Single Massage' ,image : 'https://reactnative.dev/img/tiny_logo.png', price: '$60' },
 { title: 'Vouchers' ,image : 'https://reactnative.dev/img/tiny_logo.png', price: '$150' }
];

const screenWidth = Dimensions.get('window').width;
const horizontalPadding = 15 * 2; 
const Item = ({ title, image, price, onPress }: ItemProps) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={{ uri: image }}
    />
<TouchableOpacity onPress={onPress}>
   <View style={styles.downContainer}>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>{price}</Text>
    
  </View>

  <Text style={styles.bottomText}>90 mins | 60 mins | 50 mins</Text>
</View>
</TouchableOpacity>
 
   
   
  </View>
);


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <Text style={styles.text}> Hello from React Native!</Text>
      <FlatList style={styles.list}
      data={DATA}
      horizontal={false} 
  scrollEnabled={true}
  directionalLockEnabled={true}  
  showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Item
onPress={() => handleClick(item)}
      title={item.title} 
      image={item.image} 
      price={item.price}  
      />}
      keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
  function handleClick(item: ItemProps) {
  Alert.alert('Clicked item', item.title);
}
}
const styles = StyleSheet.create({
   bottomText: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
   },
   downContainer: {
    padding: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
  },
  logo: {
    width: '100%',        
    height: 342,
    resizeMode: 'cover',
  },
});


export default App;
