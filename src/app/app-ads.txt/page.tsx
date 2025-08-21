import fetchBlob from "@/services/fetchBlob";
import { ListBlobResultBlob } from "@vercel/blob";

export default async function PublishAppAdsPage() {
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/app-ads`)
  ).json();
  if (response.success) {
    const listBlobs = response.data;
    const appAdsBlob = (listBlobs as ListBlobResultBlob[]).find(
      (blob) => blob.pathname === "app-ads.txt"
    );
    if (appAdsBlob) {
      const blob = await fetchBlob(appAdsBlob.url + "?v=123456");
      const text = (await blob?.text()) ?? "";
      return <>{text}</>;
    }
  }

  <div></div>;
}
