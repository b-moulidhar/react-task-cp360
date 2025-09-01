import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarGraphModal = ({ date, data, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "17%",
        left: "25%",
        width: "50%",
        background: "#fff",
        padding: "10px 20px",
        border: "1px solid #000",
        borderRadius:"8px",
        zIndex: 1000,
      }}
    >
      <h2 style={{color:"#2A4A85"}}>Data for {date}</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="user" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Bar dataKey="value" fill="#1e276bff" />
      </BarChart>
      <button
        onClick={onClose}
        style={{
          marginTop: "20px",
          padding: "5px 10px",
          background: "#2A4A85",
          color: "white",
          borderRadius: "4px",
          border: "1px",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default BarGraphModal;
