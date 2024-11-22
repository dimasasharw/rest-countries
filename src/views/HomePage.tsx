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
      <div className="flex flex-col w-full h-full text-[2rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="flex flex-col w-full px-[2rem] justify-center items-center self-stretch">
          <h1 className="flex justify-center items-center text-center ">List of Countries</h1>
          <div className="flex flex-wrap w-full h-full items-center justify-center gap-6 my-3 text-center">
            {(countries && countries?.length > 0) &&
              countries?.map((country: any, index: number) => (
                <div
                  key={index}
                  className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:z-10"
                  onClick={() => navigate(`/${country?.name?.common}/${country?.cca2}`)}
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