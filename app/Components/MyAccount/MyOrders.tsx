import { BODY_BG, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import OrderPopUp from "../OrderPopUp";
import { useState } from "react";

export default function MyOrders(props: any) {

    const [showOrderPopUp, setShowOrderPopUp] = useState(false)

    console.log("showOrderPopUp", showOrderPopUp);


    return (

        <Grid container bgcolor="" sx={{ justifyContent: 'center', height: '' }}>

            <OrderPopUp showOrderPopUp={showOrderPopUp} setShowOrderPopUp={setShowOrderPopUp} />

            {
                [1, 2, 3]?.map((data, index) =>

                    <Grid container xs={11.5} sm={11.5} md={11} lg={11} bgcolor={BODY_BG} sx={{
                        height: 'fit-content', px: 2,
                        py: 1,
                        mt: index > 0 ? 3 : 0
                    }}>
                        <Grid container sx={{ bgcolor: '', borderBottom: `1px dashed ${SECONDARY_TEXTCOLOUR}` }}>
                            <Grid container bgcolor="" md={6} lg={7} sx={{
                                py: 2
                            }}>
                                <Box
                                    component='img'
                                    src="/Assets/fb-restaurant-08-1-1.jpg"
                                    sx={{
                                        width: { xs: 100, sm: 120, md: 120, lg: 110 },
                                        height: { xs: 80, sm: 85, md: 90, lg: 80 },
                                        bgcolor: '',
                                        borderRadius: 2
                                    }}
                                />

                                <Grid sx={{
                                    ml: { xs: '', sm: 1, md: 1, lg: 1.5 },
                                    mt: { xs: 1, sm: 0, md: 0, lg: 0 },
                                    bgcolor: ''
                                }}>
                                    <Typography sx={{
                                        fontSize: { xs: 16, sm: 20, md: 15, lg: 17 },
                                        fontFamily: TERNARY_FONT,
                                        fontWeight: 600
                                    }}>Hotel Aryans Park</Typography>

                                    <Typography sx={{
                                        fontSize: 12,
                                        fontFamily: '',
                                        color: SECONDARY_TEXTCOLOUR
                                    }}>Hotel Aryans Park</Typography>

                                    <Typography sx={{
                                        fontSize: 12,
                                        fontFamily: '',
                                        color: SECONDARY_TEXTCOLOUR
                                    }}> ORDER #154652727367347</Typography>


                                    <Box sx={{ display: 'flex', mt: .5 }}>
                                        <Box sx={{ display: 'flex', bgcolor: '', alignItems: 'center' }}>

                                            <Box
                                                component="img"
                                                src="/Assets/icons/Calendar.png"
                                                sx={{ height: 15, width: 15 }}
                                            />

                                            <Typography sx={{
                                                fontSize: 11,
                                                fontFamily: TERNARY_FONT,
                                                color: SECONDARY_TEXTCOLOUR, ml: .5
                                            }}> ORDER #154652727367347</Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', bgcolor: '', width: 'fit-content', ml: 1, alignItems: 'center' }}>

                                            <Box
                                                component="img"
                                                src="/Assets/icons/clock.png"
                                                sx={{ height: 15, width: 15 }}
                                            />

                                            <Typography sx={{
                                                fontSize: 11,
                                                fontFamily: TERNARY_FONT,
                                                color: SECONDARY_TEXTCOLOUR, ml: .5
                                            }}> 12:19 PM</Typography>
                                        </Box>
                                    </Box>

                                </Grid>

                                {/* </Box> */}
                            </Grid>

                            <Grid container bgcolor="" md={5} lg={5} my={1.5}>

                                <Box sx={{
                                    alignItems: 'center', display: 'flex', mb: 'auto',
                                    ml: { md: 'auto', lg: 'auto' },
                                    bgcolor: ''
                                }}>

                                    <Box
                                        component="img"
                                        src="/Assets//icons/tik.png"
                                        sx={{ height: 25, width: 25 }}
                                    />

                                    <Typography sx={{
                                        fontSize: 11,
                                        fontFamily: '', ml: 1
                                    }}> Delivered on Mon, Feb 26, 2024, 12:57 PM</Typography>
                                </Box>

                                <Typography
                                    onClick={() => setShowOrderPopUp(!showOrderPopUp)}
                                    sx={{
                                        width: '100%',
                                        bgcolor: '', height: 'fit-content',
                                        mt: 'auto', textAlign: { xs: 'center', sm: 'end', md: 'end', lg: 'end' }, fontWeight: 600,
                                        color: PRIMARY_BGCOLOUR,
                                        my: { xs: 1 },
                                        fontSize: { xs: 17 }
                                    }}>View Details</Typography>



                            </Grid>
                        </Grid>


                        <Grid container sx={{ justifyContent: { xs: 'start', sm: 'start', mg: 'space-between', lg: 'space-between' } }}>
                            <Typography sx={{
                                fontSize: 13,
                                fontFamily: TERNARY_FONT,
                                color: '',
                                mt: 1
                            }}> 3 Chappathy, Paneer Butter Masala x 1</Typography>
                            <Typography sx={{
                                fontSize: 13,
                                fontFamily: TERNARY_FONT,
                                color: '',
                                mt: 1
                            }}> Total Paid: 203</Typography>
                        </Grid>


                        <Grid container sx={{ mt: 1 }}>

                            <Typography sx={{
                                bgcolor: PRIMARY_BGCOLOUR,
                                fontFamily: TERNARY_FONT,
                                fontSize: { xs: 14, sm: 15, md: 15, lg: 15 },
                                py: 1, px: 3,
                                color: "#FFF"
                            }}>
                                Reorder
                            </Typography>


                            <Typography sx={{
                                // bgcolor: PRIMARY_BGCOLOUR,
                                fontFamily: TERNARY_FONT,
                                fontSize: { xs: 14, sm: 15, md: 15, lg: 15 },
                                py: 1, px: 4,
                                color: PRIMARY_BGCOLOUR,
                                ml: 2,
                                border: `1px solid ${PRIMARY_BGCOLOUR}`
                            }}>
                                Help
                            </Typography>
                        </Grid>
                    </Grid>


                )
            }








        </Grid >
    )


}