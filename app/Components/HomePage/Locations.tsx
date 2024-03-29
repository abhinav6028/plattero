import { SECONDARY_BGCOLOUR, SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Grid, Typography, Box } from "@mui/material";

export default function Locations() {
    return (
        <Grid container justifyContent="center" alignItems="center" bgcolor=""
            sx={{
                py: { xs: 2, sm: 2, md: 6, lg: 6 },
            }}>

            <Grid container xs={11} sm={11} md={10} lg={10} >
                <Typography sx={{
                    fontSize: { xs: 24, sm: 18, md: 24, lg: 24 },
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                    fontFamily: SECONDARY_FONT
                }}>Popular Localities In And Around Geelong</Typography>

                <Typography sx={{
                    fontSize: { md: 14, lg: 17 },
                    color: SECONDARY_TEXTCOLOUR,
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                    fontFamily: TERNARY_FONT

                }}>Explore restaurants, bars, and cafés by locality</Typography>

                <Grid container sx={{
                    bgcolor: '', justifyContent: 'space-around',
                    py: { xs: 1, sm: 1, md: 4, lg: 4 },
                    mt: { xs: 2, sm: 2, md: 4, lg: 4 },
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"

                }}>

                    {
                        [1, 2, 3, 4]?.map((data, index) =>

                            <Grid container xs={12} sm={6} md={2.5} lg={2.7} sx={{
                                alignItemsF: 'center', bgcolor: '', cursor: 'pointer',
                                p: { xs: 2, sm: 2, md: 0, lg: 0 }
                            }}>
                                {
                                    [1, 2, 3, 4]?.map(data =>

                                        <Grid container

                                            sx={{
                                                my: .6,
                                                display: { xs: '', sm: 'flex', md: 'flex', lg: "flex" },
                                                ml: { xs: 2, sm: 1, md: 1, lg: 1 }
                                            }}>

                                            <Typography sx={{
                                                fontSize: { xs: 22, sm: 16, md: 16, lg: 16 },
                                                fontFamily: TERNARY_FONT
                                            }}>Czech Republic</Typography>

                                            <Typography sx={{
                                                fontSize: { xs: 20, sm: 16, md: 16, lg: 16 },
                                                ml: 2,
                                                color: SECONDARY_TEXTCOLOUR,
                                                fontFamily: TERNARY_FONT

                                            }}>(5 places)</Typography>

                                        </Grid>

                                    )
                                }

                            </Grid>

                        )
                    }

                    <Grid container justifyContent="center">

                        <Typography sx={{
                            fontSize: 17,
                            color: '#FFF',
                            fontWeight: 700,
                            cursor: 'pointer',
                            bgcolor: SECONDARY_BGCOLOUR,
                            mt: { xs: 2, sm: 2, md: 3, lg: 4 },
                            py: { xs: 1, sm: 2, md: 2, lg: 1.5 },
                            px: { xs: 2, sm: 3, md: 4, lg: 4.3 },
                            borderRadius: '35px',
                            mb: { xs: 2.5, sm: 1.5, md: 1.5, lg: 1 }
                        }}>SEE MORE LOCATIONS</Typography>

                    </Grid>
                </Grid>



            </Grid>



        </Grid >
    )
}
