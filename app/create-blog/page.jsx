"use client";


import { useState } from 'react';
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const BlogCreatorPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [blogData, setBlogData] = useState([
    // { type: 'categorie', value: "" }
    { type: 'Title', value: '' }, // title input field
    { type: 'Wallpaper', value: '' }, // Wallpaper input field
    { type: 'Description', value: '' }, // Description input field
  ]);
  const [submitting, setIsSubmitting] = useState(false);

  const handleInputChange = (index, name, value) => {
    // console.log({ index, name, value });
    setBlogData((prevState) => {
      const updatedData = [...prevState];
      updatedData[index] = { ...updatedData[index], [name]: value };
      return updatedData;
    });
    // console.log(blogData);
  };


  const handleAddInput = () => {
    setBlogData((prevState) => [...prevState, { type: '', value: '' }]);
    // console.log(prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/blog/new", {
        method: "POST",
        body: JSON.stringify({
          data: JSON.stringify(blogData),
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push("/");
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
        <span className='blue_gradient'>Blog Creator</span>
      </h1>
      {/* <h1 className="head_text text-left"></h1> */}
      <p className="desc text-left max-w-md">
        Create and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
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
        <div className="flex-end mx-3 mb-5 gap-4">
          {/* <select
            id="small"
            className="block w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="type"
            value={input.type}
            onChange={(e) => handleInputChange(1, "type", e.target.value)}
          >
            <option value="">Choose a type</option>
            <option value="Title">Title</option>
            <option value="SecondaryTitle">SecondaryTitle</option>
            <option value="Description">Description</option>
            <option value="Image">Image</option>
            <option value="Wallpaper">Wallpaper</option>
          </select> */}
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
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `creating...` : "create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreatorPage;




{/* <div className="mb-4" key={index}>
              <label className="block mb-2">
                Type:
                <select
                  name="type"
                  value={input.type}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-full px-4 py-2 border rounded"
                >
                  <option value="">Select Type</option>
                  <option value="title">title</option>
                  <option value="wallpaper">Wallpaper</option>
                  <option value="desc">Description</option>
                </select>
              </label>

              <label className="block mb-2">{input.type.charAt(0).toUpperCase() + input.type.slice(1)}:</label>
              <input
                type="text"
                name={input.type}
                value={input.value}
                onChange={(e) => handleInputChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
            </div> */}