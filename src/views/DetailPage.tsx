import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../types/declarations";
import { fetchDetailCountry } from "../redux/country/country.thunk";
import { Button } from "@mui/material";
import { addCollaborationCountryList } from "../redux/collaboration/collaboration.slice";

const DetailPage = () => {
  const { countryName, cca2 } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { country, loading } = useSelector((state: any) => state.country);
  const { collaboratedCountries } = useSelector((state: any) => state.collaboration);
  const isCollaborated = collaboratedCountries.some(
    (collaborator: any) => collaborator.name.common === country.name.common
  );

  useEffect(() => {
    if (countryName && cca2) {
      dispatch(fetchDetailCountry(countryName, cca2));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(country, "<<<<from store country detail");
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="flex w-[95%] h-[85vh] bg-[#E7E5E4] rounded-xl p-2 shadow-xl">
        {loading && (
          <div
            className={`flex justify-center items-center backdrop-blur-[1px] w-full h-full z-10 absolute top-0 left-0 mx-auto my-auto`}
          >
            <img src={`${window.location.origin}/loading-docs.svg`} />
          </div>
        )}
        <div className="flex flex-wrap w-full overflow-y-auto overflow-x-hidden scrollbar-hide rounded-lg bg-stone-300">
          {/* First Div */}
          <div className="flex flex-col items-center text-lg leading-relaxed text-gray-700 gap-3 justify-start p-3 flex-1">
            <h1 className="font-semibold text-4xl my-4">{countryName}</h1>
            <div className="flex w-full p-5 flex-wrap justify-around items-center gap-3">
              {country?.coatOfArms?.png && (
                <img
                  src={country?.coatOfArms?.png}
                  alt={`${country?.name?.common} flag`}
                  className="max-w-[12rem] h-auto"
                />
              )}
              <img
                src={country?.flags?.png}
                alt={`${country?.name?.common} flag`}
                className="max-w-[15rem] h-auto"
              />
            </div>
            {/* {loading ? (
            <div className="max-w-[20rem] h-[12rem] bg-gray-300 animate-wave bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-[length:200%_100%]"></div>
          ) : (
          )} */}
            <div className=" text-lg text-justify">
              {`Officially known as ${country?.name?.official}. This ${country?.independent ? "independent" : "non-independent"
                } country is located in ${country?.subregion}, a part of the ${country?.region
                } region. It is ${country?.capital?.length > 0
                  ? `proudly led from its capital, ${country?.capital[0]}`
                  : "without a designated capital"
                } and has a population of approximately ${country?.population?.toLocaleString()} people. 
              `}
              {/* <a
              href={country.maps.googleMaps}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>. */}
            </div>
            <div>
              <p className="justify-normal text-justify">
                {country?.flags?.alt}
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="flex flex-col min-w-[15rem] gap-2 p-3 flex-1">
            <h2 className="font-semibold text-xl my-2">Other Information</h2>
            {/* land-area */}
            <div className="flex w-full min-h-[3rem] bg-green-200">
              <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
                <p>Region</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <p className="text-start">
                  {country?.region}
                </p>
              </div>
            </div>
            <div className="flex w-full min-h-[3rem] bg-green-200">
              <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
                <p>Subregion</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <p className="text-start">
                  {country?.subregion}
                </p>
              </div>
            </div>
            {/* language */}
            <div className="flex w-full min-h-[3rem] bg-green-200">
              <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
                <p>Languages</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <ul>
                  {country &&
                    country?.languages &&
                    Object?.keys(country?.languages)?.length > 0 &&
                    Object?.values(country?.languages)?.map(
                      (languange: any, i: number) => (
                        <div key={i}>
                          <li key={i} className="text-start">
                            &bull; {languange}
                          </li>
                        </div>
                      )
                    )}
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
                  {country &&
                    country?.currencies &&
                    Object?.keys(country?.currencies)?.length > 0 &&
                    Object?.keys(country?.currencies)?.map(
                      (currency: any, i: number) => (
                        <div key={i}>
                          <li key={i} className="text-start">
                            &bull; {currency} (
                            {country?.currencies[currency]?.name})
                          </li>
                        </div>
                      )
                    )}
                </ul>
              </div>
            </div>
            {/* timezones */}
            <div className="flex w-full min-h-[3rem] bg-green-200">
              <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
                <p>Timezones</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <p>
                  {country && country?.timezones?.length > 0
                    ? country?.timezones.join(", ")
                    : "No timezones available"}
                </p>
              </div>
            </div>
            {/* independent */}
            <div className="flex w-full min-h-[3rem] bg-green-200">
              <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
                <p>Independent</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <p className="text-start">
                  {country?.independent ? "Yes" : "No"}
                </p>
              </div>
            </div>
            {/* land-area */}
            <div className="flex w-full min-h-[3rem] bg-green-200">
              <div className="flex w-[10rem] px-2 justify-between items-center text-start bg-red-100">
                <p>Land Area</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <p className="text-start">
                  {country?.area}km<sup>2</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Third Div */}
          <div className="flex relative flex-col min-w-[15rem] h-full gap-2 p-3 flex-1">
            <h2 className="font-semibold text-xl my-2">Location</h2>
            <div className="flex h-full w-full">
              <canvas className="w-full h-[15rem] border-slate-600 border bg-BaseWhite rounded-md">
                <p className="flex text-center justify-end items-center text-black">
                  google maps
                </p>
              </canvas>
            </div>
            <div className={`flex absolute left-0 bottom-0 w-full justify-center items-center h-[10vh]
              ${isCollaborated ? "hidden" : ""}`}>
              <Button variant="outlined" onClick={() => dispatch(addCollaborationCountryList(country))}>Collaborate</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
