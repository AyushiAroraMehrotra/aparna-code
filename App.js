import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TransactionScreen from "./screens/transactionScreen";
import SearchScreen from "./screens/searchScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: TransactionScreen },
  Search: { screen: SearchScreen }
},
{
defaultNavigationOptions : ({navigation})=>({
  tabBarIcon:({})=>{
    const routeName= navigation.state.routeNamn
    if(routeName === "Transaction"){
      return(
        <Image
        source = {require('assets/book.png')}
        style={{width:40,height:40}
      }/>
      )
    }
        else if( routeName=== "Search"){
          return (
            <Image
            source={require('assets/searchbook.png')}
            style ={{width:40,height:40}}/>
          )
        }
    }
  })
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});