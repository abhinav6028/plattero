import { SECONDARY_TEXTCOLOUR, POPUP_FONT, PRIMARY_BGCOLOUR, BASE_URL } from "@/utils";
import { Grid, Typography } from "@mui/material";
import * as yup from 'yup';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

export default function SignUpForm(props) {

    const { showForm, setShowForm, setGetMobile, getMobile } = props

    // setGetMobile={setGetMobile} getMobile={getMobile}

    const schema = yup.object({
        fullname: yup.string().required("Name is required!").min(2, "Name is too short").max(10, "Name is too long"),
        email: yup.string().email().required("email is required"),
        phone: yup.string().required("Mobile is required"),
        Password: yup.string().required("password is required").min(6, "Password should minimum 6 lettrs ")
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

    const onSubmit = (data) => {

        // console.log(":::::::::::::::::::");

        setShowForm("verifyotpWithRegister")


        axios.post(`${BASE_URL}customers`, {
            email: data.email,
            password: data.Password,
            first_name: data.fullname,
            last_name: 'Intertoons', // Assuming last_name is always 'Intertoons'
            phone: data.phone,
            ref_code: ''
        }, { headers }
        ).then((res) => {
            // console.log("res", res);
            res?.statusText == "OK" ? setShowForm("verifyotpWithRegister") : ''
            // setShowForm("verifyotpWithRegister")
            setGetMobile(data.phone)
        })
    }

    return (
        <Grid container md={12} lg={12}>

            <form action="" style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>


                <Grid container sx={{ bgcolor: '' }}>

                    <Typography sx={{
                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                        fontWeight: 600, fontFamily: POPUP_FONT
                    }}>Full Name</Typography>

                    <Grid container sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: 1, mt: .5,
                    }}>

                        <Grid container xs={10} sm={10} md={10} lg={10} sx={{
                            bgcolor: '',
                            height: { xs: 40, sm: 40, md: 50, lg: 40 }
                        }}>
                            <input
                                type="text"
                                placeholder="Name"
                                style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
                                name="fullname"
                                {...register("fullname")}
                            // register={{  }}
                            />
                        </Grid>

                        <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

                            <Grid
                                component='img' src="/Assets/icons/inputcloseIcon.png"
                                sx={{ height: 18 }}
                            />


                        </Grid>

                    </Grid>
                    <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.fullname?.message}</Typography>
                </Grid>

                <Grid container sx={{ bgcolor: '', mt: 1 }}>

                    <Typography sx={{
                        fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                        fontWeight: 600, fontFamily: POPUP_FONT
                    }}>Email ID</Typography>

                    <Grid container sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: 1, mt: .5,
                    }}>

                        <Grid container xs={10} sm={10} md={10} lg={10} sx={{
                            bgcolor: '',
                            height: { xs: 40, sm: 40, md: 50, lg: 40 }
                        }}>
                            <input
                                type="email" placeholder="debra.holt@example.com"
                                style={{ textIndent: "10px", color: SECONDARY_TEXTCOLOUR }}
                                name="email"
                                {...register("email")}
                            />
                        </Grid>

                        <Grid container xs={2} sm={2} md={2} lg={2} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center" }}>

                            <Grid
                                component='img' src="/Assets/icons/inputcloseIcon.png"
                                sx={{ height: 18 }}
                            />


                        </Grid>

                    </Grid>

                    <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.email?.message}</Typography>


                </Grid>


                <Grid container sx={{ bgcolor: '', mt: 1 }}>

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
                                type="number"
                                placeholder="0123456789"
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

                <Grid container sx={{ bgcolor: '', mt: 1 }}>

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
                                component='img' src="/Assets/icons/inputcloseIcon.png"
                                sx={{ height: 18 }}
                            />

                        </Grid>

                    </Grid>

                    <Typography sx={{ fontSize: { xs: 11, sm: 15, md: 20, lg: 12 }, mt: .3, color: PRIMARY_BGCOLOUR, fontWeight: 600, fontFamily: POPUP_FONT }}>{errors?.Password?.message}</Typography>


                </Grid>

                <Grid container
                    // onClick={() => setShowForm("verifyotp")}
                    sx={{
                        bgcolor: PRIMARY_BGCOLOUR,
                        borderRadius: 2,
                        height: { xs: 40, sm: 40, md: 50, lg: 40 },
                        mt: 2.5
                    }}>

                    <button type="submit" style={{ background: "" }} className="login_sumbitBtn">
                        <Typography sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 15 },
                            color: '#FFF', fontFamily: POPUP_FONT
                        }}>Register</Typography>
                    </button>

                </Grid>

            </form>
        </Grid>
    )
}