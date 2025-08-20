import { Button, TextField } from "@mui/material";

export default async function PublishAppAdsPage() {
  const res = await fetch(`http://localhost:3000/api/app-ads`);
  const data = await res.json();
  console.log(data);
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
          defaultValue={data}
        />
        <Button variant="contained" fullWidth>
          Reset
        </Button>
        <Button variant="contained" fullWidth color="error">
          Publish
        </Button>
      </div>
    </div>
  );
}
