"use client"
import { SECONDARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { useState } from "react";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';


export default function HeaderDropDown(props: { dropItems: any; title: any; type: any; }) {

    const { dropItems, title, type } = props

    const [dropChange, setDropChange] = useState(false)

    // console.log("dropChange", dropChange);

    return (
        <Grid container xs={10} sm={10} md={6} lg={6} alignItems='center' bgcolor="" sx={{
            cursor: 'pointer',
            position: '',
            my: { xs: 1, sm: 1, md: 0, lg: 0 }

        }}>
            <Popup trigger={

                <Grid container
                    justifyContent="space-evenly" alignItems='center' bgcolor="" mx={1}

                >
                    <Box sx={{
                        height: { xs: 20, sm: 18, md: 16, lg: 18 },
                        width: { xs: 20, sm: 18, md: 16, lg: 18 },
                        bgcolor: SECONDARY_TEXTCOLOUR, borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        cursor: 'pointer'
                    }}>

                        {
                            type == "dishes" ? <StarPurple500SharpIcon sx={{ fontSize: { xs: 16, sm: 15, md: 12, lg: 12 }, color: '#FFF' }} /> : <LocationOnSharpIcon sx={{ fontSize: { xs: 15, sm: 16, md: 12, lg: 12 }, color: '#FFF' }} />
                        }

                    </Box>


                    <Typography sx={{
                        fontSize: { md: 11, lg: 14 },
                        fontWeight: 700, mt: .2,
                        color: SECONDARY_TEXTCOLOUR
                    }}>{title}</Typography>

                    {dropChange ? <ArrowDropUpSharpIcon sx={{ color: SECONDARY_TEXTCOLOUR }} /> : < ArrowDropDownSharpIcon sx={{ color: SECONDARY_TEXTCOLOUR }} />}
                </Grid>
            }
                position="bottom center"
                onOpen={() => setDropChange(!dropChange)}
                onClose={() => setDropChange(!dropChange)}
            >
                <Grid container>
                    {
                        dropItems?.map((data: any, index: number) =>

                            <Grid container sx={{
                                alignItems: 'center',
                                mt: index > 0 ? 2 : 3,

                            }}>

                                <Box
                                    component="img"
                                    src='/Assets/food-icon-05-1-1.png'
                                    sx={{
                                        height: 25, width: 25,
                                        ml: 2
                                    }}
                                />

                                <Typography sx={{
                                    ml: 1.5,
                                    fontSize: 15,
                                    fontWeight: 'bold'
                                }}>ITEM NAME </Typography>
                            </Grid>

                        )
                    }

                </Grid>
            </Popup>

        </Grid>
    )
}