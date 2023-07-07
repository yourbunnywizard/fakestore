import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TTheme} from '@utils/colors';
import useThemeStyles from '@hooks/useThemeStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from '@screens/Home';
import ProductDetails from '@screens/ProductDetails';
import ProductForm from '@screens/ProductForm';
import {IProduct} from '@api/products';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Details: {product: IProduct};
  New: undefined;
  Edit: {product: IProduct; isEdit: boolean} | undefined;
};

const RootNavigation = () => {
  const {styles, applyTheme} = useThemeStyles(createStyles);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Список товарів'}}
          />
          <Stack.Screen
            name="Details"
            component={ProductDetails}
            options={{title: 'Інформація про товар'}}
          />
          <Stack.Screen
            name="New"
            component={ProductForm}
            options={{title: 'Додати товар'}}
          />
          <Stack.Screen
            name="Edit"
            component={ProductForm}
            options={{title: 'Редагувати товар'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

export default RootNavigation;
