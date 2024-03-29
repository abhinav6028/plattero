import { POPUP_FONT, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Grid, Typography } from "@mui/material";

export default function ResetPasswordEnterOtp(props: any) {
    return (
        <Grid container>
            <form action="" style={{ width: '100%' }}>
                <Grid container>

                    <Typography sx={{
                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                        fontWeight: 600, fontFamily: POPUP_FONT
                    }}>Enter OTP</Typography>

                    <Grid container sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: 1, mt: 1,
                    }}>

                        <Grid container xs={10} sm={10} md={10} lg={10} sx={{
                            bgcolor: '',
                            height: { xs: 40, sm: 40, md: 50, lg: 40 }
                        }}>
                            <input
                                type="text" placeholder="debra.holt@example.com"
                                style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
                            />
                        </Grid>

                        <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

                            <Grid
                                component='img' src="/Assets/icons/inputcloseIcon.png"
                                sx={{ height: 18 }}
                            />


                        </Grid>

                    </Grid>

                </Grid>

                <Grid container sx={{ mt: 2.5 }}>

                    <Typography sx={{
                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                        fontWeight: 600, fontFamily: POPUP_FONT
                    }}>Enter New Password</Typography>

                    <Grid container sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: 1, mt: 1,
                    }}>

                        <Grid container xs={10} sm={10} md={10} lg={10} sx={{
                            bgcolor: '',
                            height: { xs: 40, sm: 40, md: 50, lg: 40 }
                        }}>
                            <input
                                type="text" placeholder="debra.holt@example.com"
                                style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
                            />
                        </Grid>

                        <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

                            <Grid
                                component='img' src="/Assets/icons/inputcloseIcon.png"
                                sx={{ height: 18 }}
                            />


                        </Grid>

                    </Grid>

                </Grid>

                <Grid container
                    // onClick={() => setShowForm("verifyotp")}
                    sx={{
                        bgcolor: PRIMARY_BGCOLOUR,
                        borderRadius: 2,
                        height: { xs: 40, sm: 40, md: 50, lg: 40 },
                        mt: 2.5
                    }}>

                    <button className="login_sumbitBtn">
                        <Typography sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                            color: '#FFF',
                            fontFamily: POPUP_FONT
                        }}>Reset Password</Typography>
                    </button>

                </Grid>

                <Typography

                    sx={{
                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                        fontWeight: 600, fontFamily: "Inter Tight",
                        color: PRIMARY_BGCOLOUR,
                        cursor: 'pointer',
                        mt: .5, width: '100%', textAlign: 'center'
                    }}> 00 : 25 </Typography>


            </form>
        </Grid>
    )
}