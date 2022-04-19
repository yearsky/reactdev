/* eslint-disable semi */
/* eslint-disable no-unused-vars */
// ** Navigation imports
import apps from "./apps";
import { useState, useEffect } from "react";

// import pages from './pages'
// import forms from './forms'
// import tables from './tables'
import others from "./others";
import testmenu from "./testmenu";
import axios from "axios";

// import useJwt from '@src/auth/jwt/useJwt'
// import menu from '../../constants/menu'
// import charts from './charts'
import dashboards from "./dashboards";
// import uiElements from './ui-elements'

// ** Merge & Export
export default [...dashboards, ...apps, ...others];

// async function getData() {
//    await axios.get('https://api.bintangteknik.id/api/menu').then((res) => {
//         return res.data.data
//    })
//    const data = await getData()
//    console.log(data)
// }
// getData()

// export default [menu]
// woke
// menu.then(function (result) {
//     return resultv
// })
