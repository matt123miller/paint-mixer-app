import { LoadingIcon } from "@components/atoms";
import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { isLoading, data, error } = trpc.paints.search.useQuery({
    name: "flesh",
  });

  if (isLoading) {
    return <LoadingIcon />;
  }
  if (error) {
    return (
      <div>
        Error occured: <>{error}</>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <p className="text-purple text-white">
          {data ? (
            <code>{JSON.stringify(data.results, null, 2)}</code>
          ) : (
            "Loading tRPC query..."
          )}
        </p>
      </main>
    </>
  );
};

export default Home;
