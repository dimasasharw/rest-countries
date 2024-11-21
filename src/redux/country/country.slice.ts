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
      state.country = {}
    }
  }
})

export const { setCountries, setCountry, clearCountry } = countrySlice.actions;
export default countrySlice.reducer;