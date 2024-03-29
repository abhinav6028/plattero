import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";

// ChangeLocation

interface ChangeLocationProps {
    showChangeLocation: boolean;
    setChangeShowLocation: React.Dispatch<React.SetStateAction<boolean>>;
}

// export default function ChangeLocation({ showChangeLocation, setChangeShowLocation }) {
const ChangeLocation: React.FC<ChangeLocationProps> = ({ showChangeLocation, setChangeShowLocation }) => { 

// const { showChangeLocation, setChangeShowLocation } = { props }

console.log("showChangeLocation-------", showChangeLocation);


return (
    <Grid container sx={{
        zIndex: 300, position: 'fixed', top: 0, left: 0,
        bgcolor: 'rgba(10, 0, 0, 0.4)',
        height: '100vh',
        display: showChangeLocation ? 'flex' : 'none'
    }}>


        <Grid container
            className="animate__animated animate__fadeInLeft"
            xs={11} sm={7} md={7} lg={4}
            sx={{ bgcolor: "#FFF", ml: 'auto', justifyContent: 'center' }}>

            <Grid container justifyContent="end" sx={{ bgcolor: '', height: "fit-content" }}>
                <Box
                    onClick={() => setChangeShowLocation(!showChangeLocation)}
                    component='img'
                    src="/Assets/icons/closeicon.png"
                    sx={{
                        height: 20,
                        // ml: 'auto', 
                        m: 1.5,
                        cursor: 'pointer'
                    }}
                />
            </Grid>


            <Grid container sx={{ height: "fit-content", justifyContent: 'center' }}>
                <Grid container xs={11} sm={11} md={10} lg={9} sx={{ bgcolor: '', }}>

                    <Typography sx={{
                        fontFamily: TERNARY_FONT,
                        fontSize: { xs: 17, sm: 20, md: 19, lg: 19 },
                        fontWeight: 600
                    }}> Save Delivery Address </Typography>

                    <Grid container sx={{ height: { xs: 38, sm: 40, md: 50, lg: 40 }, mt: 1 }}>
                        <input
                            // type="password"
                            style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                            className="location_input_field"
                            placeholder="Enter your address"
                        />
                    </Grid>

                    <Grid
                        container
                        component='img'
                        src="/Assets/map.png"
                        sx={{
                            height: {},

                        }}
                    />

                    <form action="" style={{ width: '100%' }}>
                        <Grid container sx={{ mt: { xs: .5, sm: .5, md: 1, lg: 1 } }}>
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                fontWeight: 600, fontFamily: TERNARY_FONT
                            }}>Address</Typography>

                            <Grid container sx={{ height: { xs: 38, sm: 40, md: 50, lg: 40 }, mt: 1 }}>
                                <input
                                    type="text"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                                    className="location_input_field"
                                />
                            </Grid>
                        </Grid>

                        <Grid container sx={{ mt: { xs: .5, sm: .5, md: 1, lg: 1 } }}>
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                fontWeight: 600, fontFamily: TERNARY_FONT
                            }}>Door / Flat No.</Typography>

                            <Grid container sx={{ height: { xs: 38, sm: 40, md: 50, lg: 40 }, mt: 1 }}>
                                <input
                                    type="text"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                                    className="location_input_field"
                                />
                            </Grid>
                        </Grid>

                        <Grid container sx={{
                            bgcolor: PRIMARY_BGCOLOUR,
                            borderRadius: 2,
                            height: { xs: 40, sm: 40, md: 50, lg: 40 },
                            mt: 2
                        }}>

                            <button className="login_sumbitBtn">
                                <Typography sx={{
                                    fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                    color: '#FFF', fontFamily: ''
                                }}>SAVE ADDRESS & PROCEED</Typography>
                            </button>

                        </Grid>


                    </form>








                </Grid>

            </Grid>

        </Grid >



        <Grid
            container
            xs={1} sm={5} md={5} lg={8}
            onClick={() => setChangeShowLocation(!showChangeLocation)}
        />


    </Grid >
)
}
// bgcolor: { xs: 'red', sm: 'green', md: 'blue', lg: 'orange' }
export default ChangeLocation;