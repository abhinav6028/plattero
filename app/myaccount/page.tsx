"use client"
import { BODY_BG, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonalInformation from "../Components/MyAccount/PersonalInformation";
import MyOrders from "../Components/MyAccount/MyOrders";
import Favorites from "../Components/MyAccount/Favorites";
import Addresses from "../Components/MyAccount/Addresses";
import Passwords from "../Components/MyAccount/Passwords";
import Payments from "../Components/MyAccount/Payments";
import Logout from "../Components/MyAccount/Logout";
import { useState } from "react";
import MobSideBar from "../Components/MyAccount/MobSideBar";

export default function Home() {

    const [showSideBar, setShowSideBar] = useState(false)

    const sideBarData = [

        {
            Icon: '',
            text: 'Personal Information',
            LoadingComponenet: PersonalInformation
        },
        {
            Icon: '',
            text: 'My Orders',
            LoadingComponenet: MyOrders
        },
        {
            Icon: '',
            text: 'Favorites',
            LoadingComponenet: Favorites
        },
        {
            Icon: '',
            text: 'Addresses',
            LoadingComponenet: Addresses
        },
        {
            Icon: '',
            text: 'Payments',
            LoadingComponenet: Payments
        },
        {
            Icon: '',
            text: 'Passwords',
            LoadingComponenet: Passwords
        },
        {
            Icon: '',
            text: 'Logout',
            LoadingComponenet: Logout
        },

    ]

    const [clickedItem, setClickedItem] = useState(0)

    const Loading = sideBarData?.filter((data, index) => index == clickedItem)[0]?.LoadingComponenet



    return (
        <Grid container sx={{
            bgcolor: BODY_BG,
            mt: 8,
            justifyContent: 'center'
        }}>

            <MobSideBar
                sideBarData={sideBarData}
                clickedItem={clickedItem}
                setClickedItem={setClickedItem}
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
            />

            <Grid container sx={{ justifyContent: 'center' }}>

                <Grid container sx={{
                    mt: 10
                }}>
                    <Typography sx={{
                        fontSize: { lg: 30 },
                        fontFamily: TERNARY_FONT,
                        fontWeight: 600,
                        width: '100%', textAlign: 'center'
                    }}>My Account</Typography>

                    <Typography sx={{
                        fontSize: 16,
                        fontFamily: TERNARY_FONT,
                        width: '100%', textAlign: 'center'
                    }}>
                        Home / My Account
                    </Typography>

                </Grid>

                <Grid container lg={11} sx={{
                    bgcolor: '#FFF  ',
                    mt: 3,
                    justifyContent: 'space-evenly',
                    py: 4,

                }}>

                    <Grid container lg={3} sx={{
                        bgcolor: BODY_BG, justifyContent: 'end', py: 3, height: 'fit-content',
                        display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }

                    }}>

                        {
                            sideBarData?.map((Item, index) =>

                                <Grid key={index} container lg={10.5}
                                    onClick={() => setClickedItem(index)}
                                    sx={{
                                        py: 1, alignItems: 'center',
                                        mt: index > 0 ? 2 : 0,
                                        bgcolor: clickedItem == index ? '#FFF' : '',
                                        cursor: 'pointer'
                                        // bgcolor: 'red'
                                    }}>

                                    <PersonOutlineOutlinedIcon sx={{
                                        bgcolor: '#404040',
                                        p: .7,
                                        borderRadius: '50% ',
                                        color: '#FFF',
                                        ml: 1.5,
                                    }} />

                                    <Typography sx={{
                                        ml: 1,
                                        fontSize: { xs: 14, sm: 20, md: 15, lg: 17 },
                                        fontWeight: 500,
                                        fontFamily: TERNARY_FONT,
                                    }}>
                                        {Item.text}
                                    </Typography>

                                    {/* <Item.LoadingComponenet /> */}

                                </Grid>

                            )
                        }




                    </Grid>


                    <Grid container sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, justifyContent: 'center' }}>
                        <Grid container
                            onClick={() => setShowSideBar(!showSideBar)}
                            xs={9} sx={{ bgcolor: SECONDARY_TEXTCOLOUR, mb: 3, justifyContent: 'center', borderRadius: 20 }}>
                            <Typography sx={{
                                fontSize: { xs: 20, sm: 20 },
                                fontFamily: TERNARY_FONT,
                                fontWeight: 600,
                                py: 1.5,

                            }}>View Menu</Typography>
                        </Grid>
                    </Grid>


                    <Grid container lg={8} sx={{ bgcolor: '#FFF' }}>

                        <Loading />
                        {/* <clickedItem /> */}

                    </Grid>

                </Grid>

            </Grid>




        </Grid>
    )
}