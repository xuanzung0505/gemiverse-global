import { readStaticFile, writeStaticFile } from "@/services/fileService";

export async function GET(request: Request) {
  const appAdsFile = readStaticFile("/app-ads.txt");
  return Response.json(appAdsFile.toString());
}

export async function POST(request: Request) {
  const data = request.body?.toString();
  if (!data) return Response.json({ error: "empty request body" });
  writeStaticFile("/app-ads.txt", data);
  return Response.json({ success: true });
}
