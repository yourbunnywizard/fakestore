import React from 'react';
import {Button, ScrollView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomInput from '@components/common/CustomInput';
import {useAppDispatch} from '@hooks/redux';
import {addProduct, editProduct} from '@store/slices/productsSlice';
import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@components/RootNavigation';
import {IProduct} from '@api/products';

const productSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, ({min}) => `Назва має містити хоча б ${min} символів!`)
    .max(150, ({max}) => `Максимальна кількість сиволів ${max}!`)
    .required("Поле обов'язкове для заповнення!"),
  price: Yup.number()
    .typeError('Поле має містити тільки числове значення')
    .required("Поле обов'язкове для заповнення!"),
  description: Yup.string(),
});

const getInitialProduct = (): IProduct => ({
  id: Math.random(),
  title: '',
  description: '',
  price: '',
  image: '',
});

type TProductForm = NativeStackScreenProps<RootStackParamList, 'Edit', 'New'>;
const ProductForm = ({navigation, route}: TProductForm) => {
  const isEditAction = route?.params?.isEdit || false;
  const productInitial = route?.params?.product || getInitialProduct();

  const dispatch = useAppDispatch();

  const handleSubmitForm = (values: IProduct) => {
    console.log(values);
    isEditAction ? dispatch(editProduct(values)) : dispatch(addProduct(values));
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Formik
        initialValues={productInitial}
        validationSchema={productSchema}
        validateOnMount={true}
        onSubmit={handleSubmitForm}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          isValid,
        }) => (
          <>
            <CustomInput
              labelTitle="Назва"
              placeholder="Дайте назву товару"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              error={errors.title}
            />
            <CustomInput
              labelTitle="Ціна ($)"
              placeholder="Скільки коштує товар"
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
              value={values.price.toString()}
              error={errors.price}
            />
            <CustomInput
              labelTitle="Про товар"
              placeholder="Опишіть товар"
              multiline
              numberOfLines={5}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              error={errors.description}
            />

            <Button
              onPress={() => handleSubmit()}
              title={!isEditAction ? 'Додати новий' : 'Зберегти зміни'}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ProductForm;
