"use client";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function PublishAppAdsPage() {
  const [data, setData] = useState("");
  const originalData = useRef("");

  const resetAppAds = () => {
    setData(originalData.current);
  };

  const submitAppAds = () => {
    fetch("http://localhost:3000/api/app-ads", {
      // Or an external API URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }), // Data to send
    }).then((response) => {
      if (response.error) console.log(response.error);
    });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/app-ads`)
      .then((res) => res.json())
      .then((response) => {
        if (response.error) console.log(response.error);
        if (response.success) {
          originalData.current = response.data;
          setData(response.data);
        }
      });
  }, []);

  return (
    <div className="publish-app-ads p-2">
      <div className="flex flex-col gap-5 items-center">
        <TextField
          label="app-ads.txt"
          placeholder="Insert your new app-ads here"
          multiline
          rows={25}
          variant="filled"
          fullWidth
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={(e) => {
            resetAppAds();
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="error"
          onClick={(e) => {
            submitAppAds();
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}
