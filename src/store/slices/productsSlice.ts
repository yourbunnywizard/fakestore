import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '@api/products';
import {RootState} from '@store/store';

const initialState = [] as IProduct[];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      return action.payload;
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.unshift(action.payload);
    },
    editProduct: (state, action: PayloadAction<IProduct>) => {
      return state.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
  },
});

export const {setProducts, addProduct, editProduct} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice;
