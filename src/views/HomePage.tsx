import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCountries } from "../redux/country/country.thunk"
import { AppDispatch } from "../types/declarations"

import CountryCard from "../components/CountryCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { countries } = useSelector((state: any) => state.country)

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])


  useEffect(() => {
    console.log(countries, '<< countries')
  }, [])

  return (
    <>
      <div className="flex flex-col w-full h-full text-[2rem] overflow-y-auto">
        <div className="flex flex-col w-full mx-auto justify-center items-center self-stretch bg-[pink]">
          <h1 className="flex justify-center items-center text-center ">List of Countries</h1>
          <div className="flex flex-wrap w-full h-full items-center justify-center gap-3 my-3 text-center">
            {(countries && countries?.length > 0) &&
              countries?.map((country: any, index: number) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => navigate("/detail")}
                >
                  <CountryCard country={country} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage