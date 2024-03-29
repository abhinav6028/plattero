"use client"
import { BODY_BG, PRIMARY_BGCOLOUR, SECONDARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_BGCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import CartCounter from "../Components/CartCounter";
import BillDetails from "../Components/BillDetails";
import ChangeLocation from "../Components/ChangeLocation";
import { useState } from "react";
import CoupenSection from "../Components/CoupenSection";

export default function Home() {

    const [showChangeLocation, setChangeShowLocation] = useState(false)
    const [showCoupenList, setShowCoupenList] = useState(false)

    // console.log("showChangeLocation", showChangeLocation);


    return (
        <Grid container sx={{
            bgcolor: BODY_BG, justifyContent: 'center',
            mt: { xs: 20 }
        }}>

            {/* <LocationHandler showChangeLocation={showChangeLocation} setChangeShowLocation={setChangeShowLocation} /> */}


            <Grid container xs={11} sm={11} md={11} lg={10} sx={{ bgcolor: BODY_BG, justifyContent: "space-between" }}>

                <ChangeLocation showChangeLocation={showChangeLocation} setChangeShowLocation={setChangeShowLocation} />

                <CoupenSection showCoupenList={showCoupenList} setShowCoupenList={setShowCoupenList} />


                <Grid container md={7.3} lg={7.3} sx={{
                    bgcolor: BODY_BG, justifyContent: 'center', height: 'fit-content',
                }}>

                    <Grid container bgcolor='' sx={{
                        py: { xs: 2, sm: 3, md: 4, lg: 4 },
                        // boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        borderRadius: 1,
                        border: `1px solid #E4E4E4`,
                        bgcolor: '#FFF', justifyContent: 'center',
                    }}>

                        <Grid container xs={11} sm={11} md={11} lg={11.5} sx={{
                            justifyContent: { xs: 'center', sm: 'start', md: '', lg: '' }, bgcolor: '', ml: 1
                            // boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        }}>

                            <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 16, sm: 20, md: 20, lg: 23 }, fontWeight: 500, width: '100%', ml: 2 }}>Choose  a delivery address </Typography>
                            <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 13, sm: 15, md: 18, lg: 18 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, ml: 2, width: '100%' }}>Multiple addresses in this location </Typography>


                            <Grid container bgcolor="" sx={{
                                justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                            }}>
                                {
                                    [1, 2]?.map(() =>
                                        <Grid container xs={11} sm={6} md={6} lg={6} bgcolor="" sx={{ my: 3, justifyContent: 'center' }} >

                                            <Grid container xs={11.5} sm={11} md={11} lg={11} bgcolor="" sx={{
                                                py: 2,
                                                borderRadius: 2,
                                                // boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                                border: `1px solid #E4E4E4`
                                            }}>

                                                <Box sx={{ display: 'flex', bgcolor: '', width: '100%' }}>
                                                    <Box
                                                        component="img"
                                                        src="/Assets/icons/home.png"
                                                        sx={{
                                                            width: 28,
                                                            height: 23,
                                                            ml: 1
                                                        }}
                                                    />

                                                    <Box sx={{ bgcolor: '', height: 'fit-content', width: '100%', }}>

                                                        <Box display='flex'>
                                                            <Typography sx={{
                                                                fontFamily: TERNARY_FONT, fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                                                fontWeight: 500, ml: 1.5
                                                            }}>Home</Typography>

                                                            <Box >
                                                                <Typography sx={{
                                                                    fontSize: { lg: 13 },
                                                                    ml: 2.5,
                                                                    // bgcolor: SECONDARY_BGCOLOUR,
                                                                    background: ' linear-gradient(82deg, rgba(7,0,145,1) 0%, rgba(0,249,96,1) 0%, rgba(255,255,255,0) 100%, rgba(0,129,255,1) 100%, rgba(255,255,255,0) 100%)',
                                                                    py: .5, px: 2, color: '#FFF', fontFamily: TERNARY_FONT,

                                                                }}>Deliver Here</Typography>

                                                            </Box>

                                                        </Box>


                                                        <Grid container>

                                                            <Typography sx={{
                                                                fontSize: { lg: 13 },
                                                                ml: 1.5, mt: 1,
                                                                fontFamily: TERNARY_FONT,
                                                                color: SECONDARY_TEXTCOLOUR,
                                                                width: "90%"
                                                            }}>
                                                                Greenland Flat Number 99, Nattika,
                                                                Vypin, Ernakulam, Kochi, Kerala,
                                                                India</Typography>

                                                        </Grid>

                                                        <Grid container>

                                                            <Typography sx={{
                                                                fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                                                ml: 1.5, my: 1,
                                                                fontFamily: TERNARY_FONT,

                                                            }}>
                                                                40 MINS
                                                            </Typography>

                                                        </Grid>

                                                    </Box>

                                                </Box>
                                            </Grid>
                                        </Grid>
                                    )
                                }

                                <Grid container xs={10} sm={6} md={6} lg={6} bgcolor="" sx={{ justifyContent: 'center' }} >

                                    <Grid container xs={11.5} sm={11} md={11} lg={11} bgcolor="" sx={{
                                        py: 2,
                                        borderRadius: 2,
                                        border: `1px solid #E4E4E4`
                                    }}>

                                        <Box sx={{ display: 'flex', bgcolor: '', width: '100%' }}>
                                            <Box
                                                component="img"
                                                src="/Assets/icons/home.png"
                                                sx={{
                                                    width: 28,
                                                    height: 23,
                                                    ml: 1
                                                }}
                                            />

                                            <Box sx={{ bgcolor: '', height: 'fit-content', width: '100%', }}>

                                                <Box display='flex'>
                                                    <Typography sx={{
                                                        fontFamily: TERNARY_FONT, fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                                        fontWeight: 500, ml: 1.5
                                                    }}>Home</Typography>

                                                    <Box >
                                                        <Typography sx={{
                                                            fontSize: { lg: 13 },
                                                            ml: 2.5,
                                                            background: ' linear-gradient(82deg, rgba(7,0,145,1) 0%, rgba(0,249,96,1) 0%, rgba(255,255,255,0) 100%, rgba(0,129,255,1) 100%, rgba(255,255,255,0) 100%)',

                                                            py: .5, px: 2, color: '#FFF', fontFamily: TERNARY_FONT
                                                        }}>Deliver Here</Typography>

                                                    </Box>

                                                </Box>


                                                <Grid container>

                                                    <Typography sx={{
                                                        fontSize: { lg: 13 },
                                                        ml: 1.5, mt: 1,
                                                        fontFamily: TERNARY_FONT,
                                                        color: SECONDARY_TEXTCOLOUR
                                                    }}>
                                                        Greenland Flat Number 99, Nattika,
                                                        Vypin,</Typography>

                                                </Grid>

                                                <Typography
                                                    onClick={() => setChangeShowLocation(!showChangeLocation)}
                                                    sx={{
                                                        fontSize: { lg: 13 },
                                                        ml: 1.5, my: 1.5,
                                                        py: 1, px: 2.5,
                                                        bgcolor: '', width: 'fit-content',
                                                        borderRadius: 1,
                                                        border: `1px solid ${PRIMARY_BGCOLOUR}`, color: PRIMARY_BGCOLOUR, cursor: 'pointer'
                                                    }}> Add New </Typography>

                                            </Box>

                                        </Box>
                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>


                    </Grid>




                    <Grid container sx={{
                        bgcolor: '#FFF', alignItems: 'center', justifyContent: 'space-between',
                        my: { xs: 4, sm: 3, md: 0, lg: 0 },
                        mt: { xs: 4, sm: 0, md: 4, lg: 10 },
                        py: { xs: 3, sm: 4, md: 4, lg: 4 },
                        borderRadius: 3,
                        // boxShadow: " rgba(0, 0, 0.24, 0.24) 0px 3px 8px",
                        border: `1px solid #E4E4E4`,


                    }}>

                        <Typography sx={{
                            fontFamily: TERNARY_FONT, fontSize: { xs: 13, sm: 20, md: 20, lg: 23 },
                            fontWeight: 600, ml: 2
                        }}>Choose Payment Method </Typography>

                        <Typography sx={{
                            fontFamily: TERNARY_FONT,
                            fontSize: { xs: 11, sm: 12, md: 13, lg: 16 },
                            fontWeight: 600,
                            bgcolor: SECONDARY_BGCOLOUR,
                            py: { xs: .5, sm: 1, md: 1, lg: 1 },
                            px: { xs: 1, sm: 2, md: 2, lg: 2 },
                            color: '#FFF',
                            mr: 2, cursor: 'pointer'
                        }}>
                            PROCEED TO PAY
                        </Typography>


                    </Grid>

                </Grid>


                <Grid container md={4.5} lg={4} bgcolor="#FFF" sx={{
                    justifyContent: 'center', height: 'fit-content', mb: { xs: 3, sm: 3, md: 8, lg: 10 },
                    py: 2,
                    borderRadius: 3, boxShadow: "",
                    border: `1px solid #E4E4E4`

                }}>

                    <Grid container xs={11} md={11} lg={11} sx={{ bgcolor: '#FFF', }}>

                        <Grid container sx={{ display: 'flex', py: 2, borderBottom: `1px solid #D9D9D9` }}>

                            <Box
                                component="img"
                                src="/Assets/fb-restaurant-08-1-1.jpg"
                                sx={{
                                    width: 60,
                                    height: 55, borderRadius: 2
                                }}
                            />

                            <Box sx={{ ml: 1.5 }}>

                                <Typography sx={{
                                    fontFamily: TERNARY_FONT, fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                    fontWeight: 500,
                                }}>
                                    McDonald's
                                </Typography>

                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: { lg: 13 },
                                    color: SECONDARY_TEXTCOLOUR,
                                    fontFamily: TERNARY_FONT,

                                }}>
                                    Edapally
                                </Typography>


                            </Box>
                        </Grid>

                    </Grid>

                    {

                        [1, 2, 3, 4, 5]?.map((data, index) =>

                            <Grid container xs={11} sm={11} md={11} lg={11} sx={{
                                my: 2, bgcolor: '', alignItems: 'center',
                                mt: index > 0 ? 0 : 3

                            }} >

                                <Grid container xs={6} sm={6} md={6} lg={6} bgcolor="" flexDirection="row">

                                    <Grid
                                        container
                                        xs={2.5} sm={2.5} md={2.5} lg={2.5}
                                        component='img'
                                        src='/Assets/fb-restaurant-08-1-1.jpg'
                                        sx={{
                                            borderRadius: '50%',
                                            height: 40,
                                            width: 50,
                                            bgcolor: 'green'
                                        }}
                                    />

                                    <Grid container xs={9.5} sm={9.5} md={9.5} lg={9.5}>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: { xs: 12, sm: 12, md: 13, lg: 13 },
                                            color: SECONDARY_TEXTCOLOUR,
                                            fontFamily: TERNARY_FONT,
                                            ml: 1
                                        }}>
                                            McSpicy Chicken Burger
                                        </Typography>
                                    </Grid>

                                    {/* <Grid>
                                        
                                    </Grid> */}


                                </Grid>

                                <Grid container bgcolor="" xs={4} sm={4} md={4} lg={4}>
                                    <CartCounter xs={11} lg={10} />
                                </Grid>
                                <Grid container xs={2} sm={2} md={2} lg={2} sx={{
                                    justifyContent: 'end'
                                }}>
                                    <Typography sx={{
                                        fontWeight: 500,
                                        fontSize: { xs: 12, sm: 12, md: 13, lg: 13 },

                                        fontFamily: TERNARY_FONT,
                                    }}>
                                        ₹ 208.57
                                    </Typography>
                                </Grid>
                            </Grid>

                        )
                    }

                    <Grid xs={11} sm={11} md={11} lg={11} container bgcolor="" alignItems="center"
                        onClick={() => setShowCoupenList(!showCoupenList)}
                        sx={{
                            my: 3,
                            py: 2,
                            borderRadius: 3,
                            border: `1px solid ${SECONDARY_TEXTCOLOUR}`,
                            borderStyle: 'dashed', cursor: 'pointer'
                        }}>

                        <Box
                            component='img'
                            src='/Assets/icons/coupen.png'
                            sx={{
                                height: 36,
                                width: 36,
                                ml: 2
                            }}
                        />

                        <Typography sx={{
                            ml: 2,
                            fontFamily: TERNARY_FONT,
                            fontWeight: 600,
                            fontSize: 17
                        }}>APPLY COUPON</Typography>


                    </Grid>




                    <Grid container xs={11} sm={11} md={10} lg={10} bgcolor="">

                        <BillDetails />

                    </Grid>

                </Grid>



            </Grid>
        </Grid >
    )
}