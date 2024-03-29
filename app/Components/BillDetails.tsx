import { SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Grid, Typography } from "@mui/material";

export default function BillDetails(props: any) {
    return (
        <Grid container>

            <Typography sx={{
                fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 19, md: 20, lg: 18 }, fontWeight: 600,
                py: 1, borderBottom: `1px solid #D9D9D9`, width: "100%"
            }}> Bill Details </Typography>

            <Grid container sx={{ justifyContent: 'space-between', my: { xs: .5, sm: .5, md: 1, lg: 1 } }}>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 13, sm: 14, md: 16, lg: 14 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR }}> Item Total </Typography>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 14, sm: 15, md: 18, lg: 16 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, mt: .5 }}>₹ 208.57 </Typography>
            </Grid>

            <Grid container sx={{ justifyContent: 'space-between', my: { xs: .5, sm: .5, md: 1, lg: 1 }, pb: { xs: .8, sm: 1.2, md: 1.3, lg: 1.5 }, borderBottom: `1px solid #D9D9D9`, }}>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 13, sm: 14, md: 16, lg: 14 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR }}> Delivery Fee | 1.0 km </Typography>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 14, sm: 15, md: 18, lg: 16 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, mt: .5 }}>₹ 33 </Typography>
            </Grid>

            <Grid container sx={{ justifyContent: 'space-between', my: { xs: .5, sm: .5, md: 1, lg: 1 }, mt: { xs: .8, sm: 1.2, md: 1.3, lg: 1.5 } }}>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 13, sm: 14, md: 16, lg: 14 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR }}> Delivery Tip </Typography>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 14, sm: 15, md: 18, lg: 16 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, mt: .5 }}>₹ 208.57 </Typography>
            </Grid>

            <Grid container sx={{ justifyContent: 'space-between', my: { xs: .5, sm: .5, md: 1, lg: 1 } }}>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 13, sm: 14, md: 16, lg: 14 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR }}> Platform fee </Typography>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 14, sm: 15, md: 18, lg: 16 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, mt: .5 }}>₹ 208.57 </Typography>
            </Grid>

            <Grid container sx={{ justifyContent: 'space-between', my: { xs: .5, sm: .5, md: 1, lg: 1 }, pb: { xs: .8, sm: 1.2, md: 1.3, lg: 2 }, borderBottom: `3px solid #000` }}>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 13, sm: 14, md: 16, lg: 14 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR }}> Platform fee </Typography>
                <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 14, sm: 15, md: 18, lg: 16 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, mt: .5 }}>₹ 208.57 </Typography>
            </Grid>

            <Grid container sx={{ justifyContent: 'space-between', my: { xs: .5, sm: .5, md: 1, lg: 1 }, pb: { xs: .8, sm: 1.2, md: 1.3, lg: 2 } }}>

                <Typography sx={{ fontSize: { xs: 12, sm: 19, md: 20, lg: 18 }, fontWeight: 600, }}> TO PAY </Typography>
                <Typography sx={{ fontSize: { xs: 12, sm: 19, md: 20, lg: 18 }, fontWeight: 600, }}> ₹ 308.57 </Typography>

            </Grid>

        </Grid>
    )
}