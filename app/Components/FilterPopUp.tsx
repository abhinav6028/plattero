"use client"
import { BODY_BG, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Sort from "./FilterPopUpComponents/Sort";

export default function FilterPopUp(props: any) {

    const items = [
        { name: 'Sort', LoadingComponent: Sort },
        { name: 'Delivery Time', LoadingComponent: Sort },
        { name: 'Cuisines', LoadingComponent: Sort },
        { name: 'Explore', LoadingComponent: Sort },
        { name: 'Ratings', LoadingComponent: Sort },
        { name: 'Veg/Non-Veg', LoadingComponent: Sort },
    ]

    const [clickedItem, setClickedItem] = useState(0)

    const Loading = items?.filter((data, index) => index == clickedItem)[0]?.LoadingComponent


    return (
        <Grid container sx={{ justifyContent: 'center' }}>

            <Grid container sx={{
                borderBottom: `1px solid #D8D8D8`
            }}>
                <Grid container xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={{
                    alignItems: 'center', py: .8,
                }}>
                    <Typography sx={{
                        fontSize: 25, fontWeight: 600,
                        fontFamily: TERNARY_FONT
                    }}>Filter</Typography>

                    <Box
                        component='img'
                        src="/Assets/icons/closeicon.png"
                        sx={{
                            height: 20,
                            cursor: 'pointer',
                            ml: 'auto'
                        }}
                    />
                </Grid>

            </Grid>

            <Grid container sx={{ mt: 1 }}>

                <Grid container xs={11.5} sm={11.5} md={11.5} lg={11.5} >

                    <Grid container xs={4} sm={4} md={3} lg={3} sx={{
                        borderRight: `1px solid #D8D8D8`
                    }}>
                        {
                            items?.map((data, index) =>
                                <Grid container
                                    onClick={() => setClickedItem(index)}
                                    sx={{
                                        bgcolor: clickedItem == index ? BODY_BG : '',
                                    }}>


                                    <Typography sx={{
                                        width: '100%',
                                        py: { xs: .5, sm: .7, md: 1, lg: 1 },
                                        fontSize: { xs: 15, sm: 17, md: 18, lg: 17 },
                                        fontWeight: 500, fontFamily: TERNARY_FONT,
                                        ml: { xs: .5, sm: .7, md: 1, lg: 1 }
                                    }}>{data?.name}</Typography>



                                </Grid>
                            )
                        }
                    </Grid>

                    <Grid container xs={8} sm={8} md={9} lg={9}>
                        <Loading />
                    </Grid>

                </Grid>

            </Grid>


        </Grid>
    )
}
