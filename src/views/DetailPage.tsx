import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../types/declarations";
import { fetchDetailCountry } from "../redux/country/country.thunk";

const DetailPage = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { country } = useSelector((state: any) => state.country)

  useEffect(() => {
    if (countryName) {
      dispatch(fetchDetailCountry(countryName))
    }
  }, [dispatch])

  useEffect(() => {
    console.log(country, '<<<<from store country detail')
  }, [])

  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex w-[95%] h-[85vh] bg-[#E7E5E4] rounded-lg p-2 shadow-xl">
          <div className="justify-center items-center w-full bg-stone-300">
            <img src={country?.flags?.png} alt="" className="max-w-[100rem] h-auto" />
            <h2 className="text-xl items-start justify-start">
              {countryName}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage