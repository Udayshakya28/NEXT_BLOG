"use client";


import { useState } from 'react';
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreateEvent = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [blogData, setBlogData] = useState([
        // { type: 'categorie', value: "" }
        { type: 'Title', value: '' }, // title input field
        { type: 'Wallpaper', value: '' }, // Wallpaper input field
        { type: 'Description', value: '' }, // Description input field
    ]);
    const [submitting, setIsSubmitting] = useState(false);

    // const handleInputChange = (index, name, value) => {
    //     // console.log({ index, name, value });
    //     setBlogData((prevState) => {
    //         const updatedData = [...prevState];
    //         updatedData[index] = { ...updatedData[index], [name]: value };
    //         return updatedData;
    //     });
    //     // console.log(blogData);
    // };
    const handleInputChange = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value
        });
    };

    // const handleAddInput = () => {
    //     setBlogData((prevState) => [...prevState, { type: '', value: '' }]);
    //     // console.log(prevState);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/event/new", {
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
                <span className='blue_gradient'>Schedule Event</span>
            </h1>
            {/* <h1 className="head_text text-left"></h1> */}
            <p className="desc text-left max-w-md mb-5">
                Streamline event planning and scheduling for seamless experiences!
            </p>

            <div class=" sm:max-w-2xl  w-full glassmorphism ">
                <div class="relative px-4  md:mx-0 mb-3 rounded-3xl sm:p-10">
                    <div class="max-w-md mx-auto">

                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="flex flex-col">
                                    <label class="leading-loose">Event Title</label>
                                    <input onChange={handleInputChange} name="Title" type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Date</label>
                                    <input onChange={handleInputChange} name="Date" type="date" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
                                </div>
                                <div class="flex flex-col items-center space-x-4 md:flex-row ">
                                    <div class="flex flex-col w-full md:w-1/2 ">
                                        <label class="leading-loose">Start</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input onChange={handleInputChange} type="time" name="startTime" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020" />
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col w-full md:w-1/2">
                                        <label class="leading-loose">End</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input onChange={handleInputChange} name="endTime" type="time" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020" />
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Event Description</label>
                                    <input onChange={handleInputChange} type="textarea" name="description" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
                                </div>
                            </div>
                            <div class="pt-4 flex items-center space-x-4">
                                <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                </button>
                                <button onClick={handleSubmit} class="bg-primary-orange flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}



        </div>
    )
}

export default CreateEvent


// import React, { useState } from 'react';
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const CreateEvent = () => {
//     const router = useRouter();
//     const { data: session } = useSession();
//     const [blogData, setBlogData] = useState([]);

//     const handleInputChange = (e) => {
//         setBlogData({
//             ...blogData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleAddInput = () => {
//         // Handle adding input fields
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("/api/Events/new", {
//                 method: "POST",
//                 body: JSON.stringify({
//                     data: JSON.stringify(blogData),
//                     userId: session?.user.id,
//                 }),
//             });

//             if (response.ok) {
//                 // router.push("/");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="container mx-auto w-full max-w-full flex-start flex-col">
//             <h1 className='head_text text-left'>
//                 <span className='blue_gradient'>Schedule Event</span>
//             </h1>
//             <p className="desc text-left max-w-md mb-5">
//                 Streamline event planning and scheduling for seamless experiences!
//             </p>

//             <div className="sm:max-w-2xl w-full glassmorphism">
//                 <div className="relative px-4 py-10 md:mx-0 mb-3 rounded-3xl sm:p-10">
//                     <div className="max-w-md mx-auto">
//                         <div className="divide-y divide-gray-200">
//                             <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div className="flex flex-col">
//                                     <label className="leading-loose">Event Title</label>
//                                     <input
//                                         type="text"
//                                         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                                         placeholder="Event title"
//                                         name="title"
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 {/* Other input fields */}
//                             </div>
//                             <div className="pt-4 flex items-center space-x-4">
//                                 <button
//                                     className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
//                                     onClick={() => router.push("/")}
//                                 >
//                                     <svg
//                                         className="w-6 h-6 mr-3"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M6 18L18 6M6 6l12 12"
//                                         ></path>
//                                     </svg>
//                                     Cancel
//                                 </button>
//                                 <button
//                                     className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
//                                     onClick={handleSubmit}
//                                 >
//                                     Create
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateEvent;
