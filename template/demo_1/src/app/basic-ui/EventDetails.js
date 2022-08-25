import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { columns, demoData } from "../../constants";
import { notificationHandler } from "../../utils";
import TableLayout from "../Table/Table";
import { getTodosList } from "./ApiCalls";
import "./EventDetails.scss";

const EventDetails = () => {
  const { eventId = "" } = useParams();
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <h4 className=" page-header" style={{ color: "#703fa0" }}>
        {eventId}
      </h4>

      <div className="card">
        <div className="card-body">
          <div className="header-info">
            <span>
              <h4 className="card-title order-failed">Orders Failed</h4>
            </span>
            <span>
              <Button className="btn-inverse-danger ">Refresh</Button>
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
export default EventDetails;
