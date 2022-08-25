import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { columns, demoData } from "../../constants";
import { notificationHandler } from "../../utils";
import TableLayout from "../Table/Table";
import { getTodosList } from "./ApiCalls";
import "./EventDetails.scss";
import backarrow from '../../assets/images/backarrow.svg'
const EventDetails = () => {
  const { eventId = "" } = useParams();
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory()

  const mountFunction = async () => {
    notificationHandler({
      message: "Hi, MG",
      description: "Leaving so soon",
      key: "getTodo",
    });
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
  useEffect(() => {
    mountFunction();
  }, []);

  return (
    <div className="event-details-container">
      <div className="page-header back-icn-ctn ">
        <div className="header-left-part">
          <img className="back-btn-icon"
            onClick={() => {
              history.goBack()
            }}
            src={backarrow}
            alt="back"
          />
          <h4 className="back-div-header">{eventId}</h4>
        </div>
        <div className="header-right-part">
          <Breadcrumb separator=">" className="bread-crumb">
            <Breadcrumb.Item onClick={() => history.push('/')}>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => history.goBack()}>Orders</Breadcrumb.Item>
            <Breadcrumb.Item>1p_3p</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        
      </div>
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
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
    </div>
  );
};
export default EventDetails;
