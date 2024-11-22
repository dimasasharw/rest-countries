import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../types/declarations";
import { fetchDetailCountry } from "../redux/country/country.thunk";

const DetailPage = () => {
  const { countryName, cca2 } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { country, loading } = useSelector((state: any) => state.country)

  useEffect(() => {
    if (countryName && cca2) {
      dispatch(fetchDetailCountry(countryName, cca2))
    }
  }, [dispatch])

  useEffect(() => {
    console.log(country, '<<<<from store country detail')
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="flex flex-wrap w-[95%] h-[85vh] bg-[#E7E5E4] overflow-y-auto rounded-lg p-2 shadow-xl">
        {/* First Div */}
        <div className="flex flex-col items-center justify-start bg-stone-300 p-3 flex-1">
          {loading ? (
            <div className="max-w-[20rem] h-[12rem] bg-gray-300 animate-wave bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-[length:200%_100%]"></div>
          ) : (
            <img
              src={country?.flags?.png}
              alt={`${country?.name?.common} flag`}
              className="max-w-[20rem] max-h-[12rem]"
            />
          )}
          <h2 className="text-xl mt-4">{countryName}</h2>
        </div>

        {/* Second Div */}
        <div className="flex flex-col min-w-[15rem] gap-2 bg-red-200 p-3 flex-1">
          <h1 className="mb-2">More Information</h1>
          {/* language */}
          <div className="flex w-full min-h-[3rem] bg-green-200">
            <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
              <p>Languages</p>
              <p>:</p>
            </div>
            <div className="flex flex-col w-full justify-center items-start text-start p-2">
              <ul>
                {Object?.keys(country?.languages)?.length > 0 &&
                  Object?.values(country?.languages)?.map((languange: any, i: number) => (
                    <>
                      <li key={i} className="text-start">&bull; {languange}</li>
                    </>
                  ))
                }
              </ul>
            </div>
          </div>
          {/* currencies */}
          <div className="flex w-full min-h-[3rem] bg-green-200">
            <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
              <p>Currencies</p>
              <p>:</p>
            </div>
            <div className="flex flex-col w-full justify-center items-start text-start p-2">
              <ul>
                {Object?.keys(country?.currencies)?.length > 0 &&
                  Object?.keys(country?.currencies)?.map((currency: any, i: number) => (
                    <>
                      <li key={i} className="text-start">&bull; {currency} ({country?.currencies[currency]?.name})</li>
                    </>
                  ))
                }
              </ul>
            </div>
          </div>
          {/* independent */}
          <div className="flex w-full min-h-[3rem] bg-green-200">
            <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
              <p>Independent</p>
              <p>:</p>
            </div>
            <div className="flex flex-col w-full justify-center items-start text-start p-2">
              <p className="text-start">{country?.independent ? "Yes" : "No"}</p>
            </div>
          </div>

        </div>

        {/* Third Div */}
        <div className="flex flex-col min-w-[15rem] bg-blue-200 p-3 flex-1">
          <canvas className="w-full h-[15rem] border-slate-600 border bg-BaseWhite rounded-md">
            <p className="flex text-center justify-end items-center text-black">google maps</p>
          </canvas>
          <p>lalala2</p>
          <p>lalala2</p>
          <p>lalala2</p>
          <p>lalala2</p>
          <p>lalala2</p>
          <p>lalala2</p>
          <p>lalala2</p>
          <p>lalala2</p>
          <p>lalala2</p>
        </div>
      </div>
    </div>

  )
}

export default DetailPage