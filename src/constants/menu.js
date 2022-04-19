import axios from "../configs/axios"

export default {
  allmenu: () => axios.get("/menu").then((data) => {
    return data.data
  })
}