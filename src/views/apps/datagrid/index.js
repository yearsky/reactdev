// ** React Imports

// ** Context
import { Fragment, React } from 'react'
// import TableZeroConfig from './TableZeroConfig'

// ** Reactstrap Imports
import Breadcrumbs from '@components/breadcrumbs'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import { Row, Col, CardBody, CardHeader, CardTitle, CardText } from 'reactstrap'
import Card from '@components/card-snippet'

import DataGrid, {
    Column,
    Editing,
    Popup,
    Paging,
    Lookup,
    Form
  } from 'devextreme-react/data-grid'
  import 'devextreme-react/text-area'
  import { Item } from 'devextreme-react/form'
  // eslint-disable-next-line no-unused-vars
  import { employees, states } from './data.js'

const DataGridCustomer = () => {
  // ** Context
  return (
    <Fragment>
        <Row>
        <Col sm='12'>
            <Card title='Data Customers'>
            <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
        >
          <Paging enabled={false} />
          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            <Popup title="Employee Info" showTitle={true} width={700} height={525} />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName" />
                <Item dataField="LastName" />
                <Item dataField="Prefix" />
                <Item dataField="BirthDate" />
                <Item dataField="Position" />
                <Item dataField="HireDate" />
                <Item
                  dataField="Notes"
                  editorType="dxTextArea"
                  colSpan={2}
                   />
              </Item>

              <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                <Item dataField="StateID" />
                <Item dataField="Address" />
              </Item>
            </Form>
          </Editing>
          <Column dataField="Prefix" caption="Title" width={70} />
          <Column dataField="FirstName" />
          <Column dataField="LastName" />
          <Column dataField="BirthDate" dataType="date" />
          <Column dataField="Position" width={170} />
          <Column dataField="HireDate" dataType="date" />
          <Column dataField="StateID" caption="State" width={125}>
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="Address" visible={false} />
          <Column dataField="Notes" visible={false} />
        </DataGrid>
            </Card>
        </Col>
        </Row>
  </Fragment>
  )
}

export default DataGridCustomer
