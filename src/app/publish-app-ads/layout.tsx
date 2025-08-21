import DefaultLayout from "@/components/DefaultLayout";

export default function PublishAppAdsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
