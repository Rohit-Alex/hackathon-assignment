import React, { useEffect, useState } from "react";
import { Breadcrumb, Timeline } from "antd";
import "./EventDetails.scss";
import { useHistory } from "react-router-dom";
import { Data, eventFlowDummyData } from "../../constants";
import { Button } from "react-bootstrap";
import { getEventList } from "./ApiCalls";
import Spinner from "../shared/Spinner";
import { camelToSnakeCase } from "../../utils";

const EventDetails = () => {
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
      // const data = await getEventList();
      const {
        data: { flowWithCounts },
      } = eventFlowDummyData;
      console.log(flowWithCounts);
      setApiData(flowWithCounts);
      response[0] = flowWithCounts;
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
    <div className="Orders-details">
      <div className="page-header back-icn-ctn ">
        <div className="header-left-part">
          <span
            className="mdi mdi-arrow-left back-arrow"
            onClick={() => {
              history.goBack();
            }}
          />
          <h4 className="back-div-header" style={{ color: "" }}>
            1P & 3P Orders Flow
          </h4>
        </div>
        <div className="header-right-part">
          <Breadcrumb separator=">" className="bread-crumb">
            <Breadcrumb.Item onClick={() => history.push("/")}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>1P & 3P Order</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="header-info">
                <span>
                  <h4 className="card-title event-details">Event Details</h4>
                </span>
                <span>
                  <Button onClick={() => mountFunction()}>Refresh</Button>
                </span>
              </div>
              <hr />
              <div className="template-demo">
                <Timeline>
                  {apiData.map((e, idx) => (
                    <React.Fragment key={idx}>
                      <Timeline.Item
                        color="green"
                        onClick={() => {
                          // history.push(`/orderDetails?eventId=${e.eventList}`)
                          history.push(`/orderDetails/${e.eventList}`);
                        }}
                      >
                        <button className="btn-inverse-primary button-list">
                          <span>{camelToSnakeCase(e.stage)}</span>
                          <span className="badge badge-inverse-primary badge-pill numbers-id">
                            {e.count}
                          </span>
                        </button>
                      </Timeline.Item>
                    </React.Fragment>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
