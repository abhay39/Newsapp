import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={{alignItems:'center',justifyContent:'center', marginTop:25,backgroundColor:'black'}}>
        <Appbar.Content title="Welcome To RASU News "/>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({});
