import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { store } from './store/redux/store';
// import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (<Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: {backgroundColor: '#351401'},
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#e4baa1"
  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: "All categories",
      drawerIcon: ({color, size}) => <Ionicons size={size} color={color} name='list'/>
    }}/>
    <Drawer.Screen name='Favorties' component={FavoritesScreen} options={{
      drawerIcon: ({color, size}) => <Ionicons size={size} color={color} name='star' />
    }}/>
  </Drawer.Navigator>)
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen 
            name="DrawerScreen" 
            component={DrawerNavigator} 
            options={{
              headerShown: false
            }}/>
            <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            />
            <Stack.Screen 
            name='MealDetail'
            component={MealDetailsScreen}
            options={{
              title: "About the meal"
            }}
  />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
