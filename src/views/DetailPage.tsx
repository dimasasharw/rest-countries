import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../types/declarations";
import { fetchDetailCountry } from "../redux/country/country.thunk";
import { Button } from "@mui/material";
import { addCollaborationCountryList, removeCollaborator } from "../redux/collaboration/collaboration.slice";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DetailPage = () => {
  const { countryName, cca2 } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { country, loading } = useSelector((state: any) => state.country);
  const { collaboratedCountries } = useSelector(
    (state: any) => state.collaboration
  );
  const isCollaborated = collaboratedCountries?.some(
    (collaborator: any) => collaborator?.name?.common === country?.name?.common
  );

  useEffect(() => {
    if (countryName && cca2) {
      dispatch(fetchDetailCountry(countryName, cca2));
    }
    ``;
  }, [dispatch]);

  /**
   * For gmaps
   */
  const mapRef = useRef(null);

  useEffect(() => {
    if (!country?.latlng) return;

    const [lat, lng] = country?.latlng;

    const map = mapRef?.current;

    // Function to calculate zoom
    const calculateZoomLevel = (area: number) => {
      if (area <= 40000) return 9; // Smalle
      if (area <= 50000) return 5; // Small
      if (area <= 200000) return 4; // Medium
      if (area <= 2000000) return 3.5; // Med-large
      return 3; // Large
    };

    const zoomLevel = calculateZoomLevel(country?.area);

    if (map) {
      const leafletMap = L.map(map, {
        center: [lat, lng],
        zoom: zoomLevel,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
      });

      L?.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        leafletMap
      );
      const markerIcon = L?.icon({
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
      });

      L?.marker([lat, lng], { icon: markerIcon })
        .addTo(leafletMap)
        .bindPopup("Location");

      return () => {
        leafletMap.remove();
      };
    }
  }, [country]);

  return (
    <div className="flex items-center text-lg text-justify justify-center w-full h-full ">
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
            {loading ? (
              <div className="max-w-[20rem] h-[12rem] bg-gray-300 animate-wave bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-[length:200%_100%]"></div>
            ) : (
              <div className="flex w-full p-5 flex-wrap justify-around items-center gap-3">
                {country?.coatOfArms?.png && (
                  <img
                    src={country?.coatOfArms?.png}
                    alt={`${country?.name?.common} flag`}
                    className="max-w-[10rem] h-auto"
                  />
                )}
                <img
                  src={country?.flags?.png}
                  alt={`${country?.name?.common} flag`}
                  className="max-w-[12rem] h-auto"
                />
              </div>
            )}
            <div className=" text-lg text-justify">
              {`Officially known as ${country?.name?.official}. This ${country?.independent ? "independent" : "non-independent"
                } country is located in ${country?.subregion}, a part of the ${country?.region
                } region. It is ${country?.capital?.length > 0
                  ? `proudly led from its capital, ${country?.capital[0]}`
                  : "without a designated capital"
                } and has a population of approximately ${country?.population?.toLocaleString()} people. 
              `}
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
            <div className="flex w-full min-h-[3rem] bg-stone-100">
              <div className="flex w-[11rem] px-2 justify-between items-center text-start bg-[#E7E5E4]">
                <p>Region</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <p className="text-start">{country?.region}</p>
              </div>
            </div>
            <div className="flex w-full min-h-[3rem] bg-stone-100">
              <div className="flex w-[11rem] px-2 justify-between items-center text-start bg-[#E7E5E4]">
                <p>Subregion</p>
                <p>:</p>
              </div>
              <div className="flex flex-col w-full justify-center items-start text-start p-2">
                <p className="text-start">{country?.subregion}</p>
              </div>
            </div>
            {/* language */}
            <div className="flex w-full min-h-[3rem] bg-stone-100">
              <div className="flex w-[11rem] px-2 justify-between items-center text-start bg-[#E7E5E4]">
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
            <div className="flex w-full min-h-[3rem] bg-stone-100">
              <div className="flex w-[11rem] px-2 justify-between items-center text-start bg-[#E7E5E4]">
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
            <div className="flex w-full min-h-[3rem] bg-stone-100">
              <div className="flex w-[11rem] px-2 justify-between items-center text-start bg-[#E7E5E4]">
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
            <div className="flex w-full min-h-[3rem] bg-stone-100">
              <div className="flex w-[11rem] px-2 justify-between items-center text-start bg-[#E7E5E4]">
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
            <div className="flex w-full min-h-[3rem] bg-stone-100">
              <div className="flex w-[11rem] px-2 justify-between items-center text-start bg-[#E7E5E4]">
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
          {/* location */}
          <div className="flex relative flex-col min-w-[15rem] h-full gap-2 p-3 flex-1">
            <h2 className="font-semibold text-xl my-2">Location</h2>
            <div className="flex h-[1/2] w-full">
              <div
                ref={mapRef} // Ensure map renders inside this div
                className="w-full h-[15rem] border-slate-600 border bg-[#E7E5E4] rounded-md"
              >
                {/* map render */}
              </div>
            </div>
            <div className="">
              <p>
                Visit{" "}
                <a
                  href={country?.maps?.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Google Maps
                </a>{" "}
                to view the location or check the{" "}
                <a
                  href={country?.maps?.openStreetMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Street View
                </a>
                .
              </p>
            </div>
            <div>
              <p>status : {isCollaborated ? "collaborator" : "non-collaborator"}</p>
            </div>
            <div
              className={`flex absolute left-0 bottom-0 w-full justify-center items-center h-[10vh]`}
            >
              {
                isCollaborated ? (
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(removeCollaborator(country?.name?.common))}
                  >
                    Cancel Collaboration
                  </Button>

                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(addCollaborationCountryList(country))}
                  >
                    Ask Collaboration
                  </Button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
