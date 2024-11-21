import axios from "axios";
import { AppDispatch } from "../../types/declarations";
import { baseURL } from "../../url";
import { setCountries } from "./country.slice";


export const fetchAllCountries = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios(`${baseURL}/all`)
    // console.log(response, '<<<<response getall')
    dispatch(setCountries(response?.data))
  } catch (error) {
    console.log(error, '<error fetching countries')
  }
}

export const fetchDetailCountry = () => async () => {
  try {

  } catch (error) {
    console.log(error)
  }
}