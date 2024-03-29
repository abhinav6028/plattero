import { PRIMARY_BGCOLOUR, SECONDARY_BGCOLOUR, SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

export default function Footer() {

    const Popular_Cities = [
        { name: 'Aarhus', url: '' },
        { name: 'Abu Dhabi', url: '' },
        { name: 'Estonia', url: '' },
        { name: 'France', url: '' },
        { name: 'Germany', url: '' },
        { name: 'Itlay', url: '' }
    ]

    const Popular_Cuisines = [
        { name: 'Apple Juice', url: '' },
        { name: 'BB.Q', url: '' },
        { name: 'Beef Roast', url: '' },
        { name: 'Cheese Burger', url: '' },
        { name: 'Cold Coffee', url: '' },
        { name: 'Pizza', url: '' }
    ]

    const Menus = [
        { name: 'Blog Large', url: '' },
        { name: 'Blog Medium', url: '' },
        { name: 'Blog Masonry', url: '' },
        { name: 'Cheese Burger', url: '' },
        { name: 'Cold Coffee', url: '' },
        { name: 'Pizza', url: '' }
    ]
    return (
        <Grid container justifyContent="center" alignItems="center"
            bgcolor="#000"
            sx={{
                py: 7,
                // bgcolor: { xs: 'green', sm: 'blue', md: 'orange', lg: 'red' },
            }}>

            <Grid container xs={11} sm={11} md={10.5} lg={10.5} justifyContent="center" alignItems="center" bgcolor="" sx={{}}>


                <Typography sx={{
                    fontSize: { xs: 24, sm: 18, md: 24, lg: 24 },
                    fontWeight: 550,
                    color: SECONDARY_TEXTCOLOUR
                }}>SUBSCRIBE TO OUR NEWSLETTER</Typography>

                <Grid container sx={{
                    alignItems: 'center',
                    mt: { xs: 2, sm: 3, md: 3, lg: 3 }
                }}>

                    <Grid container lg={.5} sx={{
                        height: 1.5,
                        bgcolor: PRIMARY_BGCOLOUR,
                        borderRadius: 20,

                    }}></Grid>

                    <Grid container lg={11.5} sx={{
                        height: "1px",
                        bgcolor: PRIMARY_BGCOLOUR
                    }}></Grid>

                </Grid>

                <Grid container md={9} lg={7} justifyContent="space-evenly" bgcolor="" sx={{
                    my: { xs: 2, sm: 3, md: 4, lg: 4 }
                }}>

                    <Grid container sm={8} md={8} lg={8} bgcolor="green" sx={{
                        height: 45,
                    }}>
                        <input
                            type="text"
                            placeholder="ENTER YOUR EMAIL ADRESS..."
                            className="footer_input"
                        />
                    </Grid>


                    <Grid container sm={2.5} md={2.5} lg={2.5} bgcolor="" sx={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: PRIMARY_BGCOLOUR,
                        mt: { xs: 2, sm: 0, md: 0, lg: 0 }
                    }}>
                        <Typography sx={{
                            color: '#FFF',
                            fontWeight: 'bold',
                        }}>

                            SIGN UP

                        </Typography>
                    </Grid>

                </Grid>

                <Grid
                    container
                    sx={{
                        height: 1.5,
                        bgcolor: SECONDARY_TEXTCOLOUR,
                        mt: 4
                    }}
                />




                <Grid container bgcolor="" sx={{ justifyContent: 'space-between', mt: 5 }}>



                    <Grid container xs={10} sm={10} md={2.3} lg={2.3} bgcolor="">


                        <Typography sx={{
                            fontSize: { xs: 23, sm: 15, md: 15, lg: 16 },
                            fontWeight: "bold",
                            color: SECONDARY_TEXTCOLOUR,
                            fontFamily: SECONDARY_FONT
                        }}>About FoodBakery</Typography>


                        <Typography bgcolor="" sx={{
                            color: SECONDARY_TEXTCOLOUR,
                            fontSize: 14,
                            // my: 2,
                            width: "90%",
                            fontFamily: TERNARY_FONT

                        }}>
                            FoodBakery Theme System Is Set Up To Better Satisfy
                            The Needs Of Waiting Customers And Help Restaurants More
                            Efficiently Manage Wait Lists And Reservations.
                        </Typography>

                        <Grid container>
                            {
                                [1, 2, 3, 4]?.map((data, index) =>
                                    <Box sx={{
                                        height: 20, width: 20, bgcolor: SECONDARY_BGCOLOUR, borderRadius: '50%',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        ml: index > 0 ? 1 : 0,
                                        cursor: 'pointer'
                                    }}>
                                        <CheckIcon sx={{
                                            fontSize: 12,
                                            color: '#FFF'
                                        }} />
                                    </Box>
                                )
                            }

                        </Grid>

                    </Grid>

                    <Grid container xs={10} sm={10} md={2.3} lg={2.3} bgcolor="">

                        <Typography sx={{
                            fontSize: { xs: 23, sm: 15, md: 15, lg: 16 },
                            fontWeight: "bold",
                            color: SECONDARY_TEXTCOLOUR,
                            fontFamily: SECONDARY_FONT,
                            mt: { xs: 2, sm: 2, md: 0, lg: 0 },
                        }}>Popular Cities</Typography>

                        <Grid container sx={{
                            my: 2,
                            bgcolor: '',
                            alignItems: "baseline"
                        }}>

                            <Grid>
                                {
                                    Popular_Cities?.map(data =>
                                        <Typography sx={{
                                            color: SECONDARY_TEXTCOLOUR,
                                            fontSize: 15,
                                            width: "90%",
                                            my: .3, fontFamily: TERNARY_FONT,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: PRIMARY_BGCOLOUR,
                                            },
                                        }}>
                                            {data?.name}
                                        </Typography>
                                    )
                                }
                            </Grid>



                        </Grid>

                    </Grid>

                    <Grid container xs={10} sm={10} md={2.3} lg={2.3} bgcolor="">

                        <Typography sx={{
                            fontSize: { xs: 23, sm: 15, md: 15, lg: 16 },
                            fontWeight: 'bold',
                            color: SECONDARY_TEXTCOLOUR,
                            mt: { xs: 2, sm: 2, md: 0, lg: 0 }, fontFamily: SECONDARY_FONT
                        }}>Popular Cuisines</Typography>

                        <Grid container sx={{ my: 2 }}>

                            {
                                Popular_Cuisines?.map(data =>
                                    <Typography sx={{
                                        color: SECONDARY_TEXTCOLOUR,
                                        fontSize: 15,
                                        width: "90%",
                                        my: .3,
                                        cursor: 'pointer',
                                        fontFamily: TERNARY_FONT,
                                        '&:hover': {
                                            color: PRIMARY_BGCOLOUR,
                                        },
                                    }}>
                                        {data?.name}
                                    </Typography>
                                )
                            }


                        </Grid>



                    </Grid>

                    <Grid container xs={10} sm={10} md={2} lg={2} bgcolor="">

                        <Typography sx={{
                            fontSize: { xs: 23, sm: 15, md: 15, lg: 16 },
                            fontWeight: 'bold',
                            color: SECONDARY_TEXTCOLOUR,
                            mt: { xs: 2, sm: 2, md: 0, lg: 0 }, fontFamily: SECONDARY_FONT
                        }}>Menus</Typography>

                        <Grid container sx={{ my: 2 }}>
                            {
                                Popular_Cuisines?.map(data =>

                                    <Grid container sx={{
                                        my: .3,
                                        display: 'flex'
                                    }}>

                                        <ChevronRightSharpIcon sx={{
                                            color: SECONDARY_TEXTCOLOUR,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: PRIMARY_BGCOLOUR,
                                            },
                                        }} />

                                        <Typography sx={{
                                            color: SECONDARY_TEXTCOLOUR,
                                            fontSize: 15,
                                            ml: 1,
                                            cursor: 'pointer', fontFamily: TERNARY_FONT,
                                            '&:hover': {
                                                color: PRIMARY_BGCOLOUR,
                                            },
                                        }}>
                                            {data?.name}
                                        </Typography>

                                    </Grid>

                                )
                            }


                        </Grid>



                    </Grid>

                    <Grid container xs={10} sm={10} md={2.6} lg={2.6} bgcolor="">

                        <Typography sx={{
                            fontSize: { xs: 23, sm: 15, md: 15, lg: 16 },
                            fontWeight: 550,
                            color: SECONDARY_TEXTCOLOUR,
                            mt: { xs: 2, sm: 2, md: 0, lg: 0 }, fontFamily: SECONDARY_FONT
                        }}>Connect</Typography>

                        <Grid container bgcolor="" sx={{ my: 2, height: 'fit-content', }}>


                            <Grid container sx={{
                                my: .3,
                                display: 'flex',
                                alignItems: 'center'
                            }}>

                                <Box sx={{
                                    bgcolor: PRIMARY_BGCOLOUR,
                                    height: 'fit-content',
                                    p: .7, borderRadius: 2
                                }}>
                                    <CallSharpIcon sx={{
                                        color: SECONDARY_TEXTCOLOUR,
                                        cursor: 'pointer',

                                    }} />
                                </Box>


                                <Typography sx={{
                                    color: SECONDARY_TEXTCOLOUR,
                                    fontSize: { xs: 15, sm: 15, md: 13, lg: 13 },
                                    ml: 2,
                                    cursor: 'pointer', fontFamily: TERNARY_FONT,
                                    '&:hover': {
                                        color: PRIMARY_BGCOLOUR,
                                    },
                                }}>
                                    +1 123 456 7892
                                </Typography>

                            </Grid>


                            <Grid container sx={{
                                my: 1,
                                display: 'flex',
                                alignItems: 'center'
                            }}>

                                <Box sx={{
                                    bgcolor: PRIMARY_BGCOLOUR,
                                    height: 'fit-content',
                                    p: .7, borderRadius: 2
                                }}>
                                    <MailOutlineSharpIcon sx={{
                                        color: SECONDARY_TEXTCOLOUR,
                                        cursor: 'pointer',

                                    }} />
                                </Box>


                                <Typography sx={{
                                    color: SECONDARY_TEXTCOLOUR,
                                    fontSize: { xs: 15, sm: 15, md: 13, lg: 13 },
                                    ml: 2,
                                    cursor: 'pointer', fontFamily: TERNARY_FONT,
                                    '&:hover': {
                                        color: PRIMARY_BGCOLOUR,
                                    },
                                }}>
                                    support@chimpstudio.com
                                </Typography>

                            </Grid>

                            <Grid container sx={{
                                my: 1,
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%',
                                bgcolor: ''
                            }}>

                                <Box display="flex" alignItems="">

                                    <Box sx={{
                                        bgcolor: PRIMARY_BGCOLOUR,
                                        height: 'fit-content',
                                        p: .7, borderRadius: 2,

                                    }}>
                                        <LocationOnSharpIcon sx={{
                                            color: SECONDARY_TEXTCOLOUR,
                                            cursor: 'pointer',

                                        }} />
                                    </Box>


                                    <Box>
                                        <Typography sx={{
                                            color: SECONDARY_TEXTCOLOUR,
                                            fontSize: { xs: 15, sm: 15, md: 13, lg: 13 },

                                            ml: 2,
                                            cursor: 'pointer', fontFamily: TERNARY_FONT,
                                            '&:hover': {
                                                color: PRIMARY_BGCOLOUR,
                                            },
                                        }}>
                                            33 - B, 2nd Floor, Saint Jhon Doe Appartments,
                                            Sussex, UK.26AL565C.
                                        </Typography>
                                    </Box>
                                </Box>




                            </Grid>























                        </Grid>



                    </Grid>

                </Grid>

            </Grid>

        </Grid >
    )
}