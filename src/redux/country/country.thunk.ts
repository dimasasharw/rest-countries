import axios from "axios";
import { AppDispatch } from "../../types/declarations";
import { baseURL } from "../../url";
import { setCountries, setCountry } from "./country.slice";


export const fetchAllCountries = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios(`${baseURL}/all`)
    // console.log(response, '<<<<response getall')
    dispatch(setCountries(response?.data))
  } catch (error) {
    console.log(error, '<error fetching countries')
  }
}

export const fetchDetailCountry = (countryName: string) => async (dispatch: AppDispatch) => {
  try {
    const responseDetail = await axios(`${baseURL}/name/${countryName}`)
    // console.log(responseDetail?.data, '<detail country')
    dispatch(setCountry(responseDetail?.data[0]))
  } catch (error) {
    console.log(error)
  }
}