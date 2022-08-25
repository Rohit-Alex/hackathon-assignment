import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { columnsForMultiSelect, dummmyData1 } from "../../constants";
import TableLayout from "../Table/Table";
import { getTableData, updateStatus } from "./ApiCalls";
import "./OrderFailedDetails.scss";
import { Button } from "react-bootstrap";

const OrderFailedDetails = () => {
  const { eventId = "" } = useParams();
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [tempApiData, setTempApiData] = useState(dummmyData1)
  const history = useHistory();

  const mountFunction = async () => {
    let response = [];
    try {
      setIsLoading(true);
      const data = await getTableData();
      setApiData(data);
      response[0] = data;
    } catch (err) {
      response[1] = err;
    } finally {
      setApiData(response);
      setIsLoading(false);
      return response;
    }
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    mountFunction();
  }, []);

  const clickedHandler = async (clickedData) => {
    const dummyData = JSON.parse(JSON.stringify(apiData))
    const indexPresent = dummyData.findIndex(e => e.id === clickedData.id)
    try {
      const { data: { resolution = ''} = {} } = await updateStatus()
      if (indexPresent !== -1) {
        dummyData[indexPresent].resolution = resolution
      }
      setApiData(dummyData)
    } catch (err) {
      console.log(err, 'err')
    }
  }
  return (
    <div className="event-details-container">
      <div className="page-header back-icn-ctn ">
        <div className="header-left-part">
          <span
            className="mdi mdi-arrow-left back-arrow"
            onClick={() => {
              history.goBack();
            }}
          />
          <h4 className="back-div-header">{eventId}</h4>
        </div>
        <div className="header-right-part">
          <Breadcrumb separator=">" className="bread-crumb">
            <Breadcrumb.Item onClick={() => history.push("/")}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => history.goBack()}>
              Orders
            </Breadcrumb.Item>
            <Breadcrumb.Item>1p_3p</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="header-info">
            <span>
              <h4 className="card-title order-failed">Orders Failed</h4>
            </span>
            <span>
              <Button
                className="btn-inverse-danger"
                onClick={() => mountFunction()}
              >
                Refresh
              </Button>
            </span>
          </div>
          <hr />
          <div className="table-container">
            <Button
              className="btn-inverse-danger trigger-btn"
              onClick={() => setSelectedRowKeys([])}
            >
              Trigger Event
            </Button>
            <TableLayout
              loading={isLoading}
              className="table-info"
              rowSelection={rowSelection}
              columns={columnsForMultiSelect(clickedHandler)}
              data={apiData}
              pagination={false}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default OrderFailedDetails;
