// "use client"
// import { PRIMARY_BGCOLOUR, SECONDARY_BGCOLOUR, SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_BGCOLOUR, TERNARY_FONT } from "@/utils";
// import { Box, Grid, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import Popup from "reactjs-popup";
// import 'animate.css';
// import getData from "../hooks/useFetchData";

// export default function Home() {

//     const [itemCount, setItemCount] = useState(0)
//     const [clickedItem, setClickedItem] = useState([])

//     const [fetchedData, setFetchedData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {

//             const result = await getData('V1/restuarant/114');
//             setFetchedData(result?.data);

//         }

//         fetchData()
//     }, []);

//     return (
//         <Grid container sx={{
//             mt: { xs: 35, sm: 37, md: 15, lg: 20 },
//             justifyContent: 'center', alignItems: 'center', bgcolor: ""
//         }}>

//             {/* <p>{fetchedData?.restaurant_address?.split(',')[words?.split(', ')?.length - 1]}</p> */}

//             <Grid container sx={{
//                 bgcolor: '',
//                 position: "fixed",
//                 top: 550,
//                 zIndex: 400,
//                 left: 0,
//                 justifyContent: 'center'
//             }}>
//                 <Popup trigger={

//                     <Typography sx={{
//                         bgcolor: PRIMARY_BGCOLOUR,
//                         color: '#FFF',
//                         py: { sm: 1.5, xs: 1, md: 1.5, lg: 1.5 },
//                         px: { xs: 2, sm: 2, md: 3, lg: 3 },
//                         borderRadius: 9,
//                         fontSize: { xs: 12, sm: 17, md: 17, lg: 17 },
//                         cursor: 'pointer',
//                         "&: hover": {
//                             bgcolor: 'transparent',
//                             border: `3px solid ${PRIMARY_BGCOLOUR}`,
//                             color: PRIMARY_BGCOLOUR,
//                             transition: '.1s',
//                             fontWeight: 'bold'
//                         }
//                     }}>BROWSE MENU</Typography>
//                 }
//                     // position="bottom center"
//                     modal
//                     contentStyle={{
//                         width: '35%',
//                         '@media (max-width: 960px)': { // Adjust width for smaller screens
//                             width: '80%',
//                         },
//                         '@media (max-width: 600px)': { // Adjust width for even smaller screens
//                             width: '70%'
//                         },
//                     }}
//                 >

//                     <Grid
//                         container
//                         sx={{
//                             justifyContent: 'center', bgcolor: ''
//                         }}>
//                         <Grid container lg={12} sx={{
//                             bgcolor: '',
//                             height: { xs: 130, sm: 200, md: 200, lg: 350 },
//                             justifyContent: 'center'
//                         }} >

//                             <Grid container sx={{
//                                 height: '100%',
//                                 overflowX: 'hidden',
//                                 overflowY: 'auto',
//                                 bgcolor: ''
//                             }}>
//                                 {
//                                     [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]?.map((data, index) =>


//                                         <Grid container sx={{
//                                             my: { xs: .2, sm: .5, md: .8, lg: .6 },
//                                             justifyContent: 'space-between'
//                                         }}>

//                                             <Typography sx={{
//                                                 fontFamily: SECONDARY_FONT,
//                                                 fontSize: { xs: 12, sm: 16, md: 16, lg: 18 },
//                                                 // ml: { xs: 2, sm: 3, md: 3, lg: 4 }
//                                             }}>RAMADAN SPECIAL</Typography>

//                                             <Typography sx={{
//                                                 fontFamily: SECONDARY_FONT,
//                                                 fontSize: { xs: 12, sm: 16, md: 16, lg: 18 },
//                                                 mr: { xs: 2, sm: 3, md: 3, lg: 4 }
//                                             }}>5</Typography>

//                                         </Grid>


//                                     )
//                                 }

//                             </Grid>
//                         </Grid>
//                     </Grid>

//                 </Popup >

//             </Grid>

//             <Grid container xs={11} sm={11} md={9} lg={8} bgcolor="" sx={{}}>

//                 <Grid container sx={{
//                     bgcolor: '', justifyContent: 'space-between', alignItems: 'center',
//                     pb: { xs: 2, lg: 4 },
//                     borderBottom: '1px dashed #D3D3D3'
//                 }}>
//                     <Box>
//                         <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 16, md: 16, lg: 18 }, fontWeight: 700, }}>{fetchedData?.restaurant_name} </Typography>
//                         <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 11, sm: 11, md: 12, lg: 12 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, fontStyle: 'italic' }}>Burgers, Beverages </Typography>
//                         <Typography sx={{ fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 12, md: 14, lg: 14 }, fontWeight: "", color: SECONDARY_TEXTCOLOUR, fontStyle: 'italic' }}>
//                             {fetchedData?.address?.split(',').reverse()[1]},{fetchedData?.address?.split(',').reverse()[0]}</Typography>
//                     </Box>

//                     <Box sx={{
//                         display: '', alignItems: 'center', bgcolor: '', justifyContent: 'center', px: 1.5,
//                         borderRadius: 2,
//                         boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
//                     }}>


//                         <Grid container sx={{
//                             display: 'flex', justifyContent: 'center',
//                             my: { xs: 1, sm: 1.5, md: 2, lg: 2 },
//                             bgcolor: ''
//                         }}>

//                             <Box
//                                 component="img"
//                                 src='/Assets/icons/star.png'
//                                 sx={{
//                                     width: 20,
//                                     height: 20,
//                                     mr: 1
//                                 }}
//                             />

//                             <Typography sx={{
//                                 fontWeight: 'bold',
//                                 fontSize: { lg: 19 }, bgcolor: '', height: 'fit-vontent', color: SECONDARY_BGCOLOUR
//                             }}>4.5</Typography>

//                         </Grid>

//                         <Box
//                             sx={{
//                                 height: 2,
//                                 bgcolor: SECONDARY_TEXTCOLOUR,
//                             }}
//                         />

//                         <Typography sx={{
//                             fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 12, md: 14, lg: 14 }, fontWeight: "bold", color: SECONDARY_TEXTCOLOUR,
//                             my: { xs: 1, sm: 1.5, md: 2, lg: 2 }
//                         }}>
//                             1K+ ratings
//                         </Typography>



//                     </Box>


//                 </Grid>

//                 {
//                     fetchedData?.featured_items?.map((data, index) => {


//                         // const words = data?.restaurant_address?.split(',').reverse()[0]
//                         // console.log("words", words)







//                         return (

//                             <Grid container xs={11} sm={10} md={10} lg={12} sx={{
//                                 my: { xs: 1, sm: 1, md: 1, lg: 1 },
//                                 py: 3,
//                                 borderBottom: `1px solid #D3D3D3}`, bgcolor: ''
//                             }}>

//                                 <Grid container xs={4} sm={3} md={2} lg={2} sx={{ bgcolor: '', alignItems: 'center' }}>

//                                     <Box sx={{
//                                         borderRadius: 3,
//                                         boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', bgcolor: '',

//                                     }}>

//                                         <Grid component='img'
//                                             src={data?.image}
//                                             sx={{
//                                                 height: 100, width: 100,
//                                                 borderTopLeftRadius: 12,
//                                                 borderTopRightRadius: 12

//                                             }} />

//                                         {
//                                             <Grid container>

//                                                 <Grid container onClick={() => { setClickedItem([...clickedItem, index]) }}
//                                                     sx={{
//                                                         justifyContent: 'center', alignItems: 'center', cursor: 'POINTER',
//                                                         display: clickedItem.includes(index) ? 'none' : "flex",

//                                                     }} >
//                                                     <Typography sx={{
//                                                         fontWeight: 'bold', color: PRIMARY_BGCOLOUR,
//                                                         fontSize: { xs: 12, sm: 13, md: 14, lg: 16 }
//                                                     }}>ADD</Typography>
//                                                 </Grid>

//                                                 <Grid container sx={{
//                                                     boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', bgcolor: '',
//                                                     display: clickedItem.includes(index) ? 'flex' : "none",
//                                                     justifyContent: 'space-around'
//                                                 }}>

//                                                     <Grid container xs={4} sm={4} md={4} lg={4} container onClick={() => setItemCount(itemCount - 1)} sx={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>

//                                                         <Box component="img" src="/Assets/icons/mainus.png" />

//                                                     </Grid>

//                                                     <Grid container xs={4} sm={4} md={4} lg={4} container sx={{ justifyContent: 'center', alignItems: 'center', }}>

//                                                         <Typography sx={{ fontWeight: 'bold', color: PRIMARY_BGCOLOUR, fontSize: 20 }}>{itemCount}</Typography>

//                                                     </Grid>


//                                                     <Grid container xs={4} sm={4} md={4} lg={4} container onClick={() => setItemCount(itemCount + 1)} sx={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} >

//                                                         <Box component="img" src="/Assets/icons/plus.png" />

//                                                     </Grid>

//                                                 </Grid>


//                                             </Grid>


//                                         }



//                                     </Box>






//                                 </Grid>

//                                 <Grid container xs={8} sm={9} md={10} lg={10} sx={{ bgcolor: '', alignItems: 'center', }}>

//                                     <Box sx={{
//                                         display: 'flex', flexDirection: 'column', justifyContent: 'end', width: '100%',
//                                         ml: { xs: 1, sm: 1, md: 0, lg: 0 }
//                                     }}>

//                                         <Typography sx={{
//                                             fontFamily: SECONDARY_FONT,
//                                             fontSize: { xs: 12, sm: 16, md: 16, lg: 18 }, fontWeight: 600, width: '100%',
//                                             textAlign: { xs: 'start', sm: 'end', md: 'end', lg: 'end' }
//                                         }}>{data?.name}</Typography>

//                                         <Typography sx={{
//                                             fontFamily: SECONDARY_FONT,
//                                             fontSize: { xs: 11, sm: 15, md: 15, lg: 18 }, fontWeight: 600, ml: { xs: '', sm: 'auto', md: 'auto', lg: 'auto' },
//                                             my: { xs: .3, sm: .3, md: .3, lg: .2 }
//                                         }}>{data?.price}</Typography>

//                                         <Typography sx={{
//                                             textAlign: { xs: 'start', sm: 'end', md: 'end', lg: 'end' },
//                                             width: '90%', bgcolor: '', ml: { xs: '', sm: 'auto', md: 'auto', lg: 'auto' },
//                                             fontSize: { xs: 10, lg: 16 },
//                                             color: SECONDARY_TEXTCOLOUR, fontFamily: TERNARY_FONT,
//                                             // fontSize: { xs: 11, sm: 15, md: 15, lg: 18 }
//                                         }}>
//                                             {data?.description}
//                                         </Typography>

//                                     </Box>


//                                 </Grid>


//                                 {/* <Grid container height={1.1} sx={{
//                             bgcolor: PRIMARY_BGCOLOUR,

//                         }}></Grid> */}

//                             </Grid>
//                         )
//                     }
//                     )
//                 }
//             </Grid >



//         </Grid >
//     );
// }










"use client"
import { PRIMARY_BGCOLOUR, SECONDARY_BGCOLOUR, SECONDARY_FONT, SECONDARY_TEXTCOLOUR, TERNARY_BGCOLOUR, TERNARY_FONT } from "@/utils";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import 'animate.css';
import getData from "../hooks/useFetchData";

export default function Home() {
    const [itemCount, setItemCount] = useState(0);
    const [clickedItem, setClickedItem] = useState([]);

    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData('V1/restuarant/114');
            setFetchedData(result?.data);
        }

        fetchData();
    }, []);

    console.log("?????????????????", fetchedData);

    return (
        <Grid container sx={{
            mt: { xs: 35, sm: 37, md: 15, lg: 20 },
            justifyContent: 'center', alignItems: 'center', bgcolor: ""
        }}>

            <Grid container sx={{
                bgcolor: '',
                position: "fixed",
                top: 550,
                zIndex: 400,
                left: 0,
                justifyContent: 'center'
            }}>
                <Popup trigger={(
                    <Typography sx={{
                        bgcolor: PRIMARY_BGCOLOUR,
                        color: '#FFF',
                        py: { sm: 1.5, xs: 1, md: 1.5, lg: 1.5 },
                        px: { xs: 2, sm: 2, md: 3, lg: 3 },
                        borderRadius: 9,
                        fontSize: { xs: 12, sm: 17, md: 17, lg: 17 },
                        cursor: 'pointer',
                        "&:hover": {
                            bgcolor: 'transparent',
                            border: `3px solid ${PRIMARY_BGCOLOUR}`,
                            color: PRIMARY_BGCOLOUR,
                            transition: '.1s',
                            fontWeight: 'bold'
                        }
                    }}>BROWSE MENU</Typography>
                )}
                    modal
                    contentStyle={{
                        width: '35%',

                    }}
                >

                    <Grid
                        container
                        sx={{
                            justifyContent: 'center', bgcolor: ''
                        }}>
                        <Grid container lg={12} sx={{
                            bgcolor: '',
                            height: { xs: 130, sm: 200, md: 200, lg: 350 },
                            justifyContent: 'center'
                        }} >

                            <Grid container sx={{
                                height: '100%',
                                overflowX: 'hidden',
                                overflowY: 'auto',
                                bgcolor: ''
                            }}>
                                {
                                    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]?.map((data, index) => (
                                        <Grid container sx={{
                                            my: { xs: .2, sm: .5, md: .8, lg: .6 },
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography sx={{
                                                fontFamily: SECONDARY_FONT,
                                                fontSize: { xs: 12, sm: 16, md: 16, lg: 18 },
                                            }}>RAMADAN SPECIAL</Typography>
                                            <Typography sx={{
                                                fontFamily: SECONDARY_FONT,
                                                fontSize: { xs: 12, sm: 16, md: 16, lg: 18 },
                                            }}>5</Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Popup>
            </Grid>

            <Grid container xs={11} sm={11} md={9} lg={8} bgcolor="" sx={{}}>
                <Grid container sx={{
                    bgcolor: '', justifyContent: 'space-between', alignItems: 'center',
                    pb: { xs: 2, lg: 4 },
                    borderBottom: '1px dashed #D3D3D3'
                }}>
                    <Box>
                        <Typography sx={{
                            fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 16, md: 16, lg: 18 }, fontWeight: 700,
                        }}>{fetchedData?.restaurant_name}</Typography>
                        <Typography sx={{
                            fontFamily: TERNARY_FONT, fontSize: { xs: 11, sm: 11, md: 12, lg: 12 }, color: SECONDARY_TEXTCOLOUR, fontStyle: 'italic'
                        }}>Burgers, Beverages</Typography>
                        <Typography sx={{
                            fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 12, md: 14, lg: 14 }, color: SECONDARY_TEXTCOLOUR, fontStyle: 'italic'
                        }}>
                            {fetchedData?.address?.split(',').reverse()[1]},{fetchedData?.address?.split(',').reverse()[0]}</Typography>
                    </Box>
                    <Box sx={{
                        display: '', alignItems: 'center', bgcolor: '', justifyContent: 'center', px: 1.5,
                        borderRadius: 2,
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                    }}>
                        <Grid container sx={{
                            display: 'flex', justifyContent: 'center',
                            my: { xs: 1, sm: 1.5, md: 2, lg: 2 },
                            bgcolor: ''
                        }}>
                            <Box
                                component="img"
                                src='/Assets/icons/star.png'
                                sx={{
                                    width: 20,
                                    height: 20,
                                    mr: 1
                                }}
                            />
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: { lg: 19 }, bgcolor: '', height: 'fit-vontent', color: SECONDARY_BGCOLOUR
                            }}>4.5</Typography>
                        </Grid>
                        <Box sx={{
                            height: 2,
                            bgcolor: SECONDARY_TEXTCOLOUR,
                        }} />
                        <Typography sx={{
                            fontFamily: TERNARY_FONT, fontSize: { xs: 12, sm: 12, md: 14, lg: 14 }, fontWeight: "bold", color: SECONDARY_TEXTCOLOUR,
                            my: { xs: 1, sm: 1.5, md: 2, lg: 2 }
                        }}>
                            1K+ ratings
                        </Typography>
                    </Box>
                </Grid>
                {fetchedData?.featured_items?.map((data, index) => (
                    <Grid container xs={11} sm={10} md={10} lg={12} sx={{
                        my: { xs: 1, sm: 1, md: 1, lg: 1 },
                        py: 3,
                        borderBottom: `1px solid #D3D3D3}`, bgcolor: ''
                    }}>
                        <Grid container xs={4} sm={3} md={2} lg={2} sx={{ bgcolor: '', alignItems: 'center' }}>
                            <Box sx={{
                                borderRadius: 3,
                                boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', bgcolor: '',
                            }}>
                                <Grid component='img'
                                    src={data?.image}
                                    sx={{
                                        height: 100, width: 100,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12
                                    }} />
                                <Grid container>
                                    <Grid container onClick={() => { setClickedItem([...clickedItem, index]) }}
                                        sx={{
                                            justifyContent: 'center', alignItems: 'center', cursor: 'pointer',
                                            display: clickedItem.includes(index) ? 'none' : "flex",
                                        }}>
                                        <Typography sx={{
                                            fontWeight: 'bold', color: PRIMARY_BGCOLOUR,
                                            fontSize: { xs: 12, sm: 13, md: 14, lg: 16 }
                                        }}>ADD</Typography>
                                    </Grid>
                                    <Grid container sx={{
                                        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', bgcolor: '',
                                        display: clickedItem.includes(index) ? 'flex' : "none",
                                        justifyContent: 'space-around'
                                    }}>
                                        <Grid container xs={4} sm={4} md={4} lg={4} onClick={() => setItemCount(itemCount - 1)} sx={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                            <Box component="img" src="/Assets/icons/mainus.png" />
                                        </Grid>
                                        <Grid container xs={4} sm={4} md={4} lg={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography sx={{ fontWeight: 'bold', color: PRIMARY_BGCOLOUR, fontSize: 20 }}>{itemCount}</Typography>
                                        </Grid>
                                        <Grid container xs={4} sm={4} md={4} lg={4} onClick={() => setItemCount(itemCount + 1)} sx={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} >
                                            <Box component="img" src="/Assets/icons/plus.png" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid container xs={8} sm={9} md={10} lg={10} sx={{ bgcolor: '', alignItems: 'center' }}>
                            <Box sx={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'end', width: '100%',
                                ml: { xs: 1, sm: 1, md: 0, lg: 0 }
                            }}>
                                <Typography sx={{
                                    fontFamily: SECONDARY_FONT,
                                    fontSize: { xs: 12, sm: 16, md: 16, lg: 18 }, fontWeight: 600, width: '100%',
                                    textAlign: { xs: 'start', sm: 'end', md: 'end', lg: 'end' }
                                }}>{data?.name}</Typography>
                                <Typography sx={{
                                    fontFamily: SECONDARY_FONT,
                                    fontSize: { xs: 11, sm: 15, md: 15, lg: 18 }, fontWeight: 600, ml: { xs: '', sm: 'auto', md: 'auto', lg: 'auto' },
                                    my: { xs: .3, sm: .3, md: .3, lg: .2 }
                                }}>{data?.price}</Typography>
                                <Typography sx={{
                                    textAlign: { xs: 'start', sm: 'end', md: 'end', lg: 'end' },
                                    width: '90%', bgcolor: '', ml: { xs: '', sm: 'auto', md: 'auto', lg: 'auto' },
                                    fontSize: { xs: 10, lg: 16 },
                                    color: SECONDARY_TEXTCOLOUR, fontFamily: TERNARY_FONT,
                                }}>
                                    {data?.description}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

