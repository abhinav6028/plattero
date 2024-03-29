import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";

export default function Sort() {

    const radioItems = [
        { itemName: 'Relevance', value: 'Relevance' },
        { itemName: 'Delivery Time', value: 'DeliveryTime' },
        { itemName: 'Rating', value: 'Rating' },
        { itemName: 'Cost: Low to High', value: 'CostLowtoHigh' },
        { itemName: 'Cost: High to Low', value: 'CostHightoLow' },

    ]

    return (
        <Grid container sx={{ justifyContent: 'center' }}>
            <Grid container xs={11} sm={11} md={11} lg={11} sx={{ bgcolor: '' }}>

                <Typography sx={{
                    fontSize: 14,
                    color: SECONDARY_TEXTCOLOUR, bgcolor: '', height: 'fit-content', width: '100%'
                }}>SORT BY</Typography>


                <Box sx={{ bgcolor: '', mt: { xs: 0, sm: -6, md: -7, lg: -9 } }}>
                    <Grid>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 18,
                                    color: PRIMARY_BGCOLOUR,
                                    my: -.5
                                },

                            }}
                        >
                            {
                                radioItems?.map((data, index) =>

                                    <FormControlLabel color="red" value={data?.value} control={<Radio />} label={data?.itemName} />

                                )
                            }

                        </RadioGroup>
                    </Grid>
                </Box>



            </Grid>
        </Grid>
    )
}