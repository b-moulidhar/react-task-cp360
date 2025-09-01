import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarGraphModal = ({ date, data, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "25%",
        width: "50%",
        background: "#fff",
        padding: "10px 20px",
        border: "1px solid #000",
        zIndex: 1000,
      }}
    >
      <h2>Data for {date}</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="user" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <button
        onClick={onClose}
        style={{
          marginTop: "20px",
          padding: "5px 10px",
          background: "#2773F5",
          color: "white",
          borderRadius: "8px",
          border: "1px",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default BarGraphModal;
