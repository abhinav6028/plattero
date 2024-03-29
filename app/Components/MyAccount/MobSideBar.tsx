import { Box, Grid, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { BODY_BG, TERNARY_FONT } from "@/utils";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";


export default function MobSideBar(props: any) {

    const { sideBarData, clickedItem, setClickedItem, showSideBar, setShowSideBar } = props;

    // console.log("sideBarData", sideBarData);

    console.log("clickedItem");



    return (
        <Grid container sx={{
            zIndex: 300, position: 'fixed', top: 0, left: 0,
            bgcolor: 'rgba(10, 0, 0, 0.4)',
            height: '100%',
            display: showSideBar ? 'flex' : 'none'
        }}>

            <Grid container
                xs={11} sm={7} md={7} lg={4}
                className="animate__animated animate__fadeInLeft"
                sx={{ bgcolor: "#FFF", ml: 'auto', height: "100%", justifyContent: 'center' }}>




                <Grid container sx={{ justifyContent: 'end', bgcolor: BODY_BG, height: 'fit-content' }}>
                    <Box
                        onClick={() => setShowSideBar(!showSideBar)}
                        component='img'
                        src="/Assets/icons/closeicon.png"
                        sx={{
                            height: 20,
                            cursor: 'pointer',

                            m: 2
                        }}
                    />


                    <Grid container sx={{ mt: 5, justifyContent: 'end' }}>
                        {
                            sideBarData?.map((Item: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) =>

                                <Grid key={index} container lg={10.5}
                                    onClick={() => { setClickedItem(index).the(() => setShowSideBar(!showSideBar)) }}
                                    sx={{
                                        py: 1, alignItems: 'center',
                                        mt: 1,
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
                </Grid>









            </Grid>




            <Grid
                container
                xs={1} sm={5} md={5} lg={8}
                sx={{ height: '100%' }}
            // onClick={() => setShowOrderPopUp(!showOrderPopUp)}
            />


        </Grid>
    )
}

