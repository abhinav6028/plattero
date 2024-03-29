import { Grid, Typography, Box } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import { SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";

export default function Restaurants(props: any) {

    const { lg, bgcolor, my } = props

    return (


        <Grid container bgcolor="" sx={{
            height: 'fit-content',
            justifyContent: { xs: 'center', sm: 'space-around', md: 'space-around', lg: 'space-around' }
        }}>

            {
                [1, 2, 3, 4, 5, 6, 7, 7]?.map((data, index) =>

                    <Grid container bgcolor={bgcolor ? bgcolor : "red"} xs={10} sm={5} md={3.5} lg={lg ? lg : 3.5}
                        // ml={2}
                        sx={{
                            mt: 1.5,
                            p: lg ? 1.5 : '',
                            my: my ? my : '',
                            borderRadius: 2
                            // ml: { xs: 0, sm: 0, md: 0, lg: index > 0 ? 3 : 0, }, height: 'fit-content',
                            // mt: { xs: 3, sm: index > 1 ? 2 : 0, md: index > 0 ? 1.5 : 0, lg: index > 2 ? 4 : 0 }
                        }}
                    >

                        <Grid
                            container
                            component='img'
                            src="/Assets/dishimage.png"
                        />

                        <Grid sx={{ mt: 1, ml: 1 }}>
                            <Typography sx={{ fontSize: { xs: 16, sm: 20, md: 15, lg: 17 }, fontFamily: TERNARY_FONT, fontWeight: 600 }}>Hotel Aryans Park</Typography>

                            <Grid container alignItems="center">

                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box sx={{
                                        width: 20,
                                        height: 20,
                                        bgcolor: '#01A712', borderRadius: '50%',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <StarRateIcon sx={{ fontSize: 18, color: '#FFF' }} />
                                    </Box>

                                    <Typography sx={{ fontSize: 13, fontFamily: TERNARY_FONT, color: SECONDARY_TEXTCOLOUR, ml: 1 }}> 4.3</Typography>

                                    <Typography sx={{ fontSize: 13, fontFamily: TERNARY_FONT, color: SECONDARY_TEXTCOLOUR, ml: 2 }}> 35-40 mins</Typography>

                                </Box>



                                <Typography sx={{ fontSize: 13, fontFamily: TERNARY_FONT, color: SECONDARY_TEXTCOLOUR, mt: .5 }}>
                                    Italian, Continental, P..
                                </Typography>

                                <Typography sx={{ fontSize: 13, fontFamily: TERNARY_FONT, color: SECONDARY_TEXTCOLOUR, mt: .3, width: '100%' }}>
                                    Palarivattom
                                </Typography>


                            </Grid>
                        </Grid>
                    </Grid>

                )
            }



        </Grid >
    )
}