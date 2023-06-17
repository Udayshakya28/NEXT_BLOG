"use client";

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { parse } from 'postcss';
import ProfileCard from '@components/ProfileCard';
const Blog = () => {

    const [data, setAllData] = useState([]);
    const [creator, setcreator] = useState();

    const params = useParams();


    const fetchBlog = async (props) => {
        // const { blogId } = router.query;
        const blogId = params.id
        const response = await fetch(`/api/blog/${blogId}`);
        const data = await response.json();
        setcreator(data.creator);
        setAllData(JSON.parse(data.data));

    };
    useEffect(() => {
        fetchBlog();
    }, [])

    return (
        <div className="blog-page">
            {data?.map((item, index) => {
                if (item.type === 'Title') {
                    return <h1 h1 key={index} className='head_text text-left mb-5' >
                        <span className='blue_gradient'>{item.value}</span>
                    </h1>

                }
                else if (item.type === 'Wallpaper') {

                    return <div className='flex flex-center flex-justify'><img key={index} className="wallpaper w-3/4 mb-4" src={item.value} alt="Wallpaper" /></div>;
                }
                else if (item.type === 'Description') {
                    return (
                        <h3 key={index} className="desc mb-4" alt="Wallpaper" >
                            {item.value}
                        </h3>
                    );

                }
                else if (item.type === 'Image') {
                    return (<img key={index} className="wallpaper mb-4" src={item.value} alt="Wallpaper" />);
                }

                else if (item.type === 'SecondaryTitle') {
                    return (
                        <h3 key={index} className="text-4xl mb-4"  >
                            {item.value}
                        </h3>
                    )
                }

            })}


            <ProfileCard data={creator} />
        </div >

    )
}

export default Blog
