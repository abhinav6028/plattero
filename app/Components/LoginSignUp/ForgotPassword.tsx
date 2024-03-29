import { POPUP_FONT, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Grid, Typography } from "@mui/material";

export default function ForgotPassword(props: any) {

    const { showForm, setShowForm } = props

    return (

        <Grid container>
            <form action="" style={{ width: '100%' }}>
                <Grid container sx={{ bgcolor: '' }}>

                    <Typography sx={{
                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                        fontWeight: 600, fontFamily: POPUP_FONT
                    }}>Phone Number</Typography>

                    <Grid container sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: 1, mt: .5,
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
                    onClick={() => setShowForm("ResetPasswordEnterOtp")}
                    sx={{
                        bgcolor: PRIMARY_BGCOLOUR,
                        borderRadius: 2,
                        height: { xs: 40, sm: 40, md: 50, lg: 40 },
                        mt: 2.5
                    }}>

                    <button className="login_sumbitBtn">
                        <Typography sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                            color: '#FFF'
                        }}>Send OTP</Typography>
                    </button>

                </Grid>

            </form>
        </Grid>

        // <Grid container md={12} lg={12}>
        //     <form action="" style={{ width: '100%' }}>
        //         <Grid container>
        // <Grid container sx={{ bgcolor: '' }}>

        //     <Typography sx={{
        //         fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
        //         fontWeight: 600, fontFamily: POPUP_FONT
        //     }}>Phone Numberr</Typography>

        //     <Grid container sx={{
        //         border: '1px solid #D0D5DD',
        //         borderRadius: 1, mt: .5,
        //     }}>

        //         <Grid container xs={10} sm={10} md={10} lg={10} sx={{
        //             bgcolor: '',
        //             height: { xs: 40, sm: 40, md: 50, lg: 40 }
        //         }}>
        //             <input
        //                 type="text" placeholder="debra.holt@example.com"
        //                 style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
        //             />
        //         </Grid>

        //         <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

        //             <Grid
        //                 component='img' src="/Assets/icons/inputcloseIcon.png"
        //                 sx={{ height: 18 }}
        //             />


        //         </Grid>

        //     </Grid>

        // </Grid>


        // <Grid container
        //     onClick={ () => }
        //     sx={{
        //         bgcolor: PRIMARY_BGCOLOUR,
        //         borderRadius: 2,
        //         height: { xs: 40, sm: 40, md: 50, lg: 40 },
        //         mt: 2
        //     }}>

        //     <button className="login_sumbitBtn">
        //         <Typography sx={{
        //             fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
        //             color: '#FFF'
        //         }}>Send OTP</Typography>
        //     </button>

        // </Grid>

        //         </Grid>
        //     </form>
        // </Grid>
    )
}