import { SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";

export default function Menus() {



    return (
        <Grid container justifyContent="center" alignItems="center" sx={{
            py: { xs: 2, sm: 2, md: 6, lg: 6 },
            // bgcolor: { xs: 'green', sm: 'blue', md: 'orange', lg: 'red' },

        }}>

            <Grid container xs={11} sm={11} md={10} lg={10} >

                <Typography sx={{
                    fontSize: { xs: 24, sm: 18, md: 24, lg: 24 },
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                    fontFamily: SECONDARY_FONT

                }}>Browse By Cuisine</Typography>

                <Typography sx={{
                    fontSize: { md: 14, lg: 17 },
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                    fontFamily: TERNARY_FONT, color: SECONDARY_TEXTCOLOUR,

                }}>Discover restaurants by type of meal</Typography>



                <Grid container sx={{
                    bgcolor: '', justifyContent: 'space-around',
                    // border: '1px solid grey',
                    py: { xs: 1, sm: 1, md: 2, lg: 4 },
                    mt: { xs: 2, sm: 2, md: 4, lg: 4 },
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                    // box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                }}>

                    {
                        [1, 2, 3, 4, 5, 6]?.map((data, index) =>

                            <Grid container xs={5} sm={4} md={4} lg={1.5} sx={{
                                justifyContent: 'center', bgcolor: '', cursor: 'pointer',
                                p: { xs: 2, sm: 2, md: 0, lg: 0 }, alignItems: "center",
                                my: { md: 1, lg: 0 }
                            }}>

                                <Grid
                                    container
                                    lg={4.5} md={4} sm={4} xs={4}
                                    component='img'
                                    src="/Assets/food-icon-19-1-1.png"
                                // sx={{
                                //     width: { md: 60, lg: 50 },
                                //     height: { md: 60, lg: 50 },

                                // }}
                                />

                                <Grid container justifyContent="center">
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        fontSize: 16, width: 'fit-content',
                                        fontFamily: SECONDARY_FONT
                                    }}>BB.Q</Typography>
                                </Grid>

                            </Grid>

                        )
                    }

                </Grid>


            </Grid>

        </Grid >
    )
}