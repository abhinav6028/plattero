"use client"
import { Box, Grid, Typography } from "@mui/material";
import Restaurants from "../Components/Restaurants";
import { BODY_BG, SECONDARY_FONT } from "@/utils";
import Popup from "reactjs-popup";
import FilterPopUp from "../Components/FilterPopUp";


export default function Home() {


    const navData = [
        { text: "Favorites", LoadingComponnet: "" },
        { text: "Fast Delivery", LoadingComponnet: "" },
        { text: "Ratings 4.0 +", LoadingComponnet: "" },
        { text: "Pure Veg", LoadingComponnet: "" },
        { text: "Offers", LoadingComponnet: "" },
        { text: "Less than 300", LoadingComponnet: "" },
    ]

    return (
        <Grid container sx={{
            mt: { xs: 37, sm: 30, md: 30, lg: 10 },
            justifyContent: 'center', bgcolor: BODY_BG
        }}>


            <Grid container sx={{ justifyContent: 'space-around', mt: 5, }}>

                <Grid container sm={11.5} md={11} lg={10} bgcolor={BODY_BG} sx={{ justifyContent: 'space-around', bgcolor: '' }}>

                    <Popup trigger={
                        <Grid container xs={10} sm={10} md={1.3} lg={1.3} sx={{
                            bgcolor: '#FFF', justifyContent: 'center', alignItems: 'center',
                            py: 1,
                            borderRadius: 10,
                            cursor: 'pointer'
                        }}>

                            <Typography sx={{
                                fontFamily: SECONDARY_FONT,
                                fontSize: 16, fontWeight: 400,
                            }}>Filter</Typography>

                            <Box
                                component="img"
                                src="/Assets/icons/filter.png"
                                sx={{
                                    height: 18,
                                    width: 18,
                                    ml: 1
                                }}
                            />
                        </Grid>
                    } modal
                        contentStyle={{
                            width: '80%', background: "transparent", border: "none", display: 'flex', justifyContent: 'center',

                        }}


                    >
                        <Grid container md={8} xs={10} sm={8} lg={7} bgcolor="#FFF">
                            <FilterPopUp />
                        </Grid>
                    </Popup>






                    <Grid container xs={10} sm={10} md={1.3} lg={1.3} sx={{
                        bgcolor: '', justifyContent: 'center', alignItems: 'center',
                        py: 1,
                        borderRadius: 10,
                        cursor: 'pointer',
                        display: { xs: 'none', sm: 'none', md: 'fledx', lg: 'flex' }

                    }}>

                        <Typography sx={{
                            fontFamily: SECONDARY_FONT,
                            fontSize: 16, fontWeight: 400,
                        }}>Sort By</Typography>

                        <Box
                            component="img"
                            src="/Assets/icons/arrow.png"
                            sx={{
                                height: 5,
                                width: 10,
                                ml: 1,
                                bgcolor: ''
                            }}
                        />
                    </Grid>

                    {
                        navData?.map((data, index) =>
                            <Grid container lg={1.3} sx={{
                                bgcolor: '#FFF', justifyContent: 'center', alignItems: 'center',
                                py: 1,
                                borderRadius: 10,
                                cursor: 'pointer',
                                display: { xs: 'none', sm: 'none', md: 'fledx', lg: 'flex' }
                            }}>

                                <Typography sx={{
                                    fontFamily: SECONDARY_FONT,
                                    fontSize: 16, fontWeight: 400,
                                }}>{data?.text}</Typography>

                            </Grid>
                        )
                    }


                </Grid>






            </Grid>

















































            <Grid container sm={11.5} md={11} lg={10} bgcolor={BODY_BG} sx={{ justifyContent: 'space-around', mt: 2 }}>

                <Restaurants bgcolor="#FFF" my={1.5} lg={2.7} />
            </Grid>

        </Grid>
    )
}