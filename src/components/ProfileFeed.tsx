import React from "react";
import { api } from "~/utils/api";

import { Spinner } from "~/components/Spinner";
import { PostView } from "~/components/PostView";

export const ProfileFeed = (props: { userId: string }) => {
  const { data, isLoading } = api.posts.getPostsByUserId.useQuery({
    userId: props.userId,
  });

  if (isLoading) return <Spinner />;

  if (!data || data.length === 0) return <div>User has not posted yet</div>;

  return (
    <div className="flex flex-col">
      {data.map((fullPost) => (
        <PostView key={fullPost.post.id} {...fullPost} />
      ))}
    </div>
  );
};
