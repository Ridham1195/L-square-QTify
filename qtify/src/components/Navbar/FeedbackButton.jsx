import React from "react";
import Button from "@mui/material/Button";

const FeedbackButton = () => {
  return (
    <div>
      {" "}
      <Button
        variant="contained"
        sx={{
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