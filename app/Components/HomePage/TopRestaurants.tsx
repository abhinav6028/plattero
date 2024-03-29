import { SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Grid, Typography } from "@mui/material";

export default function TopRestaurants() {
    return (
        <Grid container justifyContent="center" alignItems="center" bgcolor="" sx={{
            py: { xs: 2, sm: 2, md: 6, lg: 6 },
            // bgcolor: { xs: 'green', sm: 'blue', md: 'orange', lg: 'red' },

        }}>

            <Grid container xs={11} sm={9} md={10} lg={10} >
                <Typography sx={{
                    fontSize: { xs: 24, sm: 18, md: 24, lg: 24 },
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                    fontFamily: SECONDARY_FONT,
                }}>Browse By Cuisine</Typography>

                <Typography sx={{
                    fontSize: { md: 14, lg: 17 },
                    color: SECONDARY_TEXTCOLOUR,
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
                    fontFamily: TERNARY_FONT,
                }}>Discover restaurants by type of meal</Typography>


                <Grid container sx={{ mt: 2, bgcolor: "", justifyContent: 'space-around' }}>


                    {
                        [1, 2, 3, 4, 5, 6, 7, 8]?.map(data =>

                            <Grid container xs={5} sm={4} md={1.3} lg={1.3} sx={{
                                bgcolor: '',
                                m: { xs: 1, sm: 1, md: 0 }, justifyContent: 'center', alignItems: 'center'
                            }} >

                                <Grid
                                    container sm={9}
                                    component="img"
                                    src="/Assets/fb-restaurant-08-1-1.jpg"

                                />

                            </Grid>

                        )
                    }

                </Grid>

            </Grid>



        </Grid >
    )
}