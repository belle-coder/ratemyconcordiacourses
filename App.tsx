import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Matches, CourseList, CourseProfile, SignIn, SignUp, Student} from "./screens";
import {PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE} from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
import {CardItem, CourseInList, ProfileItem} from './components';
import data from './assets/data/demo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false, animationEnabled: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false, animationEnabled: false}}/>
                <Stack.Screen name="CourseProfile" component={CourseProfile}/>
                <Stack.Screen
                    name="Tab"
                    options={{headerShown: false, animationEnabled: false}}
                >
                    {() => (
                        <Tab.Navigator
                            tabBarOptions={{
                                showLabel: false,
                                activeTintColor: PRIMARY_COLOR,
                                inactiveTintColor: DARK_GRAY,
                                labelStyle: {
                                    fontSize: 14,
                                    textTransform: "uppercase",
                                    paddingTop: 10,
                                },
                                style: {
                                    backgroundColor: WHITE,
                                    borderTopWidth: 0,
                                    marginBottom: 0,
                                    shadowOpacity: 0.05,
                                    shadowRadius: 10,
                                    shadowColor: BLACK,
                                    shadowOffset: {height: 0, width: 0},
                                },
                            }}
                        >
                            <Tab.Screen
                                name="Explore"
                                component={Home}
                                options={{
                                    tabBarIcon: ({focused}) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="search"
                                            text="Explore"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="Matches"
                                component={Matches}
                                options={{
                                    tabBarIcon: ({focused}) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="heart"
                                            text="Liked"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="Course List"
                                component={CourseList}
                                options={{
                                    tabBarIcon: ({focused}) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName=""
                                            text="Course List"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="Student"
                                component={Student}
                                options={{
                                    tabBarIcon: ({focused}) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="person"
                                            text="Profile"
                                        />
                                    ),
                                }}
                            />
                        </Tab.Navigator>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
