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
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/app-ads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    }).then((response) => {
      // if (response.error) console.log(response.error);
    });
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/app-ads`)
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
