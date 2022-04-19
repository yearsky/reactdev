/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** Custom Components
import AvatarGroup from "@components/avatar-group";
import React, { Fragment, useState } from "react";
import BreadCrumbs from "@components/breadcrumbs";
import DataGridCustomer from "./DataGridCustomer";
import DataGridUser from "./DataGridUser";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// ** Custom Components
import Card from "@components/card-snippet";
// ** Images

// ** Icons Imports
import { MoreVertical, Edit, Trash } from "react-feather";

const MasterData = () => {
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  return (
    <Fragment>
      <BreadCrumbs
        breadCrumbTitle="Master Data"
        breadCrumbParent="Master"
        breadCrumbActive="Master Data"
      />
      <Row className="match-height">
        <Col sm="12">
          <Card title="Master Data">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={active === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Data Customer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Data User
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="py-50" activeTab={active}>
              <TabPane tabId="1">
                <DataGridCustomer />
              </TabPane>
              <TabPane tabId="2">
                <DataGridUser />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MasterData;
