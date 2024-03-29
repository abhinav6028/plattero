// import { BASE_URL, POPUP_FONT, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
// import { Grid, Typography } from "@mui/material";

// import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import axios from "axios";

// export default function LoginWithOtp(props: any) {

//     const { showForm, setShowForm, getMobile, setGetMobile } = props

//     const schema = yup.object({
//         phone: yup.string().required("Mobile is required"),
//     })

//     const { register, handleSubmit, formState: { errors } } = useForm(
//         {
//             resolver: yupResolver(schema)
//         }
//     );

//     // console.log("errors", errors);


//     const headers = {
//         'Authorization': 'Bearer akhil@intertoons.com', // Bearer token
//         'Content-Type': 'application/json' // Assuming the content type is JSON
//     };


//     const onSubmit = (data: any) => {

//         axios.post(`${BASE_URL}send-otp`, {
//             mobile: data?.phone,
//             otp_type: "login"
//         }, { headers }
//         ).then((res) => {
//             // console.log("res", res?.statusText)
//             setGetMobile(data?.phone)
//             res?.statusText == "OK" ? setShowForm("verifyotp") : ''
//         }
//         )
//     }


//     return (
//         <Grid container sx={{
//             display: showForm == "OTP" ? 'flex' : 'none'
//         }}>
//             <form style={{ width: '100%' }} action="" onSubmit={handleSubmit(onSubmit)}>
//                 <Grid container>

//                     <Typography sx={{
//                         fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                         fontWeight: 600, fontFamily: POPUP_FONT
//                     }}>Phone Number</Typography>

//                     <Grid container sx={{
//                         border: '1px solid #D0D5DD',
//                         borderRadius: 1, mt: 1,
//                     }}>

//                         <Grid container xs={10} sm={10} md={10} lg={10} sx={{
//                             bgcolor: '',
//                             height: { xs: 40, sm: 40, md: 50, lg: 40 }
//                         }}>
//                             <input
//                                 type="number" placeholder="1234567890"
//                                 style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
//                                 name="phone"
//                                 {...register("phone")}
//                             />
//                         </Grid>

//                         <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

//                             <Grid
//                                 component='img' src="/Assets/icons/inputcloseIcon.png"
//                                 sx={{ height: 18 }}
//                             />


//                         </Grid>

//                     </Grid>

//                     <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.phone?.message}</Typography>


//                 </Grid>

//                 <Grid container
//                     // onClick={() => setShowForm("verifyotp")}
//                     sx={{
//                         bgcolor: PRIMARY_BGCOLOUR,
//                         borderRadius: 2,
//                         height: { xs: 40, sm: 40, md: 50, lg: 40 },
//                         mt: 2.5
//                     }}>

//                     <button type="sumbit" className="login_sumbitBtn">
//                         <Typography sx={{
//                             fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
//                             color: '#FFF'
//                         }}>Send OTP</Typography>
//                     </button>

//                 </Grid>

//             </form>

//         </Grid>
//     )
// }

// // EnterOtp

import React from 'react';
import { BASE_URL, POPUP_FONT, PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
import { Grid, Typography } from "@mui/material";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

export default function LoginWithOtp(props) {
    const { showForm, setShowForm, getMobile, setGetMobile } = props;

    const schema = yup.object().shape({
        phone: yup.string().required("Mobile is required"),
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
        axios.post(`${BASE_URL}send-otp`, {
            mobile: data?.phone,
            otp_type: "login"
        }, { headers })
        .then((res) => {
            setGetMobile(data?.phone);
            res?.statusText === "OK" ? setShowForm("verifyotp") : '';
        });
    };

    return (
        <Grid container sx={{ display: showForm === "OTP" ? 'flex' : 'none' }}>
            <form style={{ width: '100%' }} action="" onSubmit={handleSubmit(onSubmit)}>
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
                                type="number" placeholder="1234567890"
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

                <Grid container sx={{
                    bgcolor: PRIMARY_BGCOLOUR,
                    borderRadius: 2,
                    height: { xs: 40, sm: 40, md: 50, lg: 40 },
                    mt: 2.5
                }}>
                    <button type="submit" className="login_sumbitBtn">
                        <Typography sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                            color: '#FFF'
                        }}>Send OTP</Typography>
                    </button>
                </Grid>
            </form>
        </Grid>
    );
}
