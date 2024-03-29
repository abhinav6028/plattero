import { SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BillDetails from "./BillDetails";
import { log } from "console";

export default function OrderPopUp(props: any) {


    const { showOrderPopUp, setShowOrderPopUp } = props

    console.log("showOrderPopUp", showOrderPopUp);



    return (
        <Grid container sx={{
            zIndex: 300, position: 'fixed', top: 0, left: 0,
            bgcolor: 'rgba(10, 0, 0, 0.4)',
            height: '100%',
            display: showOrderPopUp ? 'flex' : 'none'
        }}>
            <Grid
                container
                xs={1} sm={5} md={5} lg={8}
                sx={{ height: '100%' }}
                onClick={() => setShowOrderPopUp(!showOrderPopUp)}

            />

            <Grid container
                xs={11} sm={7} md={7} lg={4}
                // className="animate__animated animate__fadeInRight"
                sx={{ bgcolor: "#FFF", ml: 'auto', height: "100%", justifyContent: 'center' }}>

                <Grid container xs={11} sm={11} md={10} lg={10} sx={{ bgcolor: "", height: 'fit-content', mt: { xs: 1.5, sm: 2, md: 3, lg: 3 } }}>

                    <Grid container alignItems="center">
                        <Box
                            onClick={() => setShowOrderPopUp(!showOrderPopUp)}
                            component='img'
                            src="/Assets/icons/closeicon.png"
                            sx={{
                                height: 20,

                                cursor: 'pointer'
                            }}
                        />

                        <Typography sx={{
                            fontSize: { xs: 16, sm: 18, md: 20, lg: 20 },
                            fontFamily: TERNARY_FONT,
                            fontWeight: 600,
                            ml: 3
                        }}>
                            Order #164805354285874
                        </Typography>


                    </Grid>

                    <Grid container sx={{ mt: 5, justifyTracks: "center", bgcolor: '' }}>

                        <Grid container xs={3} sm={3} md={2} lg={1} sx={{ bgcolor: '', flexDirection: 'column' }}>


                            <LocationOnOutlinedIcon sx={{ fontSize: 30 }} />

                            <Box
                                sx={{
                                    width: 2,
                                    height: 50,
                                    bgcolor: 'green',
                                    ml: 1.7
                                }}
                            />

                            <LocationOnOutlinedIcon sx={{ fontSize: 30 }} />


                        </Grid>

                        <Grid container xs={9} sm={9} md={10} lg={10} sx={{ bgcolor: '' }}>
                            <Box sx={{ ml: 3 }}>
                                <Typography sx={{
                                    fontSize: { xs: 16, sm: 20, md: 15, lg: 17 },
                                    fontFamily: TERNARY_FONT,
                                    fontWeight: 600, bgcolor: ''
                                }}>Boofiya Square</Typography>

                                <Typography sx={{
                                    fontSize: 12,
                                    fontFamily: '',
                                    color: SECONDARY_TEXTCOLOUR, mt: -.4
                                }}>Hotel Aryans Park</Typography>
                            </Box>

                            <Box sx={{
                                width: '100%', bgcolor: '', height: 'fit-content', mt: 'auto',
                                ml: 3
                            }}>
                                <Typography sx={{
                                    fontSize: { xs: 16, sm: 20, md: 15, lg: 17 },
                                    fontFamily: TERNARY_FONT,
                                    fontWeight: 600, bgcolor: ''
                                }}>Home</Typography>

                                <Typography sx={{
                                    fontSize: 12,
                                    fontFamily: '',
                                    color: SECONDARY_TEXTCOLOUR, mt: -.4
                                }}>Ponekkara, Vypin, Ernakulam, Kochi, Kerala, India</Typography>
                            </Box>

                        </Grid>

                    </Grid>

                    <Grid container sx={{
                        py: 3, bgcolor: '',
                        borderBottom: `2px solid #000000`
                    }}>
                        <Grid container xs={3} sm={3} md={2} lg={1} sx={{ bgcolor: '' }}>

                            <Box
                                component="img"
                                src='/Assets/icons/tik.png'
                                sx={{
                                    height: 30
                                }}
                            />

                        </Grid>


                        <Grid container xs={9} sm={9} md={10} lg={10} sx={{ bgcolor: "" }}>
                            <Typography sx={{
                                fontSize: 13,
                                fontFamily: '',
                                color: SECONDARY_TEXTCOLOUR, mt: -.4,
                                ml: 3,
                                width: '60%'
                            }}>Delivered on Mon, Feb 26, 2024, 12:57 PM
                                by Shajahan</Typography>
                        </Grid>

                    </Grid>

                    <Typography sx={{
                        fontSize: 14,
                        fontFamily: TERNARY_FONT,
                        my: 2
                        // color: SECONDARY_TEXTCOLOUR

                    }}>4 ITEMS</Typography>

                    {
                        [1]?.map((data, index) =>
                            <Grid container sx={{
                                bgcolor: "", alignItems: 'center',
                                mt: index > 0 ? 2 : 0
                            }}>
                                <Box
                                    component="img"
                                    src="/Assets/fb-restaurant-08-1-1.jpg"
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        borderRadius: '50%'
                                    }}
                                />

                                <Typography sx={{
                                    fontSize: 14,
                                    fontFamily: TERNARY_FONT,
                                    color: "#646464", ml: 1, fontWeight: 500
                                }}>McSpicy Chicken Burger</Typography>

                                <Typography sx={{
                                    fontSize: 15,
                                    fontFamily: TERNARY_FONT,
                                    color: "#646464", ml: 'auto', fontWeight: 500
                                }}>₹ 208.57</Typography>
                            </Grid>
                        )
                    }

                    <BillDetails />

                </Grid>

            </Grid>


        </Grid >
    )
}