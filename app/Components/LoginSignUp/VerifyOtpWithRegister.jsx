import { BASE_URL, POPUP_FONT, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
import { Grid, Typography } from "@mui/material";

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

export default function VerifyOtpWithRegister(props) {

    const { showForm, getMobile, setShowForm, setShowLogin, showLogin, setGetMobile } = props

    // console.log("getMobile VerifyOtpWithRegister", getMobile);


    const schema = yup.object({
        otp: yup.string().required("enter valid OTP!")
    })

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const headers = {
        'Authorization': 'Bearer akhil@intertoons.com', // Bearer token
        'Content-Type': 'application/json' // Assuming the content type is JSON
    };

    // console.log("errors", errors);


    const onSubmit = (data) => {

        // console.log("data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", getMobile);


        axios.post(`${BASE_URL}verify-otp`, {
            mobile: getMobile,
            otp_type: "register",
            otp: data?.otp
        }, { headers }
        ).then((res) => {
            // console.log("res", res)
            res?.statusText == "OK" ? setShowLogin(!showLogin) : ''
            // setGetMobile()
            Cookies.set('auth_token', res?.data?.data?.api_token);

        }
        )
    }


    return (
        <Grid container>
            <form action="" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container>

                    <Grid container>

                        <Typography sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                            fontWeight: 600, fontFamily: POPUP_FONT
                        }}>Phone Number</Typography>

                        <Grid container sx={{
                            border: '1px solid #D0D5DD',
                            borderRadius: 1, mt: 1,
                        }}>

                            <Grid container xs={10} sm={10} md={10} lg={10} sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }
                            }}>
                                <input
                                    type="text" placeholder={getMobile} value={getMobile}
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
                        }}>One time password</Typography>

                        <Grid container sx={{
                            border: '1px solid #D0D5DD',
                            borderRadius: 1, mt: 1,
                        }}>

                            <Grid container xs={10} sm={10} md={10} lg={10} sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }
                            }}>
                                <input
                                    type="number"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
                                    name="otp"
                                    {...register("otp")}
                                />
                            </Grid>

                            <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

                                <Grid
                                    component='img' src="/Assets/icons/inputcloseIcon.png"
                                    sx={{ height: 18 }}
                                />


                            </Grid>

                            <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.otp?.message}</Typography>


                        </Grid>

                    </Grid>

                    <Grid container sx={{
                        bgcolor: PRIMARY_BGCOLOUR,
                        borderRadius: 2,
                        height: { xs: 40, sm: 40, md: 50, lg: 40 },
                        my: 2.6
                    }}>

                        <button type="submit" className="login_sumbitBtn">
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                color: '#FFF'
                            }}>Verify OTP</Typography>
                        </button>

                    </Grid>

                </Grid>
            </form>
        </Grid>
    )
}