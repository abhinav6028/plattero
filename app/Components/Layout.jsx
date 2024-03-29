"use client"
import { Grid } from "@mui/material";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import LoginSignUp from "./LoginSignUp/LoginSignUp";
import { useState } from "react";
import GetLocation from "./GetLocation";

import Cookies from 'js-cookie'

// Layout
export default function Layout({ children }) {

    const [showLogin, setShowLogin] = useState(true);
    const [Location, setLocation] = useState()

    const [showLocationPopUp, setShowLocationPopUp] = useState(false) // for showing google map


    const locationFromCookies = Cookies.get("locations")

    // locationFromCookies ? setShowLocationPopUp(!showLocationPopUp) : ''

    // console.log(">>>>>>>>>>>>>>>>>>>>>>", showLocationPopUp);

    return (
        <Grid container>

            <Header showLogin={showLogin} setShowLogin={setShowLogin} />

            <LoginSignUp showLogin={showLogin} setShowLogin={setShowLogin} />

            <GetLocation
                showLocationPopUp={showLocationPopUp}
                setShowLocationPopUp={setShowLocationPopUp}
                Location={Location}
                setLocation={setLocation}
                locationFromCookies={locationFromCookies}
            />
            <Grid container sx={{
                // mt: 30
            }}>

                {children}
            </Grid>

            <Footer />

        </Grid>


    )
}