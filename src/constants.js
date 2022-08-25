import { Button, Tag } from "antd";
import React from "react";
export const columns = [
  {
    title: "Order Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (_, record) => <Tag>Click</Tag>,
  },
];

export const demoData = [
  {
    userId: 1,
    id: 1,
    key: 0,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    key: 1,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    key: 2,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 5,
    key: 3,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];

export const Data = [
  {
    stage: "paymentChargeSuccess",
    count: 2,
  },
  {
    stage: "orderCreated",
    count: 2,
  },
  {
    stage: "sellerOrderInitiated",
    count: 0,
  },
  {
    stage: "reservationConfirmed",
    count: 0,
  },
  {
    stage: "paymentStatusUpdate",
    count: 0,
  },
  {
    stage: "sellerOrderCreated",
    count: 0,
  },
  {
    stage: "1PCustomerOrderCreated",
    count: 0,
  },
  {
    stage: "1PCustomerOrderAcknowledged",
    count: 0,
  },
  {
    stage: "1PShipmentStatusUpdate",
    count: 0,
  },
  {
    stage: "sellerShipmentStatusChanged",
    count: 0,
  },
  {
    stage: "sellerOrderLineDelivered",
    count: 0,
  },
];

export const eventFlowDummyData = {
  data: {
    flowWithCounts: [
      {
        stage: "paymentChargeSuccess",
        count: 2,
      },
      {
        stage: "orderCreated",
        count: 2,
      },
      {
        stage: "sellerOrderInitiated",
        count: 0,
      },
      {
        stage: "reservationConfirmed",
        count: 0,
      },
      {
        stage: "paymentStatusUpdate",
        count: 0,
      },
      {
        stage: "sellerOrderCreated",
        count: 0,
      },
      {
        stage: "1PCustomerOrderCreated",
        count: 0,
      },
      {
        stage: "1PCustomerOrderAcknowledged",
        count: 0,
      },
      {
        stage: "1PShipmentStatusUpdate",
        count: 0,
      },
      {
        stage: "sellerShipmentStatusChanged",
        count: 0,
      },
      {
        stage: "sellerOrderLineDelivered",
        count: 0,
      },
    ],
  },
};

export const cardData = [
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Orders",
    cardValue: "100",
    cardStats: "Increased by 60%",
    label: "Orders",
    graphData: [20, 40, 15, 35, 25, 50, 30],
    additionalClass: "bg-gradient-danger",
    value: "50%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Payments",
    cardValue: "44",
    cardStats: "Increased by 20%",
    label: "Payments",
    graphData: [50, 20, 25, 35, 20, 40, 30],
    additionalClass: "bg-gradient-info",
    value: "10%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Logistics",
    cardValue: "95",
    cardStats: "Decreased by 10%",
    label: "Logistics",
    graphData: [10, 10, 5, 25, 25, 50, 10],
    additionalClass: "bg-gradient-success",
    value: "20%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Financial",
    cardValue: "190",
    cardStats: "Increased by 12%",
    label: "Financial",
    graphData: [80, 40, 15, 55, 25, 10, 30],
    additionalClass: "bg-gradient-primary",
    value: "40%",
  },
];

export const columnsForMultiSelect = [
  {
    title: "Order Id",
    dataIndex: "id",
  },
  {
    title: "Order Number",
    dataIndex: "orderNumber",
  },
  {
    title: "Current Status",
    dataIndex: "currentStage",
  },
  {
    title: "Previous Status",
    dataIndex: "previousStage",
  },
  {
    title: "Creation Date",
    dataIndex: "createdAd",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    render: (_, record) => (
      <Button
        style={{
          backgroundColor: "none",
          color: "#703fa0",
          fontSize: "13px",
          border: "none",
        }}
      >
        Click
      </Button>
    ),
  },
];
