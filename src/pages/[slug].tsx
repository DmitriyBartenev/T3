import React from "react";
import Head from "next/head";
import { type NextPage } from "next";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <h1>Profile Page</h1>
      </main>
    </>
  );
};

export default ProfilePage;