import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { columnsForMultiSelect } from "../../constants";
import TableLayout from "../Table/Table";
import { getTableData, updateStatus } from "./ApiCalls";
import "./OrderFailedDetails.scss";
import { Button } from "react-bootstrap";
import { camelToSnakeCase, firstLetterCapital } from "../../utils";

const OrderFailedDetails = () => {
  const { eventId = "" } = useParams();
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [clicked, setClicked] = useState({});
  const history = useHistory();

  const mountFunction = async () => {
    let response = [];
    try {
      setIsLoading(true);
      const data = await getTableData(eventId);
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
    setClicked((prev) => ({ ...prev, [clickedData.id]: true }));
    const clonedApiData = JSON.parse(JSON.stringify(apiData));
    const indexPresent = clonedApiData.findIndex(
      (e) => e.id === clickedData.id
    );
    let status = "";
    try {
      const { data: { resolution = "" } = {} } = await updateStatus(
        clickedData?.orderNumber
      );
      status = resolution;
    } catch (err) {
      console.log(err, "err");
    }
    setTimeout(() => {
      if (indexPresent !== -1) {
        clonedApiData[indexPresent].resolution = status;
      }
      setApiData(clonedApiData);

      setClicked((prev) => ({ ...prev, [clickedData.id]: false }));
    }, 700);
  };
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
          <h4 className="back-div-header">
            {camelToSnakeCase(firstLetterCapital(eventId))}
          </h4>
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
              columns={columnsForMultiSelect(clickedHandler, clicked)}
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
