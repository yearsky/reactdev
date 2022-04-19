/* eslint-disable no-use-before-define */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { Server, Grid, Circle } from "react-feather";
import { useState } from "react";

// const [menu, setMenu] = useState(testmenu);

const testmenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    await axios
      .get(`https://api.bintangteknik.id/api/menu`)
      .then(({ data }) => {
        setMenu(data);
      });
  };
};
export default testmenu;
