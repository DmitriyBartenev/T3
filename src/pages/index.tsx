import React from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { type NextPage } from "next";

import { PageLayout } from "~/components/Layout";
import { CreatePost } from "~/components/CreatePost";
import { Feed } from "~/components/Feed";

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  api.posts.getAll.useQuery();

  if (!userLoaded) return <div />;

  return (
    <PageLayout>
      <div className="flex border-b border-slate-400 p-4">
        {!isSignedIn && (
          <div className="flex justify-center">
            <SignInButton />
          </div>
        )}
        {isSignedIn && <CreatePost />}
      </div>
      <Feed />
    </PageLayout>
  );
};

export default Home;
