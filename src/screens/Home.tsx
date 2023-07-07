import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '@components/common/Typography';
import {fetchProducts} from '@api/products';
import ProductList from '@components/common/ProductList';
import FloatingButton from '@components/common/FloatingButton';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {selectProducts, setProducts} from '@store/slices/productsSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@components/RootNavigation';

type THome = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Home = ({navigation}: THome) => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products?.length > 0) {
      return;
    }

    (async function getProductsList() {
      try {
        const list = await fetchProducts();
        dispatch(setProducts(list));
      } catch (error: any) {
        console.error(error.message);
      }
    })();
  }, [dispatch, products]);

  return (
    <View style={styles.container}>
      <Typography type={'headerTitle'}>
        Продукти{' '}
        <Typography type={'headerSubtitle'}>({products?.length})</Typography>
      </Typography>

      <ProductList products={products || []} navigation={navigation} />
      <FloatingButton onPress={() => navigation.navigate('New')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});

export default Home;
