import { readStaticFile, writeStaticFile } from "@/services/fileService";
import wrapErrorHandling from "@/utils/wrapErrorHandling";

export const GET = (request: Request) => {
  return wrapErrorHandling(request, () => {
    const appAdsFile = readStaticFile("/app-ads.txt");
    return Response.json({ success: true, data: appAdsFile.toString() });
  });
};

export async function POST(request: Request) {
  const data = request.body?.toString();
  if (!data) return Response.json({ error: "empty request body" });
  writeStaticFile("/app-ads.txt", data);
  return Response.json({ success: true });
}
