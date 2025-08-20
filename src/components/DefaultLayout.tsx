import TopMenu from "./TopMenu";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}
