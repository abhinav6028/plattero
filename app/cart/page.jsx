"use client"
import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import CartCounter from "../Components/CartCounter";
import BillDetails from "../Components/BillDetails";
import { useEffect, useState } from "react";
import getUsersData from "../hooks/useFetchData";
import axios from "axios";

export default function Home() {


    const [fetchedData, setFetchedData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {

    //         const result = await getUsersData('V1/carts/mine?latitude=4.103389900&longitude=9.742897300');
    //         setFetchedData(result?.data);

    //     }

    //     fetchData()
    // }, []);

    // console.log("fetchedData", fetchedData);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pappad.intertoons.com/api/V1/carts/mine?latitude=4.103389900&longitude=9.742897300', {
                    headers: {
                        'Authorization': 'Bearer A2RKM0hDxbkALRe1rz09azXXtSzETW5zwoxI5okuhQ4N9HAlqlD3pVSZ43r5Eco6MVINkXd7k6biOuL0',
                        'Content-Type': 'application/json'
                        // Add any other headers you need
                    }
                });
                // console.log(">>>>>>>>>>>>>>>>>>>>>>>")
                setFetchedData(response?.data?.data)
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle errors here
            }
        };

        fetchData();
    }, []);

    // console.log("fetchedData??????????", fetchedData?.cartitems)

    // {fetchedData?.address?.split(',').reverse()[1]},{fetchedData?.address?.split(',').reverse()[0]}
    return (
        <Grid container sx={{
            mt: { xs: 35, sm: 30, md: 10, lg: 16 },
            justifyContent: 'center', alignItems: 'center', bgcolor: "", my: 20
        }}>

            <Grid container xs={11} sm={11} md={10} lg={9} bgcolor="" sx={{
                // bgcolor: { xs: 'green', sm: 'blue', md: 'orange', lg: "red" }
            }}>

                <Typography sx={{
                    fontSize: 30,
                    fontFamily: TERNARY_FONT,
                    fontWeight: 'bold',
                    py: .5,
                    borderBottom: `1px solid #D3D3D3`,
                    width: "100%"
                }}>
                    Cart
                </Typography>

                <Grid container sx={{
                    mt: { xs: 2, lg: 3 },
                    py: 2,
                    borderBottom: `1px dashed #D3D3D3`,
                    alignItems: 'center', justifyContent: 'space-between'
                }}>

                    <Box display="flex">

                        <Box
                            component="img"
                            src={fetchedData?.cart?.restaurant?.logo}
                            sx={{
                                height: { xs: 70, sm: 90, md: 100, lg: 80 },
                                width: { xs: 70, sm: 90, md: 100, lg: 80 },
                                borderRadius: 2
                            }}
                        />

                        <Box sx={{ ml: { xs: 2, lg: 3 } }}>

                            <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 19, md: 20, lg: 18 }, fontWeight: 700, }}>{fetchedData?.cart?.restaurant?.name} </Typography>
                            <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 13, md: 16, lg: 14 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR }}>Burgers, Beverages </Typography>
                            <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 14, sm: 15, md: 18, lg: 16 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, mt: .5 }}>
                                {fetchedData?.cart?.restaurant?.address?.split(',').reverse()[1]},{fetchedData?.cart?.restaurant?.address?.split(',').reverse()[0]}
                            </Typography>

                        </Box>

                    </Box>

                    <Typography
                        sx={{
                            fontSize: { xs: 15, sm: 15, md: 20, lg: 14 },
                            color: PRIMARY_BGCOLOUR, border: `1px solid #A3238E`,
                            cursor: 'pointer',
                            py: { xs: .5, sm: 1.5, md: 1.5, lg: 1 },
                            px: { xs: .5, sm: 4, md: 3, lg: 2 }, borderRadius: 2,
                            mt: { xs: 1.5, sm: 0, md: 0, lg: 0 }
                        }}>View Full Menu
                    </Typography>

                </Grid>



                <Grid container sx={{
                    bgcolor: '',
                    mt: { xs: 1.5, sm: 2, md: 2.4, lg: 3 },
                    justifyContent: { xs: "center", sm: 'center', md: 'center', lg: 'space-between' },
                    alignItems: '', width: 'fit-content'
                }}>

                    <Grid container md={9} lg={8} bgcolor="" sx={{ height:'fit-content' }}>
                        {
                            fetchedData?.cartitems?.map((data, index) =>

                                <Grid container bgcolor="" alignItems='center' justifyContent="" sx={{
                                    mt: index > 0 ? 2.5 : 0
                                }}>


                                    <Grid container xs={2} sm={3} md={2} lg={2} bgcolor="" sx={{
                                        justifyContent: { xs: "", sm: 'center', md: 'start', lg: 'start' }
                                    }}>
                                        <Grid
                                            container
                                            xs={12} sm={8} md={9} lg={9}
                                            component="img"
                                            src={data?.menu_img}

                                        />
                                    </Grid>

                                    <Grid container xs={6.5} sm={6} md={7} lg={7} bgcolor="">

                                        <Grid container bgcolor="" md={8} lg={9}>
                                            <Typography sx={{
                                                fontSize: { xs: 16, sm: 20, md: 15, lg: 20 },
                                                fontWeight: 500,
                                                fontFamily: TERNARY_FONT,
                                                ml: 2
                                            }}>
                                                {data?.name}
                                            </Typography>
                                        </Grid>

                                        <Grid container bgcolor="" md={4} lg={3} justifyContent="start" >

                                            <CartCounter
                                                menuId=""
                                                quantity={data?.qty}
                                                xs={9} lg={12} />

                                        </Grid>

                                    </Grid>

                                    <Grid container xs={3.5} sm={3} md={3} lg={3} bgcolor="" sx={{ alignItems: 'center', justifyContent: 'end ' }}>

                                        <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 14, sm: 15, md: 18, lg: 16 }, fontWeight: "500", color: "", mt: .5 }}>₹ {data?.price} </Typography>

                                    </Grid>

                                </Grid>

                            )
                        }
                    </Grid>



                    <Grid container xs={10} sm={9} md={7} lg={3.6} bgcolor="" sx={{
                        mt: { xs: 4, md: 0, sm: 5, lg: "" }, justifyContent: 'center'
                    }}>

                        <Grid container sx={{
                            my: { xs: 3, sm: 4, md: 6, lg: 0 },
                            py: { xs: 3, sm: 4, md: 4, lg: 0 }, justifyContent: 'center',
                            borderRadius: 1, boxShadow: "",
                            border: '1px solid #D9D9D9',

                        }}>
                            <Grid container xs={11} sm={11} md={10} lg={11} >

                                <Grid container xs={11} sm={11} md={10} lg={11}>
                                    <BillDetails />
                                </Grid>



                            </Grid>
                        </Grid>




                        <Link href="/checkout" style={{ width: "100%", textDecoration: 'none' }}>
                            <Grid container sx={{
                                justifyContent: 'center',
                                bgcolor: PRIMARY_BGCOLOUR, mt: 2, borderRadius: 1
                            }}>
                                <Typography sx={{
                                    fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 19, md: 20, lg: 18 }, fontWeight: '',
                                    py: 1.5,
                                    color: "#FFF",
                                    "&: hover": {
                                        fontWeight: 'bold'
                                    }
                                }}>
                                    Proceed To Checkout
                                </Typography>

                            </Grid>
                        </Link>


                    </Grid>



                </Grid>




            </Grid>
        </Grid >
    )
}