"use client";
import React, { FC } from "react";
import * as FEAAS from "@sitecore-feaas/clientside/react";

const Button = ({ text, variant, size, onClick }) => {
  let buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  // Apply styles based on variant
  switch (variant) {
    case "outline":
      buttonStyle = {
        ...buttonStyle,
        border: "2px solid #007bff",
        color: "#007bff",
      };
      break;
    case "solid":
      buttonStyle = {
        ...buttonStyle,
        backgroundColor: "#007bff",
        color: "#fff",
      };
      break;
    case "link":
      buttonStyle = {
        ...buttonStyle,
        backgroundColor: "transparent",
        color: "#007bff",
      };
      break;
    default:
      break;
  }

  return (
    <>
      <button>
        <span>This is sample text from D</span>
      </button>
    </>
  );
};

FEAAS.registerComponent(Button, {
  name: "StaticButton",
  title: "Our own BYOC Button",
  description: "Description of my static Button component",
  thumbnail:
    "https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58",
  group: "D Section",
  type: "object",
  properties: {
    text: {
      type: "string",
      title: "Text",
    },
    variant: {
      type: "string",
      title: "Variant",
    },
    size: {
      type: "string",
      title: "Size",
    },
  },
});

export default Button;
