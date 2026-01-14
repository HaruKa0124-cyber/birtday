"use client";
import { QRCodeSVG } from "qrcode.react";

export default function QRPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#ff9a9e,#fad0c4)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "#ff4d6d", marginBottom: 20 }}>
          💖 Scan me 💖
        </h2>

        <QRCodeSVG
          value="https://HaruKa0124-cyber.github.io/ https://haruka0124-cyber.github.io/birtday//"
          size={220}
          fgColor="#ff4d6d"
          bgColor="#ffffff"
        />
      </div>
    </div>
  );
}
