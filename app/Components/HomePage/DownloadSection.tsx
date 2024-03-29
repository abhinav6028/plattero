import { PRIMARY_BGCOLOUR, SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_BGCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";

// DoenloadSection
export default function DownloadSection() {

    const links = [
        {
            imgPath: '/Assets/playstore.png',
            url: ''
        },
        {
            imgPath: '/Assets/appstore.png',
            url: ''
        },
    ]


    return (
        <Grid container justifyContent="center" alignItems="center" sx={{
            mt: 4
        }}>

            <Grid container xs={11} sm={11} md={8} lg={8} bgcolor="">


                <Grid container xs={12} sm={6} md={5} lg={5} bgcolor="" justifyContent="center" alignItems="center">
                    <Grid
                        xs={5} sm={7} md={8} lg={8}
                        container
                        component="img"
                        src="/Assets/mobileimage.png"
                    />
                </Grid>



                <Grid container xs={12} sm={6} md={7} lg={7} bgcolor="" alignItems="center" sx={{
                    mt: { xs: 5, sm: 0, md: 0, lg: 0 }
                }}>
                    <Grid container bgcolor="">
                        <Typography sx={{
                            fontSize: { xs: 24, sm: 18, md: 24, lg: 24 },
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                            fontFamily: SECONDARY_FONT
                        }}>FoodBakery In Your Mobile! 100% Responsive.</Typography>

                        <Typography sx={{
                            fontSize: { md: 14, lg: 17.5 },
                            color: SECONDARY_TEXTCOLOUR,
                            width: '100%',
                            textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                            fontFamily: TERNARY_FONT
                        }}>FoodBakery, it's the fastest way to order food on the go.</Typography>

                        <Grid container bgcolor="" sx={{
                            my: { xs: 3.5, sm: 4, md: 4, lg: 4 },
                            justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                        }}>

                            {
                                links?.map((data, index) =>
                                    <Box
                                        component="img"
                                        src={data?.imgPath}
                                        sx={{
                                            cursor: 'pointer',
                                            ml: index > 0 ? 2 : 0,
                                        }}
                                    />
                                )
                            }

                        </Grid>

                        <Grid container sx={{
                            justifyContent: { xs: "center", sm: 'start', md: 'start', lg: 'start' }
                        }}>
                            <Grid container xs={10} sm={9} md={10} lg={10} bgcolor="red" sx={{}}>

                                <Grid container xs={8} sm={8} md={8} lg={8} bgcolor="blue" sx={{
                                    height: 40,
                                    border: '1px solid #bbbbbb'
                                }}>
                                    <input
                                        type="text"
                                        className="second_field"
                                        placeholder="Your Email"
                                    />
                                </Grid>

                                <Grid container xs={4} sm={4} md={4} lg={4} sx={{
                                    bgcolor: PRIMARY_BGCOLOUR,
                                    height: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <Typography color="#FFF">SEND</Typography>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>


            <Grid container justifyContent="center" alignItems="center" bgcolor={TERNARY_BGCOLOUR} sx={{
                py: { xs: 2, sm: 2, md: 2, lg: 2 },
                mt: { xs: 2, lg: 3 }
            }}>

                <Grid container bgcolor="" xs={11} sm={11} md={10} lg={10} justifyContent="center">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8]?.map((data) =>

                            <Grid container xs={4} sm={4} md={1.5} lg={1.5} justifyContent="center" sx={{
                                my: { xs: 1, sm: 1.5, md: 0, lg: 0 }
                            }}>

                                <Grid
                                    container
                                    xs={9} sm={8} md={10} lg={10}
                                    component="img"
                                    src="/Assets/dish.png"
                                />

                            </Grid>
                        )
                    }
                </Grid>

            </Grid>

        </Grid >
    )
}