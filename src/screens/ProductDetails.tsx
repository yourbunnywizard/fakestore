import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import Typography from '@components/common/Typography';
import {IProduct} from '@api/products';
import {PRODUCT_PLACEHOLDER_URL} from '@utils/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@components/RootNavigation';

type TProductDetails = NativeStackScreenProps<RootStackParamList, 'Details'>;

const ProductDetails = ({navigation, route}: TProductDetails) => {
  const product: IProduct = route.params.product;
  return (
    <ScrollView style={styles.container}>
      <Typography
        style={styles.edit}
        onPress={() => navigation.navigate('Edit', {product, isEdit: true})}>
        edit
      </Typography>
      <Typography type={'headerTitle'}>{product.title}</Typography>
      <Image
        source={{uri: product.image || PRODUCT_PLACEHOLDER_URL}}
        style={styles.image}
      />
      <Typography style={styles.price}>Ціна: {product.price}$</Typography>
      <Typography>
        <Typography>Про товар: </Typography> {product.description}
      </Typography>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 24,
  },
  edit: {
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});
export default ProductDetails;
