import { readStaticFile, writeStaticFile } from "@/services/fileService";
import wrapErrorHandling from "@/utils/wrapErrorHandling";

export const GET = wrapErrorHandling(async () => {
  const appAdsFile = readStaticFile("/app-ads.txt");
  return Response.json({ success: true, data: appAdsFile.toString() });
});

export const POST = wrapErrorHandling(async (request) => {
  const body = await request.json();
  if (!body) return Response.json({ error: "empty request body" });
  const { data } = body;
  writeStaticFile("/app-ads.txt", data);
  return Response.json({ success: true });
});
