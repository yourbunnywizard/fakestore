import React from 'react';
import {Button, FlatList, Image, StyleSheet, View} from 'react-native';
import Typography from '@components/common/Typography';
import {IProduct} from '@api/products';
import {PRODUCT_PLACEHOLDER_URL} from '@utils/constants';

interface IProductItemProps {
  product: IProduct;
  navigation: any;
}

const ProductItem = ({product, navigation}: IProductItemProps) => (
  <View style={styles.item}>
    <Image
      source={{
        uri: product.image || PRODUCT_PLACEHOLDER_URL,
      }}
      style={styles.image}
    />
    <Typography type={'headerSubtitle'}>{product.title}</Typography>
    <Typography>{product.price}$</Typography>
    <Button
      title={'>'}
      onPress={() => navigation.navigate('Details', {product})}
    />
  </View>
);

interface IProductListProps {
  products: IProduct[];
  navigation: any;
}

const ProductList = ({products, navigation}: IProductListProps) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductItem product={item} navigation={navigation} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default ProductList;
