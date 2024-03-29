import { SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";

export default function Review() {
    return (
        <Grid container justifyContent="center" alignItems="center" bgcolor="" sx={{ py: { xs: 2, sm: 2, md: 6, lg: 6 } }}>

            <Grid container xs={11} sm={11} md={10} lg={10} >
                <Typography sx={{
                    fontSize: { xs: 24, sm: 18, md: 24, lg: 24 },
                    fontWeight: 550,
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                }}>Choose From Most Popular</Typography>

                <Typography sx={{
                    fontSize: { md: 14, lg: 17.5 },
                    color: SECONDARY_TEXTCOLOUR,
                    width: '100%',
                    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                }}>Cum doctus civibus efficiantur in imperdiet deterruisset.</Typography>

                <Grid container bgcolor="" sx={{ justifyContent: 'space-between', mt: 3 }}>
                    {
                        [1, 2, 3, 4]?.map((data) =>

                            <Grid container xs={11} sm={11} md={2.5} lg={2.9} sx={{
                                bgcolor: '',
                                mt: { xs: 1.5, sm: 1, md: 0, lg: 0 },
                                justifyContent: 'center'
                            }}>

                                <Grid container >

                                    <Typography sx={{
                                        color: SECONDARY_TEXTCOLOUR,
                                        fontFamily: SECONDARY_FONT,
                                        letterSpacing: 1.3
                                    }}>
                                        Love FoodBakery. Just ordered some grub,
                                        and I tell you, you folks make that part of my life easy. Thanks!
                                    </Typography>

                                    <Grid container sx={{
                                        alignItems: 'center',
                                        my: 2
                                    }}>
                                        <Box
                                            component='img'
                                            src="/Assets/fb-restaurant-08-1-1.jpg"
                                            sx={{
                                                width: 45,
                                                height: 45,
                                                borderRadius: '50%'
                                            }}

                                        />

                                        <Typography sx={{
                                            fontSize: 18,
                                            mt: 'auto',
                                            ml: 2, fontFamily: TERNARY_FONT,
                                        }}>
                                            @Name
                                        </Typography>

                                    </Grid>


                                </Grid>

                            </Grid>
                        )
                    }

                </Grid>


            </Grid>
        </Grid>
    )
}