import React from "react";
import { api } from "~/utils/api";

import { Spinner } from "~/components/Spinner";
import { PostView } from "~/components/PostView";

export const Feed = () => {
  const { data, isLoading: postsLoading } = api.posts.getAll.useQuery();

  if (postsLoading) return <Spinner />;

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-col">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};
