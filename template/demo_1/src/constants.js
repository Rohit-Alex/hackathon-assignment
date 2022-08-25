import { Tag } from "antd";
import React from "react";
export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
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
    eventList: "Payment Charge Success",
    failedEvents: 100,
    number: 1,
  },
  {
    eventList: "Order Created",
    failedEvents: 10,
    number: 2,
  },
  {
    eventList: "Seller Order Initiated",
    failedEvents: 10,
    number: 3,
  },
  {
    eventList: "Reservation Confirmed",
    failedEvents: 90,
    number: 4,
  },
  {
    eventList: "Payment Status Update",
    failedEvents: 13,
    number: 5,
  },
  {
    eventList: "Seller Order Created",
    failedEvents: 19,
    number: 6,
  },
  {
    eventList: "Customer Order Created",
    failedEvents: 11,
    number: 7,
  },
  {
    eventList: "Shipment Status Update",
    failedEvents: 15,
    number: 8,
  },
  {
    eventList: "Seller Shipment Status Changed",
    failedEvents: 12,
    number: 9,
  },
];
