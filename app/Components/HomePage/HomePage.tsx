import { Grid, Typography } from "@mui/material";
import Banner from "./Banner";
import Menus from "./Menus";
import Locations from "./Locations";
import TopRestaurants from "./TopRestaurants";
import RestaurantListing from "./RestaurantListing";
import Review from "./Review";
import DownloadSection from "./DownloadSection";

export default function HomePage() {
    return (
        <Grid container>
            <Banner />

            <Menus />

            <Locations />

            <TopRestaurants />

            <RestaurantListing />

            <Review />

            <DownloadSection />
        </Grid>
    )
}