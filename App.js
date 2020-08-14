// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { createStackNavigator, createAppContainer } from 'react-navigation';
import BooksScreen from './components/BooksScreen';
import BookDetailScreen from './components/BookDetailScreen';
import AddBookScreen from './components/AddBookScreen';
import EditBookScreen from './components/EditBookScreen';

const MainNavigator = createStackNavigator({
 Book: { screen: BooksScreen },
 BookDetails: { screen: BookDetailScreen },
 AddBook: { screen: AddBookScreen },
 EditBook: { screen: EditBookScreen },
});

const App = createAppContainer(MainNavigator);

export default App;