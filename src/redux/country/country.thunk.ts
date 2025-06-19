import { baseURL } from "../../url";
import axios from "axios";

import { setCountries, setCountry, setLoading } from "./country.slice";

import { AppDispatch } from "../../types/declarations";

export const fetchAllCountries = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios(
      `${baseURL}/all/?fields=name,flags,region,capital,cca2`
    );
    dispatch(setCountries(response?.data));
  } catch (error) {
    console.log(error, "<error fetching countries");
  }
};

export const fetchDetailCountry =
  (countryName: string, cca2: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));

      const responseDetail = await axios(`${baseURL}/name/${countryName}`);

      const country = responseDetail?.data?.find(
        (item: any) => item.cca2 === cca2
      );
      // console.log(country, 'from thunk')
      if (country) {
        dispatch(setCountry(country));
      } else {
        console.error("No matching country found for the provided cca2.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
