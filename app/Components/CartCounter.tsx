import { PRIMARY_BGCOLOUR } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";



export default function CartCounter(props: any) {

    const { lg, xs, quantity } = props

    const [qnt, setQnt] = useState(quantity)

    return (
        <Grid container bgcolor="" justifyContent="center">

            <Grid container xs={xs ? xs : 5} sm={4} md={11} lg={lg ? lg : 8} sx={{
                // boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
                bgcolor: '',
                // display: clickedItem.includes(index) ? 'flex' : "none",
                justifyContent: 'space-around',
                my: { xs: 1, sm: 2, md: 0, lg: 0 },
                ml: { xs: 2, sm: 1, md: 0, lg: 0 },
                mt: -30,
                border: `1px solid #E4E4E4`

            }}>

                <Grid container xs={4} sm={4} md={4} lg={4} sx={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => {
                        setQnt(parseInt(qnt) - 1)
                    }}
                >

                    <Box component="img" src="/Assets/icons/mainus.png" />

                </Grid>

                <Grid container xs={4} sm={4} md={4} lg={4} sx={{ justifyContent: 'center', alignItems: 'center', }}>

                    <Typography sx={{ fontWeight: 'bold', color: PRIMARY_BGCOLOUR, fontSize: 20 }}>
                        {qnt}
                    </Typography>

                </Grid>


                <Grid container
                    xs={4} sm={4} md={4} lg={4} sx={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => {
                        setQnt(parseInt(qnt) + 1)
                    }}
                >

                    <Box component="img" src="/Assets/icons/plus.png" />

                </Grid>

            </Grid>

        </Grid >
    )
}