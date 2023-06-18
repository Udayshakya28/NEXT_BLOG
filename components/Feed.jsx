"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
import Link from "next/link";
import Loader from "./loader";


const PromptCardList = ({ data, handleTagClick }) => {
  console.log(data);

  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        // <Link href={`/blog/${post._id}`}>
        <PromptCard
          key={post._id}
          ID={post._id}
          data={post}
          tag={post.tags}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};




const Feed = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);


  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const fetchPosts = async () => {
    setisLoading(true);
    const response = await fetch(`/api/blog`);
    const data = await response.json();
    console.log(data);
    const uniqueTags = [...new Set(data.flatMap(item => item.tags))];
    setAllTags(uniqueTags)
    setAllPosts(data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return allPosts.filter(
      (item) =>
        regex.test(JSON.parse(item.data)[0].value) ||
        regex.test(item.tags.join(" "))
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <div>
        {isLoading ? <Loader /> :
          allTags?.map((tag, id) => {
            return (
              <button
                className="bg-transparent hover:bg-black text-grey-700 text-sm  hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded-full m-1"
                key={id}
              >
                {tag}
              </button>
            );
          })}
      </div>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
