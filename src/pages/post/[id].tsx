import React from "react";
import Head from "next/head";
import { type NextPage } from "next";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex h-screen justify-center">
        <h1>Post Page</h1>
      </main>
    </>
  );
};

export default SinglePostPage;
