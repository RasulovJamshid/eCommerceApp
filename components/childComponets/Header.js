import * as React from 'react';
import { Text, View ,StatusBar} from 'react-native';
import { Appbar } from 'react-native-paper';
import colors from "../../src/configs/colors.js";
const Header=()=>{
    const _goBack = () => console.log('Went back');
    
      const _handleSearch = () => console.log('Searching');
    
      const _handleMore = () => console.log('Shown more');
    
        return(
            <View>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <Appbar.Header style={{backgroundColor:"#fff",boxShadow:"none"}}>
                <Appbar.Action icon="menu" onPress={_handleSearch} />
                <Appbar.Content color={colors.primary} title="AvAlis"/>
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="basket-outline"  onPress={_handleMore} />
                </Appbar.Header>
            </View>
        )
    }

export default Header;