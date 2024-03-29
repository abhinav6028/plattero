import { PRIMARY_BGCOLOUR, PRIMARY_TEXTCOLOUR, SECONDARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';

export default function Banner() {

    const restDetails = [
        {
            count: 9,
            title: "Restaurant"
        },
        {
            count: 579,
            title: " People Served"
        },
        {
            count: 26,
            title: "Registered Users"
        },
    ]


    return (
        <Grid container sx={{
            height: '100vh', justifyContent: 'center',
            backgroundImage: "url('https://foodbakery.pixfill.com/wp-content/uploads/2022/08/bg-image1-1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: 'center'
        }}>
            <Grid container xs={11} sm={11} md={9} lg={9} sx={{ height: 'fit-content', justifyContent: 'center', bgcolor: '', mt: 'auto' }}>

                <Grid container xs={11} sm={11} md={9} lg={9} justifyContent='center' sx={{
                    // bgcolor: { xs: 'blue', sm: 'green', md: 'yellow', lg: 'red' }
                }}>

                    <Typography sx={{
                        fontSize: { xs: 35, sm: 30, md: 30, lg: 35 },
                        textAlign: 'center',
                        fontWeight: 800,
                        lineHeight: { xs: 1.2, sm: 1.3, md: 1.3, lg: 1.3 },
                        color: PRIMARY_TEXTCOLOUR,
                        fontFamily: 'Montserrat'
                    }}>
                        WE ARE IN THE BUSINESS OF FOOD
                        OUR RESTAURANTS DO
                    </Typography>

                    <Typography sx={{
                        textAlign: 'center',
                        color: SECONDARY_TEXTCOLOUR,
                        my: { xs: 1, sm: 1.4, md: 2, lg: 2.5 },
                        fontSize: { md: 14, lg: 20 },
                        fontFamily: TERNARY_FONT

                    }}>
                        Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                    </Typography>

                </Grid>

                <Grid container sx={{
                    bgcolor: PRIMARY_BGCOLOUR, justifyContent: 'space-around',
                    py: { xs: 2, sm: 1, md: 3, lg: 3 },
                    px: { xs: 1, sm: 1, md: 3, lg: 3 },
                }}>

                    <Grid container xs={11} sm={11} md={5} lg={5} sx={{
                        bgcolor: '#FFF',
                        height: { xs: 40, sm: 40, md: 45, lg: 45 },
                    }}>

                        <Grid container xs={2} sm={2} md={1} lg={1} justifyContent='center' alignItems="center" >
                            <SearchIcon sx={{ fontSize: 20, color: SECONDARY_TEXTCOLOUR }} />
                        </Grid>


                        <Grid container xs={10} sm={10} md={11} lg={11}
                            textAlign="center"
                        >

                            <input
                                style={{ color: SECONDARY_TEXTCOLOUR }}
                                type="text"
                                placeholder="RESTAURANT NAME"
                            />

                        </Grid>

                    </Grid>

                    <Grid container xs={11} sm={11} md={4} lg={4} sx={{
                        bgcolor: '#FFF', height: { xs: 40, sm: 40, md: 45, lg: 45 },
                        mt: { xs: 2, sm: 2, md: 0, lg: 0 },

                    }}>

                        <Grid container xs={2} sm={2} md={1} lg={1} justifyContent='center' alignItems="center" >
                            <LocationOnIcon sx={{ fontSize: 20, color: SECONDARY_TEXTCOLOUR }} />
                        </Grid>


                        <Grid container xs={10} sm={10} md={11} lg={11}
                            textAlign="center"
                        >

                            <input
                                style={{ color: SECONDARY_TEXTCOLOUR }}
                                type="text"
                                placeholder="RESTAURANT NAME"
                            />

                        </Grid>
                    </Grid>

                    <Grid container xs={11} sm={11} md={2.5} lg={2.5} justifyContent='center' alignItems="center" sx={{
                        bgcolor: SECONDARY_BGCOLOUR,
                        mt: { xs: 2, sm: 2, md: 0, lg: 0 },
                        height: { xs: 40, sm: 40, md: 45, lg: 45 }
                    }}>
                        <Typography sx={{
                            fontSize: 18,
                            color: '#FFF',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}>SEARCH</Typography>
                    </Grid>

                </Grid>


                <Grid container lg={10} sx={{
                    // bgcolor: { xs: 'green', sm: 'blue', md: 'orange', lg: 'red' },
                    justifyContent: { xs: 'center', sm: 'center', md: 'space-around', lg: 'space-around' },
                    my: { xs: 1, sm: 1, md: 2, lg: 3 }
                }}  >

                    {
                        restDetails?.map((data, index) =>
                            <Grid container md={3.5} lg={3.5} alignItems="center" sx={{
                                mt: { xs: 1, sm: 1, md: 1, lg: 0 },
                                justifyContent: { xs: 'center', sm: 'center', md: '', lg: '' },
                                flexDirection: { md: 'column', lg: '' }
                            }}>


                                <Box sx={{
                                    display: 'flex',
                                    alignItems: "center",
                                }}>

                                    <Box sx={{
                                        height: { xs: 20, sm: 20, md: 25, lg: 25 },
                                        width: { xs: 20, sm: 20, md: 25, lg: 25 },
                                        bgcolor: SECONDARY_BGCOLOUR, borderRadius: '50%',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <CheckIcon sx={{
                                            fontSize: 15,
                                            color: '#FFF'
                                        }} />

                                    </Box>

                                    <Typography sx={{
                                        fontSize: { sm: 22, md: 23, lg: 27 },
                                        color: PRIMARY_TEXTCOLOUR, fontWeight: 700,
                                        ml: { xs: 1.5, sm: 1.5, md: 2, lg: 2 },
                                        mt: { md: 1, lg: 0 },
                                        fontFamily: TERNARY_FONT

                                    }}>{data?.count}</Typography>

                                </Box>


                                {/* <Box display="flex"> */}


                                <Typography sx={{
                                    fontSize: 20,
                                    color: PRIMARY_TEXTCOLOUR,
                                        fontFamily: TERNARY_FONT,
                                        ml: { xs: 1.5, sm: 1.5, md: 2, lg: 2 },
                                }}>{data?.title}</Typography>
                                {/* </Box> */}




                            </Grid>
                        )
                    }


                </Grid>
            </Grid>
        </Grid >
    )
}