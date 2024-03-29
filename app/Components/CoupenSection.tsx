import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";

export default function CoupenSection(props: any) {

    const { showCoupenList, setShowCoupenList } = props


    return (
        <Grid container sx={{
            zIndex: 300, position: 'fixed', top: 0, left: 0,
            bgcolor: 'rgba(10, 0, 0, 0.4)',
            height: '100%',
            display: showCoupenList ? 'flex' : 'none'
        }}>


            <Grid
                container
                xs={1} sm={5} md={5} lg={8}
                sx={{ height: '100%' }}
                onClick={() => setShowCoupenList(!showCoupenList)}
            />

            <Grid container
                xs={11} sm={7} md={7} lg={4}
                className="animate__animated animate__fadeInRight"
                sx={{
                    bgcolor: "#FFF",
                    ml: 'auto',
                    height: "100%",
                    // bgcolor: { xs: 'red', sm: 'green', md: 'blue', lg: 'orange' }
                }}>


                <Grid sx={{
                    height: '8vh', bgcolor: ''
                }}>
                    <Box
                        onClick={() => setShowCoupenList(!showCoupenList)}
                        component='img'
                        src="/Assets/icons/closeicon.png"
                        sx={{
                            height: 20,
                            m: 2,
                            cursor: 'pointer'
                        }}
                    />

                </Grid>

                <Grid container sx={{ bgcolor: '', justifyContent: 'center', mt: 2 }} >
                    <Grid container>
                        <Grid container xs={8} sm={8} md={8} lg={8}
                            sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 },
                            }} >
                            <Box
                                // onClick={() => setShowCoupenList(!showCoupenList)}
                                component='img'
                                src="/Assets/icons/closeicon.png"
                                sx={{
                                    height: 20,
                                    m: 2,
                                    cursor: 'pointer'
                                }}
                            />
                            <input
                                // type="password"
                                style={{
                                    textIndent: "10px", color: SECONDARY_TEXTCOLOUR,
                                    border: `1px solid #E4E4E4`
                                }}
                                className="location_input_field"
                                placeholder="Enter coupon code"
                            />
                        </Grid>
                        <Grid container xs={4} sm={4} md={4} lg={4} sx={{ bgcolor: PRIMARY_BGCOLOUR, justifyContent: 'center', alignItems: 'center' }}>
                            <button className="login_sumbitBtn">
                                <Typography sx={{
                                    fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                    color: '#FFF', fontFamily: '', fontWeight: 'bold'
                                }}>APPLY</Typography>
                            </button>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container sx={{

                    height: "92vh",
                    bgcolor: '',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    mt: 5
                }}>
                    <Grid container justifyContent="center" bgcolor="" sx={{ mt: { xs: 0, lg: '' } }}>

                        <Grid container xs={11} sm={10} md={9} lg={9} sx={{ bgcolor: '', height: 'fit-content' }}>



                            <Grid container sx={{
                                py: 1,
                                mt: 3,
                                bgcolor: '',
                                border: `1px solid ${SECONDARY_TEXTCOLOUR}`,
                                justifyContent: 'center',
                            }}>

                                <Grid container xs={11} sm={11} md={11} lg={11}>
                                    <Typography sx={{
                                        fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                        fontWeight: 500,

                                    }}>
                                        Available Coupons
                                    </Typography>



                                    {
                                        [1, 2, 3, 4, 5, 6]?.map((data, index) =>



                                            <Grid container sx={{
                                                mt: 2, bgcolor: '',
                                                py: 2.5,
                                                borderBottom: '1px dashed #A5A5A5'

                                            }}>

                                                <Typography sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                                    bgcolor: SECONDARY_TEXTCOLOUR,
                                                    py: .5,
                                                    px: 1.5,
                                                    color: '#FFF'
                                                }}>
                                                    HSBCMANIA
                                                </Typography>

                                                <Typography sx={{
                                                    width: '95%',
                                                    fontWeight: 400,
                                                    fontSize: { xs: 16, sm: 18, md: 19, lg: 19 },
                                                    lineHeight: 1.3,
                                                    mt: 1.5
                                                }}>
                                                    Get 15% discount using HSBC Credit Cards
                                                </Typography>


                                                <Typography sx={{
                                                    width: '95%',
                                                    fontWeight: 400,
                                                    fontSize: { xs: 13, sm: 15, md: 18, lg: 15 },
                                                    lineHeight: 1.3,
                                                    mt: 1, color: SECONDARY_TEXTCOLOUR
                                                }}>
                                                    Flat 15% discount up to ₹150 using HSBC Credit Cards on orders above ₹499
                                                </Typography>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                    <Typography sx={{
                                                        fontSize: { xs: 15, sm: 15, md: 18, lg: 18 }, fontWeight: 500, color: PRIMARY_BGCOLOUR,

                                                    }}>
                                                        More
                                                    </Typography>

                                                    <Typography sx={{
                                                        fontSize: { xs: 15, sm: 15, md: 20, lg: 20 }, fontWeight: 500, color: PRIMARY_BGCOLOUR, ml: 1
                                                    }}>
                                                        +
                                                    </Typography>
                                                </Box>

                                                <Grid container>
                                                    <Typography sx={{
                                                        fontWeight: 400,
                                                        fontSize: { xs: 13, sm: 15, md: 18, lg: 15 },
                                                        mt: 1.3,
                                                        py: 1,
                                                        bgcolor: '', px: 2,
                                                        border: `1px solid ${PRIMARY_BGCOLOUR}`,
                                                        borderRadius: 1

                                                    }}>
                                                        Apply Coupon
                                                    </Typography>
                                                </Grid>



                                            </Grid>
                                        )
                                    }

                                </Grid>


                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>

                {/* <Grid container justifyContent="center" bgcolor="red" sx={{ mt: { xs: -50, lg: -20 } }}>

                    <Grid container xs={11} sm={10} md={9} lg={9} sx={{ bgcolor: '', height: 'fit-content' }}>

                        <Grid container>
                            <Grid container xs={8} sm={8} md={8} lg={8}
                                sx={{
                                    bgcolor: '',
                                    height: { xs: 40, sm: 40, md: 50, lg: 40 },
                                }} >
                                <input
                                    // type="password"
                                    style={{
                                        textIndent: "10px", color: SECONDARY_TEXTCOLOUR,
                                        border: `1px solid #E4E4E4`
                                    }}
                                    className="location_input_field"
                                    placeholder="Enter coupon code"
                                />
                            </Grid>
                            <Grid container xs={4} sm={4} md={4} lg={4} sx={{ bgcolor: PRIMARY_BGCOLOUR, justifyContent: 'center', alignItems: 'center' }}>
                                <button className="login_sumbitBtn">
                                    <Typography sx={{
                                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                        color: '#FFF', fontFamily: '', fontWeight: 'bold'
                                    }}>APPLY</Typography>
                                </button>
                            </Grid>
                        </Grid>

                        <Grid container sx={{
                            py: 1,
                            mt: 3,
                            bgcolor: '',
                            border: `1px solid ${SECONDARY_TEXTCOLOUR}`,
                            justifyContent: 'center',
                        }}>

                            <Grid container xs={11} sm={11} md={11} lg={11}>
                                <Typography sx={{
                                    fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                    fontWeight: 500,

                                }}>
                                    Available Coupons
                                </Typography>



                                {
                                    [1]?.map((data, index) =>



                                        <Grid container sx={{ mt: 2 }}>

                                            <Typography sx={{
                                                fontSize: { xs: 15, sm: 15, md: 18, lg: 18 },
                                                bgcolor: SECONDARY_TEXTCOLOUR,
                                                py: .5,
                                                px: 1.5,
                                                color: '#FFF'
                                            }}>
                                                HSBCMANIA
                                            </Typography>

                                            <Typography sx={{
                                                width: '95%',
                                                fontWeight: 400,
                                                fontSize: { xs: 16, sm: 18, md: 19, lg: 19 },
                                                lineHeight: 1.3,
                                                mt: 1.5
                                            }}>
                                                Get 15% discount using HSBC Credit Cards
                                            </Typography>


                                            <Typography sx={{
                                                width: '95%',
                                                fontWeight: 400,
                                                fontSize: { xs: 13, sm: 15, md: 18, lg: 15 },
                                                lineHeight: 1.3,
                                                mt: 1, color: SECONDARY_TEXTCOLOUR
                                            }}>
                                                Flat 15% discount up to ₹150 using HSBC Credit Cards on orders above ₹499
                                            </Typography>

                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                <Typography sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 18, lg: 18 }, fontWeight: 500, color: PRIMARY_BGCOLOUR,

                                                }}>
                                                    More
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 20, lg: 20 }, fontWeight: 500, color: PRIMARY_BGCOLOUR, ml: 1
                                                }}>
                                                    +
                                                </Typography>
                                            </Box>

                                            <Grid container>
                                                <Typography sx={{
                                                    fontWeight: 400,
                                                    fontSize: { xs: 13, sm: 15, md: 18, lg: 15 },
                                                    mt: 1.3,
                                                    py: 1,
                                                    bgcolor: '', px: 2,
                                                    border: `1px solid ${PRIMARY_BGCOLOUR}`,
                                                    borderRadius: 1

                                                }}>
                                                    Apply Coupon
                                                </Typography>
                                            </Grid>



                                        </Grid>
                                    )
                                }

                            </Grid>


                        </Grid>


                    </Grid>

                </Grid> */}


            </Grid>




        </Grid>
    )
}