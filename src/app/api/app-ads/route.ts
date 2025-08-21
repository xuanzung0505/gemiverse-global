import { getFile, uploadFile } from "@/services/blobService";
import wrapErrorHandling from "@/utils/wrapErrorHandling";

export const GET = wrapErrorHandling(async () => {
  const result = await getFile("/app-ads.txt");
  return Response.json({ success: true, data: result });
});

export const POST = wrapErrorHandling(async (request) => {
  const body = await request.json();
  if (!body) return Response.json({ error: "empty request body" });
  const { data } = body;
  const result = await uploadFile("app-ads.txt", data);
  // writeStaticFile("/app-ads.txt", data);
  return Response.json({ success: true, result });
});
