import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";

export default function PersonalInformation(props: any) {
    return (
        <Grid container sx={{ justifyContent: 'space-evenly', bgcolor: '', alignItems: '' }}>


            <form action="" style={{ width: '100%' }}>


                <Box sx={{ width: '100%' }}>

                    <Grid container sx={{ justifyContent: '' }}>

                        <Grid container sx={{ bgcolor: '', height: 'fit-content' }} >

                            <Box display="flex">
                                <Box
                                    component='img'
                                    src='/Assets/man.jpeg'
                                    sx={{
                                        bgcolor: 'red',
                                        height: 100,
                                        width: 100,
                                        borderRadius: '50%',
                                        ml: 3
                                    }}
                                />
                            </Box>

                        </Grid>

                        <Grid container xs={10} sm={10} md={5} lg={5} sx={{ bgcolor: '', height: 'fit-content', ml: 3, mt: 3 }}>

                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                fontWeight: 600, fontFamily: TERNARY_FONT, bgcolor: '', height: 'fit-content'
                            }}>First Name</Typography>

                            <Grid container sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }

                            }}>
                                <input
                                    type="text"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                                    className="location_input_field"
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={5} lg={5} sx={{ bgcolor: '', height: 'fit-content', ml: 3, mt: 3 }}>

                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                fontWeight: 600, fontFamily: TERNARY_FONT, bgcolor: '', height: 'fit-content'
                            }}>Last Name</Typography>

                            <Grid container sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }

                            }}>
                                <input
                                    type="text"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                                    className="location_input_field"
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={5} lg={5} sx={{ bgcolor: '', height: 'fit-content', mt: 3, ml: 3 }}>

                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                fontWeight: 600, fontFamily: TERNARY_FONT, bgcolor: '', height: 'fit-content'
                            }}>Email ID</Typography>

                            <Grid container sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }

                            }}>
                                <input
                                    type="text"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                                    className="location_input_field"
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={5} lg={5} sx={{ bgcolor: '', height: 'fit-content', mt: 3, ml: 3 }}>

                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                fontWeight: 600, fontFamily: TERNARY_FONT, bgcolor: '', height: 'fit-content'
                            }}>Email ID</Typography>

                            <Grid container sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }

                            }}>
                                <input
                                    type="text"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                                    className="location_input_field"
                                />
                            </Grid>

                        </Grid>

                        <Grid container xs={10} sm={10} md={5} lg={5} sx={{ bgcolor: '', height: 'fit-content', mt: 3, ml: 3 }}>

                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                fontWeight: 600, fontFamily: TERNARY_FONT, bgcolor: '', height: 'fit-content'
                            }}>Gender</Typography>

                            <Grid container sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }

                            }}>
                                <input
                                    type="text"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR, border: `1px solid ${SECONDARY_TEXTCOLOUR}` }}
                                    className="location_input_field"
                                />
                            </Grid>

                        </Grid>

                        <Grid container>
                            <Grid container xs={5} sm={5} md={4} lg={3} sx={{
                                borderRadius: 2,
                                height: { xs: 40, sm: 40, md: 50, lg: 40 },
                                justifyContent: 'center', alignItems: 'center',
                                border: `1px solid ${PRIMARY_BGCOLOUR}`, cursor: 'pointer',
                                mt: 3, ml: 3
                            }}>

                                <Typography
                                    sx={{
                                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                        color: PRIMARY_BGCOLOUR
                                    }}> Update Changes</Typography>


                            </Grid>
                        </Grid>



                    </Grid>


                </Box>

            </form>


        </Grid>
    )


}