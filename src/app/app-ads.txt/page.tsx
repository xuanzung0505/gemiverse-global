import { ListBlobResultBlob } from "@vercel/blob";
import { redirect } from "next/navigation";

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
      redirect(appAdsBlob.url);
    }
  }

  return <div>Fetch failed</div>;
}
