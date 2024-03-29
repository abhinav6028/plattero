"use client"
import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import LoginScreen from "./LoginScreen";
import LoginWithOtp from "./LoginWithOtp";
import EnterOtp from "./EnterOtp";
import 'animate.css';
import ForgotPassword from "./ForgotPassword";
import ResetPasswordEnterOtp from "./ResetPasswordEnterOtp";
import SignUpForm from "./SignUpForm";
import VerifyOtpWithRegister from "./VerifyOtpWithRegister";
// import VerifyOtpWithRegister from "./verifyotpWithRegister";


export default function LoginSignUp(props: any) {

    const { showLogin, setShowLogin } = props

    const [showForm, setShowForm] = useState("login")

    const [getMobile, setGetMobile] = useState()

    // console.log("showForm fromlogin", showForm);




    return (
        <Grid container sx={{
            zIndex: 300, position: 'fixed', top: 0, left: 0,
            bgcolor: 'rgba(10, 0, 0, 0.4)',
            height: '100vh',
            display: showLogin ? 'none' : 'flex'
        }}>

            {/* <h1 className="animate__animated animate__bounce">avsdv </h1> */}

            <Grid
                container
                xs={1} sm={5} md={5} lg={8}
                onClick={() => setShowLogin(!showLogin)}
            />

            {/* </Grid> */}

            <Grid container
                xs={11} sm={7} md={7} lg={4}
                className="animate__animated animate__fadeInRight"
                sx={{
                    bgcolor: "#FFF",
                    ml: 'auto',
                    // bgcolor: { xs: 'red', sm: 'green', md: 'blue', lg: 'orange' }
                }}>

                <Grid container bgcolor="" sx={{}}>

                    <Grid sx={{
                        height: '8vh'
                    }}>
                        <Box
                            onClick={() => setShowLogin(!showLogin)}
                            component='img'
                            src="/Assets/icons/closeicon.png"
                            sx={{
                                height: 20,
                                m: 1.5,
                                cursor: 'pointer'
                            }}
                        />

                    </Grid>

                    <Grid container bgcolor="" sx={{ height: "92vh", justifyContent: 'center', alignItems: 'center' }}>

                        <Grid container bgcolor="" xs={11} sm={10} md={9} lg={8}>

                            <Grid container sx={{
                                flexDirection: 'column',
                                bgcolor: ''
                            }}>

                                <Box
                                    component='img'
                                    src="/Assets/logo.png"
                                    alt="Main Logo"
                                    sx={{
                                        width: { xs: 150, sm: 200, md: 200, lg: 100 },
                                        bgcolor: ''
                                    }}
                                />

                                <Box sx={{
                                    my: { xs: 3, sm: 4, md: 4, lg: 4 }
                                }}>
                                    <Typography sx={{
                                        fontSize: { xs: 30, sm: 35, md: 40, lg: 30 },
                                        // mt: 3,
                                        fontWeight: 700, fontFamily: "Inter Tight"
                                    }}>
                                        {showForm == "login" && "Login"}
                                        {showForm == "OTP" && "Login"}
                                        {showForm == "verifyotp" && "Enter Otp"}
                                        {showForm == "forgetPassword" && "Forgot Password"}
                                        {showForm == "ResetPasswordEnterOtp" && "Forgot Password"}

                                        {/* verifyotp */}
                                        {/* {showForm == "verifyotp" ? "Enter OTP" : "Login"} */}
                                    </Typography>

                                    <Typography
                                        onClick={() => setShowForm("signup")}
                                        sx={{
                                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                            fontWeight: 400, fontFamily: "Inter Tight",
                                            color: PRIMARY_BGCOLOUR,
                                            cursor: 'pointer',
                                            mt: .5
                                        }}>
                                        {showForm == "login" && "or create an account"}
                                        {showForm == "OTP" && "or create an account"}
                                        {showForm == "verifyotp" && "We've sent an OTP to your phone number."}
                                        {showForm == "forgetPassword" && "or login to your account"}
                                        {showForm == "ResetPasswordEnterOtp" && "Forgot Password"}
                                        {/* {showForm == "verifyotp" ? "We've sent an OTP to your phone number." : "or create an account"} */}
                                    </Typography>
                                </Box>


                            </Grid>

                            <Grid container sx={{
                                bgcolor: ''
                            }}>

                                {showForm === "login" && <LoginScreen showLogin={showLogin} setShowLogin={setShowLogin} showForm={showForm} setShowForm={setShowForm} />}
                                {showForm === "OTP" && <LoginWithOtp showForm={showForm} setShowForm={setShowForm} getMobile={getMobile} setGetMobile={setGetMobile} />}
                                {showForm === "verifyotp" && <EnterOtp showForm={showForm} setShowForm={setShowForm} getMobile={getMobile} setShowLogin={setShowLogin} showLogin={showLogin} />}
                                {showForm === "forgetPassword" && <ForgotPassword showForm={showForm} setShowForm={setShowForm} />}
                                {showForm === "ResetPasswordEnterOtp" && <ResetPasswordEnterOtp showForm={showForm} setShowForm={setShowForm} />}
                                {showForm === "signup" && <SignUpForm showForm={showForm} setShowForm={setShowForm} setGetMobile={setGetMobile} getMobile={getMobile} />}

                                {/* {showForm === "verifyotpWithRegister" && <EnterOtp showForm={showForm} setShowForm={setShowForm} getMobile={getMobile} setShowLogin={setShowLogin} showLogin={showLogin} type="register" />} */}

                                {showForm === "verifyotpWithRegister" && <VerifyOtpWithRegister showForm={showForm} setShowForm={setShowForm} setGetMobile={setGetMobile} getMobile={getMobile} setShowLogin={setShowLogin} showLogin={showLogin} />}


                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>





            </Grid>
        </Grid>
    )
}
