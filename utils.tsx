"use client"
import { useEffect, useState } from "react";
import getData from "./app/hooks/useFetchData";

// const [fetchedData, setFetchedData] = useState(null);

// useEffect(() => {
//     const fetchData = async () => {

//         const result = await getData();
//         setFetchedData(result);

//     }

//     fetchData()
// }, []);


// FOR CONTROLLING BACKGROUND COLOUR
export const PRIMARY_BGCOLOUR = "#A3238E"
export const SECONDARY_BGCOLOUR = "#3D9B6D"
export const TERNARY_BGCOLOUR = "#69bbc0"
export const BODY_BG = "#F4F4F4"

// FOR CONTROLLING TEXT COLOUR
export const PRIMARY_TEXTCOLOUR = "#000"
export const SECONDARY_TEXTCOLOUR = "#5F5F5F"

// FOR CONTROLLING FONTS
export const PRIMARY_FONT = ""
export const SECONDARY_FONT = "Open Sans" //for heading
export const TERNARY_FONT = "Montserrat" //fore sub heading || descriptions 
export const POPUP_FONT = "Inter Tight"

// HANDLING URLS'S LIKE API'S
export const BASE_URL = "https://pappad.intertoons.com/api/03879045/V1/"

// COMMON FIGURS
//  export const INTEGRATION_TOKEN = await getData()