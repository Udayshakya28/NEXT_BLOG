"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setisLoading] = useState(true);


  useEffect(() => {
    const fetchPosts = async () => {
      // console.log(session.user.id);
      setisLoading(true);

      const response = await fetch(`/api/users/${session?.user.id}/Blogs`);
      const data = await response.json();
      // console.log(data);
      setMyPosts(data);
      setisLoading(false);

    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/updateBlog?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this Blog?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/blog/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      // isLoading={isLoading}
    />
  );
};

export default MyProfile;
