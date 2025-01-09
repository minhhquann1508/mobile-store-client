import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { CategoryType } from '../../types/Category'

interface CounterState {
  categories: CategoryType[]
}

const initialState: CounterState = {
    categories: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state,action) => {
        state.categories = action.payload.data;
    },
  },
})

export const { setCategory } = categorySlice.actions

export const getCategories = (state: RootState) => state.category.categories;

export default categorySlice.reducer