import { PRIMARY_TEXTCOLOUR, SECONDARY_BGCOLOUR, SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Rating, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function RestaurantListing() {
    return (
        <Grid container justifyContent="center" alignItems="center" bgcolor="" sx={{ py: { xs: 2, sm: 2, md: 6, lg: 6 } }}>

            <Grid container xs={11} sm={11} md={10} lg={10} >
                <Typography sx={{
                    fontSize: { xs: 24, sm: 18, md: 24, lg: 24 },
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: SECONDARY_FONT
                }}>Choose From Most Popular</Typography>

                <Typography sx={{
                    fontSize: { md: 14, lg: 17.5 },
                    color: SECONDARY_TEXTCOLOUR,
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: TERNARY_FONT,

                }}>Cum doctus civibus efficiantur in imperdiet deterruisset.</Typography>



                <Grid container sx={{ mt: 4, justifyContent: 'space-between' }}>

                    {
                        [1, 2, 3]?.map((data) =>

                            <Grid container xs={11} sm={5.5} md={3.8} lg={3.8} sx={{
                                bgcolor: '',
                                mt: { xs: 2, sm: 1, md: 0, lg: 0 },
                                boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                                py: 1,

                            }}>
                                <Grid container display="flex">

                                    <Typography sx={{
                                        bgcolor: 'red',
                                        color: '#FFF', height: 'fit-content',
                                        fontSize: 10, my: 1, ml: 1,
                                        py: .5,
                                        px: 1.5,
                                        borderRadius: 20
                                    }}>STATUS</Typography>


                                </Grid>

                                <Grid container>

                                    <Grid container xs={4} sm={4} md={4} lg={4} sx={{
                                        bgcolor: " ",
                                        justifyContent: { xs: "center", sm: 'end', md: 'end', lg: 'end' }
                                    }}>

                                        <Box
                                            component='img'
                                            src="/Assets/fb-restaurant-08-1-1.jpg"
                                            sx={{
                                                height: 85,
                                                width: 85
                                            }}
                                        />


                                    </Grid>

                                    <Grid container xs={7.5} sm={7.5} md={7.5} lg={7.5} sx={{ bgcolor: "", ml: 'auto' }} >
                                        <Grid>
                                            <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>

                                                <Rating name="half-rating" defaultValue={4.5} precision={0.5} sx={{ fontSize: 17 }} />

                                                <FavoriteBorderIcon sx={{
                                                    fontSize: 17,
                                                    color: SECONDARY_TEXTCOLOUR,
                                                    cursor: 'pointer',
                                                    mr: 2
                                                }} />

                                            </Grid>

                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                fontFamily: SECONDARY_FONT
                                            }}>KFC – Kentucky</Typography>

                                            <Typography sx={{
                                                fontSize: 13,
                                                color: PRIMARY_TEXTCOLOUR,
                                                fontFamily: TERNARY_FONT

                                            }}>Type of food : Cheese Burger, IceCream, Potato Fries</Typography>

                                            <Box sx={{
                                                display: "flex",
                                                my: 1,
                                                alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    height: 20, width: 20, bgcolor: SECONDARY_TEXTCOLOUR, borderRadius: '50%',
                                                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                                                }}>
                                                    <PedalBikeIcon sx={{
                                                        fontSize: 14,
                                                        color: '#FFF'
                                                    }} />
                                                </Box>

                                                <Box sx={{
                                                    height: 20, width: 20, bgcolor: SECONDARY_TEXTCOLOUR, borderRadius: '50%',
                                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                                    ml: 1
                                                }}>
                                                    <AccessTimeIcon sx={{
                                                        fontSize: 14,
                                                        color: '#FFF'
                                                    }} />
                                                </Box>

                                                <Typography sx={{
                                                    fontSize: 13,
                                                    color: PRIMARY_TEXTCOLOUR,
                                                    fontFamily: TERNARY_FONT,
                                                    ml: 1,
                                                }}>Oslo, Norway</Typography>
                                            </Box>

                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        )
                    }





                </Grid>
            </Grid>
        </Grid>

    )
}