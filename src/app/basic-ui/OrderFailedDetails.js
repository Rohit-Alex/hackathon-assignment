import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { columns, demoData } from "../../constants";
import TableLayout from "../Table/Table";
import { getTodosList } from "./ApiCalls";
import "./OrderFailedDetails.scss";
import { Button } from "react-bootstrap";

const OrderFailedDetails = () => {
  const { eventId = "" } = useParams();
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const mountFunction = async () => {
    // notificationHandler({
    //   message: "Hi, MG",
    //   description: "Leaving so soon",
    //   key: "getTodo",
    // });
    let response = [];
    try {
      const data = await getTodosList();
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
  console.log(apiData);
  useEffect(() => {
    mountFunction();
  }, []);

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
            <TableLayout
              className="table-info"
              loading={isLoading}
              data={demoData}
              columns={columns}
              pagination
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderFailedDetails;
