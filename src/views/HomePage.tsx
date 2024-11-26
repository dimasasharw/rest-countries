import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCountries } from "../redux/country/country.thunk"
import { AppDispatch } from "../types/declarations"

import CountryCard from "../components/CountryCard";
import { useNavigate } from "react-router-dom";
import { ArrowDown01Icon, Cancel01Icon, Search01Icon } from "hugeicons-react";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { countries } = useSelector((state: any) => state.country)

  const [arrayCountries, setArrayCountries] = useState<any[]>(countries)

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])


  /**
   * query search
   */
  const [searchQuery, setSearchQuery] = useState<string>("");
  useEffect(() => {
    if (searchQuery) {
      setArrayCountries(
        countries?.filter((country: any) =>
          country?.name?.common.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setArrayCountries(countries);
    }
  }, [searchQuery, countries]);

  return (
    <React.Fragment>
      <div className="flex flex-col w-full h-full text-[2rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="flex flex-col w-full px-[2rem] justify-center items-center self-stretch">
          <h1 data-testid="web__title" className="flex justify-center items-center text-4xl font-bold text-center my-5">List of Countries</h1>
          <div className="flex text-Base-Black text-size-1 flex-wrap gap-3 justify-between items-center w-[83.5%] my-5">
            {/* Input: Searchbar */}
            <div className="flex py-3 px-3 items-center w-auto h-[2rem] gap-3 rounded-xl border-width-0.4 border-Base-Gray bg-BaseWhite">
              <Search01Icon className="flex items-center justify-center w-3.5 h-3.5" />
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                type="text"
                id="search"
                name="search"
                placeholder="search country"
                className=" font-500 p-0 border-0 outline-0 shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-none" />
              <Cancel01Icon className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
            </div>
            <div className="flex flex-row gap-2 border rounded-xl justify-between items-center h-[2rem] px-3 py-1 bg-BaseWhite cursor-pointer">
              <p>Filter</p>
              <ArrowDown01Icon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full items-center justify-center gap-6 my-3 text-center">
            {(arrayCountries && arrayCountries?.length > 0) &&
              arrayCountries?.map((country: any, index: number) => (
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
    </React.Fragment>
  )
}

export default HomePage