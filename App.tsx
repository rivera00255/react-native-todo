import React from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Todos from './src/screens/Todos';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Posts from './src/screens/Posts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarIcon = ({
  route,
  focused,
  color,
  size,
}: {
  route: RouteProp<ParamListBase, string>;
  focused: boolean;
  color: string;
  size: number;
}) => {
  let name = '';
  if (route.name === 'Todo')
    name = focused ? 'add-circle' : 'add-circle-outline';
  if (route.name === 'Post')
    name = focused ? 'document-text' : 'document-text-outline';
  return <Ionicons name={name} size={size} color={color} />;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) =>
          tabBarIcon({route, focused, color, size}),
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
        },
      })}>
      <Tab.Screen name="Todo" component={Todos} />
      <Tab.Screen name="Post" component={Posts} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
