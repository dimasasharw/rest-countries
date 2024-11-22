import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CountryState } from "../../types/state"


const initialState: CountryState = {
  countries: [],
  country: {},
  loading: false
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<any[]>) => {
      state.countries = action.payload;
      state.loading = false;
    },
    setCountry: (state, action: PayloadAction<any>) => {
      state.country = action.payload;
      state.loading = false;
    },
    clearCountry: (state) => {
      state.country = {};
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  }
})

export const { setCountries, setCountry, clearCountry, setLoading } = countrySlice.actions;
export default countrySlice.reducer;