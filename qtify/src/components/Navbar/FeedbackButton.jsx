import React from "react";
import Button from "@mui/material/Button";

const FeedbackButton = () => {
  return (
    <div>
      {" "}
      <Button
        variant="contained"
        sx={{
          width: "170px",
          height: "47px",
          backgroundColor: "#121212",
          color: "#34C94B",
          fontWeight: "bold",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#121212", 
          },
        }}
      >
        Give Feedback
      </Button>
    </div>
  );
};

export default FeedbackButton;