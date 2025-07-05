import { opacity, SpacingToken } from "@once-ui-system/core";

export const mailchimp = {
  action: "https://your-mailchimp-endpoint.com", // coloque seu action real

  effects: {
    mask: {
      x: "-50%",
      y: "-50%",
      radius: "100%",
      cursor: "pointer",
    },
    gradient: {
      display: true,
      opacity: "medium" as opacity,
      x: "50%",
      y: "50%",
      width: "200%",
      height: "200%",
      tilt: 15,
      colorStart: "#0ff",
      colorEnd: "#f0f",
    },
    dots: {
      display: true,
      opacity: "low" as opacity,
      size: "xxs" as SpacingToken,
      color: "#ccc",
    },
    grid: {
      display: true,
      opacity: "low" as opacity,
      color: "#999",
      width: "100px",
      height: "100px",
    },
    lines: {
      display: true,
      opacity: "low" as opacity,
      size: "xs" as SpacingToken,
      thickness: 1,
      angle: 45,
      color: "#aaa",
    },
  },
};
