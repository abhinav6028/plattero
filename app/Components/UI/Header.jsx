// "use client"
// import { Box, Grid, Typography } from "@mui/material";
// import HeaderDropDown from "../HeaderDropDown";
// import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
// import Popup from "reactjs-popup";
// import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
// import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
// import { useEffect, useState } from "react";
// import CloseSharpIcon from '@mui/icons-material/CloseSharp';
// import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
// import Link from "next/link";
// import useFetchData from "@/app/hooks/useFetchData";
// import getData from "@/app/hooks/useFetchData";

// import Cookies from 'js-cookie'



// export default function Header(props: any) {

//     const A = Cookies.get("locations")

//     const { showLogin, setShowLogin } = props

//     const dropItems = [
//         { name: '', URL: '', icon: '' },
//         { name: '', URL: '', icon: '' },
//         { name: '', URL: '', icon: '' },
//         { name: '', URL: '', icon: '' },
//         { name: '', URL: '', icon: '' },
//         { name: '', URL: '', icon: '' },
//     ]

//     const menuItems = [
//         {
//             category: 'Demos',
//             path: '',
//             subCategory: [
//                 { categoryName: 'one', path: '' },
//                 { categoryName: 'one', path: '' },
//                 { categoryName: 'one', path: '' },
//                 { categoryName: 'one', path: '' },
//             ]
//         },
//         {
//             category: 'any',
//             path: '',
//             subCategory: [
//                 { categoryName: 'one', path: '' }
//             ]
//         },

//     ]

//     const [clickedItem, setClickedItem] = useState()
//     const [handleDisplay, setHandleDisplay] = useState(false)
//     const [handleMenuBtn, setHandleMenuBtn] = useState(true)

//     const filterdMenu = menuItems?.filter((data, index) => clickedItem == index)

//     return (
//         <Grid container sx={{
//             justifyContent: 'center',
//             position: 'fixed', top: 0, left: 0, zIndex: 10, py: 2,
//             boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
//             // display: { xs: 'none', sm: 'none', md: "flex", lg: 'flex' },
//             bgcolor: '#FFF',
//         }}>

//             <Grid container sm={11} md={11} lg={11} bgcolor="">

//                 <Grid container md={4.5} lg={3} display='flex' alignItems="center" bgcolor="" justifyContent="space-between" sx={{ py: 2 }}>

//                     <Link href="/">
//                         <Box
//                             component='img'
//                             src="/Assets/logo.png"
//                             alt="Main Logo"
//                             sx={{
//                                 width: 150, bgcolor: '',
//                                 cursor: 'pointer',

//                             }}
//                         />
//                     </Link>

//                     <Grid bgcolor="">

//                         <Popup trigger=
//                             {
//                                 <Box sx={{
//                                     bgcolor: PRIMARY_BGCOLOUR,
//                                     px: .5,
//                                     borderRadius: 1

//                                 }}>

//                                     {
//                                         handleMenuBtn ?
//                                             <MenuTwoToneIcon
//                                                 onClick={() => setHandleMenuBtn(!handleMenuBtn)}
//                                                 sx={{
//                                                     cursor: 'pointer',
//                                                     mt: .5,
//                                                     color: '#FFF',
//                                                     fontSize: { xs: 30, sm: 40, md: 20 }
//                                                 }}
//                                             /> :
//                                             <CloseSharpIcon
//                                                 onClick={() => setHandleMenuBtn(!handleMenuBtn)}
//                                                 sx={{
//                                                     cursor: 'pointer',
//                                                     mt: .5,
//                                                     color: '#FFF',

//                                                 }}
//                                             />
//                                     }

//                                 </Box>
//                             }
//                             position="bottom center">

//                             <Grid container sx={{ justifyContent: 'center' }}>

//                                 {
//                                     menuItems?.map((data, index) =>

//                                         <Grid container md={11} lg={11}
//                                             onClick={
//                                                 () => {
//                                                     setClickedItem(index)
//                                                     setHandleDisplay(!handleDisplay)
//                                                 }
//                                             }
//                                             sx={{
//                                                 bgcolor: "",
//                                                 cursor: 'pointer',
//                                                 my: .6
//                                             }}>

//                                             <Grid container sx={{
//                                                 alignItems: "center",
//                                                 justifyContent: 'space-between',
//                                             }}>

//                                                 <Typography sx={{
//                                                     fontSize: 15,
//                                                     fontWeight: 'bold'
//                                                 }}>ITEM NAME </Typography>

//                                                 <Box>
//                                                     {handleDisplay && clickedItem == index ? <ArrowDropUpSharpIcon /> : <ArrowDropDownSharpIcon />}
//                                                 </Box>

//                                             </Grid>

//                                             <Grid container sx={{
//                                                 display: handleDisplay && clickedItem == index ? 'flex' : 'none'
//                                             }}>

//                                                 {
//                                                     filterdMenu[0]?.subCategory?.map(data =>
//                                                         <Grid container>
//                                                             <Typography sx={{
//                                                                 fontSize: 14,
//                                                                 my: 0.5,
//                                                                 fontWeight: 'bold'
//                                                             }}>{data?.categoryName?.toUpperCase()}</Typography>
//                                                         </Grid>
//                                                     )
//                                                 }


//                                             </Grid>

//                                         </Grid>
//                                     )
//                                 }


//                             </Grid>
//                         </Popup>
//                     </Grid>






//                 </Grid>





//                 <Grid container md={7.5} lg={9} sx={{ bgcolor: '', alignItems: 'center', ml: 'auto', justifyContent: 'center' }}>



//                     <Grid container xs={8} md={6.5} lg={6.5} bgcolor="" alignItems='center' sx={{
//                         zIndex: 200, justifyContent: 'center'
//                     }}>

//                         <HeaderDropDown
//                             dropItems={dropItems}
//                             title="FEEL LIKE EATING"
//                             type="dishes"

//                         />


//                         {/* <HeaderDropDown
//                             dropItems={dropItems}
//                             title="TAKE LOCATION"
//                         /> */}

//                         <Grid container xs={10} sm={10} md={6} lg={6}>
//                             <Typography sx={{
//                                 fontSize: { md: 11, lg: 14 },
//                                 fontWeight: 700, mt: .2,
//                                 color: SECONDARY_TEXTCOLOUR, width: '100%',
//                                 textAlign: 'center', bgcolor: ''
//                             }}>
//                                 {Cookies.get("locations")}
//                             </Typography>

//                         </Grid>

//                     </Grid>

//                     <Box sx={{
//                         display: 'flex',
//                         ml: { xs: '', sm: '', md: 'auto', lg: "auto" },
//                         alignItems: 'center', bgcolor: '',
//                         my: 1,
//                     }}>

//                         <Typography
//                             onClick={() => setShowLogin(!showLogin)}
//                             sx={{
//                                 mr: 2,
//                                 fontSize: 14,
//                                 fontWeight: 'bold',
//                                 cursor: 'pointer'
//                             }}>
//                             LOGIN / REGISTER
//                         </Typography>


//                         <Typography sx={{
//                             bgcolor: PRIMARY_BGCOLOUR,
//                             py: 1, px: 2, borderRadius: 2, fontSize: 15,
//                             fontWeight: '', color: '#FFF', cursor: 'pointer',
//                             "&: hover": {
//                                 bgcolor: 'transparent',
//                                 border: `1px solid ${PRIMARY_BGCOLOUR}`,
//                                 color: PRIMARY_BGCOLOUR,
//                                 transition: '.5s',
//                             }
//                         }}>REGISTER RESTAURANT</Typography>
//                     </Box>


//                 </Grid>



















//             </Grid >

//         </Grid >
//     )
// }








import { Box, Grid, Typography } from "@mui/material";
import HeaderDropDown from "../HeaderDropDown";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Popup from "reactjs-popup";
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { useEffect, useState } from "react";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { PRIMARY_BGCOLOUR, SECONDARY_TEXTCOLOUR } from "@/utils";
import Link from "next/link";
import useFetchData from "@/app/hooks/useFetchData";
import getData from "@/app/hooks/useFetchData";

import Cookies from 'js-cookie'



export default function Header(props) {


    const A = Cookies.get("locations")

    const one = []

    const { showLogin, setShowLogin } = props
    const dropItems = [
        { name: '', URL: '', icon: '' },
        { name: '', URL: '', icon: '' },
        { name: '', URL: '', icon: '' },
        { name: '', URL: '', icon: '' },
        { name: '', URL: '', icon: '' },
        { name: '', URL: '', icon: '' },
    ]

    const menuItems = [
        {
            category: 'Demos',
            path: '',
            subCategory: [
                { categoryName: 'one', path: '' },
                { categoryName: 'one', path: '' },
                { categoryName: 'one', path: '' },
                { categoryName: 'one', path: '' },
            ]
        },
        {
            category: 'any',
            path: '',
            subCategory: [
                { categoryName: 'one', path: '' }
            ]
        },

    ]

    const [clickedItem, setClickedItem] = useState()
    const [handleDisplay, setHandleDisplay] = useState(false)
    const [handleMenuBtn, setHandleMenuBtn] = useState(true)

    const filterdMenu = menuItems?.filter((data, index) => clickedItem == index)

    return (
        <Grid container sx={{
            justifyContent: 'center',
            position: 'fixed', top: 0, left: 0, zIndex: 10, py: 2,
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            // display: { xs: 'none', sm: 'none', md: "flex", lg: 'flex' },
            bgcolor: '#FFF',
        }}>

            <Grid container sm={11} md={11} lg={11} bgcolor="">

                <Grid container md={4.5} lg={3} display='flex' alignItems="center" bgcolor="" justifyContent="space-between" sx={{ py: 2 }}>

                    <Link href="/">
                        <Box
                            component='img'
                            src="/Assets/logo.png"
                            alt="Main Logo"
                            sx={{
                                width: 150, bgcolor: '',
                                cursor: 'pointer',

                            }}
                        />
                    </Link>

                    <Grid bgcolor="">

                        <Popup trigger=
                            {
                                <Box sx={{
                                    bgcolor: PRIMARY_BGCOLOUR,
                                    px: .5,
                                    borderRadius: 1

                                }}>

                                    {
                                        handleMenuBtn ?
                                            <MenuTwoToneIcon
                                                onClick={() => setHandleMenuBtn(!handleMenuBtn)}
                                                sx={{
                                                    cursor: 'pointer',
                                                    mt: .5,
                                                    color: '#FFF',
                                                    fontSize: { xs: 30, sm: 40, md: 20 }
                                                }}
                                            /> :
                                            <CloseSharpIcon
                                                onClick={() => setHandleMenuBtn(!handleMenuBtn)}
                                                sx={{
                                                    cursor: 'pointer',
                                                    mt: .5,
                                                    color: '#FFF',

                                                }}
                                            />
                                    }

                                </Box>
                            }
                            position="bottom center">

                            <Grid container sx={{ justifyContent: 'center' }}>

                                {
                                    menuItems?.map((data, index) =>

                                        <Grid container md={11} lg={11}
                                            onClick={
                                                () => {
                                                    setClickedItem(index)
                                                    setHandleDisplay(!handleDisplay)
                                                }
                                            }
                                            sx={{
                                                bgcolor: "",
                                                cursor: 'pointer',
                                                my: .6
                                            }}>

                                            <Grid container sx={{
                                                alignItems: "center",
                                                justifyContent: 'space-between',
                                            }}>

                                                <Typography sx={{
                                                    fontSize: 15,
                                                    fontWeight: 'bold'
                                                }}>ITEM NAME </Typography>

                                                <Box>
                                                    {handleDisplay && clickedItem == index ? <ArrowDropUpSharpIcon /> : <ArrowDropDownSharpIcon />}
                                                </Box>

                                            </Grid>

                                            <Grid container sx={{
                                                display: handleDisplay && clickedItem == index ? 'flex' : 'none'
                                            }}>

                                                {
                                                    filterdMenu[0]?.subCategory?.map(data =>
                                                        <Grid container>
                                                            <Typography sx={{
                                                                fontSize: 14,
                                                                my: 0.5,
                                                                fontWeight: 'bold'
                                                            }}>{data?.categoryName?.toUpperCase()}</Typography>
                                                        </Grid>
                                                    )
                                                }


                                            </Grid>

                                        </Grid>
                                    )
                                }


                            </Grid>
                        </Popup>
                    </Grid>






                </Grid>





                <Grid container md={7.5} lg={9} sx={{ bgcolor: '', alignItems: 'center', ml: 'auto', justifyContent: 'center' }}>



                    <Grid container xs={8} md={6.5} lg={6.5} bgcolor="" alignItems='center' sx={{
                        zIndex: 200, justifyContent: 'center'
                    }}>

                        <HeaderDropDown
                            dropItems={dropItems}
                            title="FEEL LIKE EATING"
                            type="dishes"

                        />


                        {/* <HeaderDropDown
                            dropItems={dropItems}
                            title="TAKE LOCATION"
                        /> */}

                        <Grid container xs={10} sm={10} md={6} lg={6}>
                            <Typography sx={{
                                fontSize: { md: 11, lg: 14 },
                                fontWeight: 700, mt: .2,
                                color: SECONDARY_TEXTCOLOUR, width: '100%',
                                textAlign: 'center', bgcolor: ''
                            }}>
                                {Cookies.get("locations")}
                            </Typography>

                        </Grid>

                    </Grid>

                    <Box sx={{
                        display: 'flex',
                        ml: { xs: '', sm: '', md: 'auto', lg: "auto" },
                        alignItems: 'center', bgcolor: '',
                        my: 1,
                    }}>

                        <Typography
                            onClick={() => setShowLogin(!showLogin)}
                            sx={{
                                mr: 2,
                                fontSize: 14,
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                            LOGIN / REGISTER
                        </Typography>


                        <Typography sx={{
                            bgcolor: PRIMARY_BGCOLOUR,
                            py: 1, px: 2, borderRadius: 2, fontSize: 15,
                            fontWeight: '', color: '#FFF', cursor: 'pointer',
                            "&: hover": {
                                bgcolor: 'transparent',
                                border: `1px solid ${PRIMARY_BGCOLOUR}`,
                                color: PRIMARY_BGCOLOUR,
                                transition: '.5s',
                            }
                        }}>REGISTER RESTAURANT</Typography>
                    </Box>


                </Grid>

            </Grid >

        </Grid >
    )
}
