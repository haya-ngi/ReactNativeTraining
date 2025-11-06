import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ListingScreen from '../screens/Listing';
import HomeIcon from '../assets/svgs/home.svg';
import Listing from  '../assets/svgs/calendar_month.svg';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f8f8f8ff',
         tabBarStyle: {
          backgroundColor: 'black',  // 👈 makes tab bar black
          borderTopWidth: 0,
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
     <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={24}
              height={24}
              fill={focused ? '#ffffffff' : '#2c3130ff'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Listing"
        component={ListingScreen}
         options={{
          tabBarIcon: ({ focused }) => (
            <Listing
              width={24}
              height={24}
              fill={focused ? '#ffffffff' : '#2c3130ff'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
