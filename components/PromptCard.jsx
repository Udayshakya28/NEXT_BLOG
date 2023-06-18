"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PromptCard = ({ data, post, ID, tag, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const PostData = JSON.parse(data.data);
  const pathName = usePathname();
  const router = useRouter();
  console.log(data.creator);
  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  // const handleCopy = () => {
  //   setCopied(post.prompt);
  //   navigator.clipboard.writeText(post.prompt);
  //   setTimeout(() => setCopied(false), 3000);
  // };



  return (
    <div className='prompt_card' >
      <Link href={`/blog/${ID}`}>
        <div>
          <img
            src={PostData[1].value}
            alt='user_image'

            width={40}
            height={40}
            className='object-contain w-full mb-4'
          />
        </div>
      </Link>
      <Link href={`/blog/${ID}`}>

        <p className=' font-satoshi font-bold text-lg text-gray-700'>
          {PostData[0].value}
        </p>
      </Link>

      {/* <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >

      </p> */}
      <div>
        {
          tag?.map((tag, id) => {
            return (
              <button
                onClick={() => handleTagClick && handleTagClick(tag)}
                className="bg-transparent hover:bg-black text-grey-700 text-sm  hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded-full m-1"
                key={id}
              >
                #{tag}
              </button>
            );
          })}
      </div>

      {session?.user.id === data.creator?._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
