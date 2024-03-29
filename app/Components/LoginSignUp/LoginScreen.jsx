// import { BASE_URL, POPUP_FONT, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
// import { Grid, Typography } from "@mui/material";
// import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import axios from "axios";
// import Cookies from 'js-cookie';

// export default function LoginScreen(props: any) {

//     const { setShowForm, showForm, showLogin, setShowLogin } = props

//     const schema = yup.object({
//         phone: yup.string().required("Mobile is required"),
//         Password: yup.string().required("password is required").min(6, "Password should minimum 6 lettrs ")
//     })

//     const { register, handleSubmit, formState: { errors } } = useForm(
//         {
//             resolver: yupResolver(schema)
//         }
//     );

//     const headers = {
//         'Authorization': 'Bearer akhil@intertoons.com', // Bearer token
//         'Content-Type': 'application/json' // Assuming the content type is JSON
//     };

//     const onSubmit = (data:any) => {

//         axios.post(`${BASE_URL}integration/customer/token`, {
//             username: data?.phone,
//             password: data?.Password,
//         }, { headers }
//         ).then((res) => {
//             console.log("res", res?.data?.data?.api_token)
//             Cookies.set('auth_token', res?.data?.data?.api_token);
//             res?.statusText == "OK" ? setShowLogin(!showLogin) : ''

//         }
//         )
//     }



//     return (
//         <Grid container md={12} lg={12}>
//             <form action="" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
//                 <Grid container>
//                     <Grid container sx={{ bgcolor: '' }}>

//                         <Typography sx={{
//                             fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                             fontWeight: 600, fontFamily: POPUP_FONT
//                         }}>Phone Number</Typography>

//                         <Grid container sx={{
//                             border: '1px solid #D0D5DD',
//                             borderRadius: 1, mt: .5,
//                         }}>

//                             <Grid container xs={10} sm={10} md={10} lg={10} sx={{
//                                 bgcolor: '',
//                                 height: { xs: 40, sm: 40, md: 50, lg: 40 }
//                             }}>
//                                 <input
//                                     type="text" placeholder="debra.holt@example.com"
//                                     style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
//                                     name="phone"
//                                     {...register("phone")}
//                                 />
//                             </Grid>

//                             <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

//                                 <Grid
//                                     component='img' src="/Assets/icons/inputcloseIcon.png"
//                                     sx={{ height: 18 }}
//                                 />


//                             </Grid>

//                         </Grid>

//                         <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.phone?.message}</Typography>


//                     </Grid>

//                     <Grid container sx={{ bgcolor: '', mt: 2.5 }}>

//                         <Typography sx={{
//                             fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                             fontWeight: 600, fontFamily: POPUP_FONT
//                         }}>Password</Typography>

//                         <Grid container sx={{
//                             border: '1px solid #D0D5DD',
//                             borderRadius: 1, mt: .5,
//                         }}>

//                             <Grid container xs={10} sm={10} md={10} lg={10} sx={{
//                                 bgcolor: '',
//                                 height: { xs: 40, sm: 40, md: 50, lg: 40 }
//                             }}>
//                                 <input
//                                     type="password" placeholder="debra.holt@example.com"
//                                     style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
//                                     name="Password"
//                                     {...register("Password")}
//                                 />
//                             </Grid>

//                             <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

//                                 <Grid
//                                     component='img' src="/Assets/icons/HideIcon.png"
//                                     sx={{ height: 18 }}
//                                 />


//                             </Grid>

//                         </Grid>

//                         <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.Password?.message}</Typography>


//                     </Grid>

//                     <Typography
//                         onClick={() => setShowForm("forgetPassword")}
//                         sx={{
//                             fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                             fontWeight: 600, fontFamily: POPUP_FONT,
//                             color: PRIMARY_BGCOLOUR,
//                             cursor: 'pointer',
//                             mt: .5
//                         }}> Forgot Password?</Typography>

//                     <Grid container
//                         // onClick={() => setShowForm("verifyotp")}
//                         sx={{
//                             bgcolor: PRIMARY_BGCOLOUR,
//                             borderRadius: 2,
//                             height: { xs: 40, sm: 40, md: 50, lg: 40 },
//                             mt: 2.5
//                         }}>

//                         <button type="submit" className="login_sumbitBtn">
//                             <Typography sx={{
//                                 fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                                 color: '#FFF', fontFamily: POPUP_FONT
//                             }}>Login</Typography>
//                         </button>

//                     </Grid>

//                     <Grid container sx={{
//                         borderRadius: 2,
//                         height: { xs: 40, sm: 40, md: 50, lg: 40 },
//                         justifyContent: 'center', alignItems: 'center',
//                         border: `1px solid ${PRIMARY_BGCOLOUR}`, cursor: 'pointer',
//                         my: 2
//                     }}>

//                         <Typography
//                             onClick={() => setShowForm("OTP")}
//                             sx={{
//                                 fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                                 color: PRIMARY_BGCOLOUR, fontFamily: POPUP_FONT
//                             }}> Login Using OTP</Typography>


//                     </Grid>




//                     {/* <Grid container
//                         onClick={() => }
//                         sx={{
//                             bgcolor: PRIMARY_BGCOLOUR,
//                             borderRadius: 2,
//                             height: { xs: 40, sm: 40, md: 50, lg: 40 },
//                             mt: 2
//                         }}>

//                         <button className="login_sumbitBtn">
//                             <Typography sx={{
//                                 fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                                 color: '#FFF'
//                             }}>Send OTP</Typography>
//                         </button>

//                     </Grid> */}
//                 </Grid>
//             </form >
//         </Grid >
//     )
// }


// // import { TERNARY_FONT, SECONDARY_TEXTCOLOUR, PRIMARY_BGCOLOUR } from "@/utils";
// // import { Grid, Typography } from "@mui/material";

// // export default function LoginScreen(props) {

// //     const { showForm, setShowForm } = proponClick = {() => setShowForm("forgetPassword")
// // }
// // sx = {{
// //     fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
// //     fontWeight: 600, fontFamily: TERNARY_FONT,
// //         color: PRIMARY_BGCOLOUR,
// //             cursor: 'pointer',
// //                 mt: .5
// // }}> Forgot Password ?</Typography >

// //                 </Grid >


// //     <Grid container sx={{
// //         bgcolor: PRIMARY_BGCOLOUR,
// //         borderRadius: 2,
// //         height: { xs: 40, sm: 40, md: 50, lg: 40 },
// //         mt: 2
// //     }}>

// //         <button className="login_sumbitBtn">
// //             <Typography sx={{



// // ZZZ<Grid container sx={{
// //                 borderRadius: 2,
// //                 height: { xs: 40, sm: 40, md: 50, lg: 40 },
// //                 justifyContent: 'center', alignItems: 'center',
// //                 border: `1px solid ${PRIMARY_BGCOLOUR}`, cursor: 'pointer',
// //                 my: 2
// //             }}>

// //                 <Typography
// //                     onClick={() => setShowForm("OTP")}
// //                     sx={{
// //                         fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
// //                         color: PRIMARY_BGCOLOUR
// //                     }}> Login Using OTP</Typography>


// //             </Grid>

// //         </form>

// //     </Grid>


// //     )
// // }















import React from 'react';
import { BASE_URL, POPUP_FONT, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
import { Grid, Typography } from "@mui/material";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import Cookies from 'js-cookie';

export default function LoginScreen(props) {
    const { setShowForm, showForm, showLogin, setShowLogin } = props;

    const schema = yup.object().shape({
        phone: yup.string().required("Mobile is required"),
        Password: yup.string().required("password is required").min(6, "Password should minimum 6 lettrs ")
    });

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const headers = {
        'Authorization': 'Bearer akhil@intertoons.com', // Bearer token
        'Content-Type': 'application/json' // Assuming the content type is JSON
    };

    const onSubmit = (data) => {
        axios.post(`${BASE_URL}integration/customer/token`, {
            username: data?.phone,
            password: data?.Password,
        }, { headers })
        .then((res) => {
            console.log("res", res?.data?.data?.api_token)
            Cookies.set('auth_token', res?.data?.data?.api_token);
            res?.statusText === "OK" ? setShowLogin(!showLogin) : ''
        });
    };

    return (
        <Grid container md={12} lg={12}>
            <form action="" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
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
                                    name="phone"
                                    {...register("phone")}
                                />
                            </Grid>

                            <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>
                                <Grid
                                    component='img' src="/Assets/icons/inputcloseIcon.png"
                                    sx={{ height: 18 }}
                                />
                            </Grid>
                        </Grid>

                        <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.phone?.message}</Typography>
                    </Grid>

                    <Grid container sx={{ bgcolor: '', mt: 2.5 }}>
                        <Typography sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                            fontWeight: 600, fontFamily: POPUP_FONT
                        }}>Password</Typography>

                        <Grid container sx={{
                            border: '1px solid #D0D5DD',
                            borderRadius: 1, mt: .5,
                        }}>
                            <Grid container xs={10} sm={10} md={10} lg={10} sx={{
                                bgcolor: '',
                                height: { xs: 40, sm: 40, md: 50, lg: 40 }
                            }}>
                                <input
                                    type="password" placeholder="debra.holt@example.com"
                                    style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
                                    name="Password"
                                    {...register("Password")}
                                />
                            </Grid>

                            <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>
                                <Grid
                                    component='img' src="/Assets/icons/HideIcon.png"
                                    sx={{ height: 18 }}
                                />
                            </Grid>
                        </Grid>

                        <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.Password?.message}</Typography>
                    </Grid>

                    <Typography
                        onClick={() => setShowForm("forgetPassword")}
                        sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                            fontWeight: 600, fontFamily: POPUP_FONT,
                            color: PRIMARY_BGCOLOUR,
                            cursor: 'pointer',
                            mt: .5
                        }}> Forgot Password?</Typography>

                    <Grid container sx={{
                        bgcolor: PRIMARY_BGCOLOUR,
                        borderRadius: 2,
                        height: { xs: 40, sm: 40, md: 50, lg: 40 },
                        mt: 2.5
                    }}>
                        <button type="submit" className="login_sumbitBtn">
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                color: '#FFF', fontFamily: POPUP_FONT
                            }}>Login</Typography>
                        </button>
                    </Grid>

                    <Grid container sx={{
                        borderRadius: 2,
                        height: { xs: 40, sm: 40, md: 50, lg: 40 },
                        justifyContent: 'center', alignItems: 'center',
                        border: `1px solid ${PRIMARY_BGCOLOUR}`, cursor: 'pointer',
                        my: 2
                    }}>
                        <Typography
                            onClick={() => setShowForm("OTP")}
                            sx={{
                                fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                                color: PRIMARY_BGCOLOUR, fontFamily: POPUP_FONT
                            }}> Login Using OTP</Typography>
                    </Grid>
                </Grid>
            </form >
        </Grid >
    );
}
