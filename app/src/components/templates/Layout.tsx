import type { SharedProps } from "@typing";
import Head from "next/head";

export type LayoutProps = SharedProps<unknown>;

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Paints</title>
        <meta name="description" content="Help choose your paint colours" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-content-container flex flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div
          className="mx-auto flex min-h-screen w-full flex-col flex-wrap items-center justify-center p-5 py-8 sm:py-16"
          // className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"
        >
          {children}
        </div>
      </main>
    </>
  );
};
