"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  // const [post, setPost] = useState({ prompt: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);
  const [tags, setTags] = useState([]);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/blog/${promptId}`);
      const data = await response.json();
      console.log(data);
      setBlogData(JSON.parse(data.data))
      setTags(data.tags.join(","));
    };

    if (promptId) getPromptDetails();
  }, [promptId]);


  const handleInputChange = (index, name, value) => {
    setBlogData((prevState) => {
      const updatedData = [...prevState];
      updatedData[index] = { ...updatedData[index], [name]: value };
      return updatedData;
    });

  };

  const handleTagInputChange = (e) => {
    setTags(e.target.value);
  };


  const handleAddInput = () => {
    setBlogData((prevState) => [...prevState, { type: '', value: '' }]);

  };

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("data updation on the way");

    if (!promptId) return alert("Missing PromptId!");
    const tagArray = tags.split(",");

    try {
      const response = await fetch(`/api/blog/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          Blog: JSON.stringify(blogData),
          tags: tagArray
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="container mx-auto w-full max-w-full flex-start flex-col">
      {/* <section className='w-full max-w-full flex-start flex-col'> */}
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Update Blog</span>
      </h1>
      {/* <h1 className="head_text text-left"></h1> */}
      <p className="desc text-left max-w-md">
        Create and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={updatePrompt}
        className="mt-10 sm:w-full  flex flex-col gap-7 glassmorphism"
      >
        {blogData.map((input, index) => (
          <div className="flex w-full items-center px-3 py-2 rounded-lg bg-gray-50 " key={index}>
            <select
              id="small"
              className="block w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="type"
              value={input.type}
              onChange={(e) => handleInputChange(index, "type", e.target.value)}
            >
              <option value="">Choose a type</option>
              <option value="Title">Title</option>
              <option value="SecondaryTitle">SecondaryTitle</option>
              <option value="Description">Description</option>
              <option value="Image">Image</option>
              <option value="Wallpaper">Wallpaper</option>
            </select>

            <textarea
              id="chat"
              type="text"
              name="inputValue"
              value={input.value}
              onChange={(e) => handleInputChange(index, "value", e.target.value)}
              rows="1"
              className="block mx-4 p-2.5 w-3/4 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>

          </div>
        ))}
        <input
          type="text"
          value={tags}
          onChange={handleTagInputChange}
          placeholder="Enter a tag"
          className="block mx-4 p-2.5 w-3/4 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <div className="flex-end mx-3 mb-5 gap-4">

          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="button"
            onClick={handleAddInput}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            Add input
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm text-semibold bg-primary-orange rounded-full text-white"
          >
            {submitting ? `Updating...` : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePrompt;
