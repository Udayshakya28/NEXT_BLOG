"use client"


import React, { useState, useEffect } from 'react';
import './events.css';
import Loader from '@components/loader';

const Events = () => {
    const [events, setEvents] = useState();
    const [todayEvents, settodayEvents] = useState();
    const [upcomingEvents, setupcomingEvents] = useState();
    const [isLoading, setisLoading] = useState(true);

    const fetchPosts = async () => {
        setisLoading(true);

        const response = await fetch(`/api/event`);
        const data = await response.json();
        setEvents(data);
        setisLoading(false);

    };

    useEffect(() => {
        const today = new Date(); // Current date

        const filteredTodayEvents = events?.filter((event) => {
            const eventData = JSON.parse(event.data);
            const eventDate = new Date(eventData.Date);
            return eventDate.toDateString() === today.toDateString();
        });

        const filteredUpcomingEvents = events?.filter((event) => {
            const eventData = JSON.parse(event.data);
            const eventDate = new Date(eventData.Date);
            return eventDate > today;
        });

        settodayEvents(filteredTodayEvents);
        setupcomingEvents(filteredUpcomingEvents);
        console.log(todayEvents);
        console.log(upcomingEvents);
    }, [events]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="">
            {
                isLoading ? <Loader /> :
                    <div className="right-content glassmorphism">
                        {todayEvents ?
                            <div className="header flex font-bold text-2xl mt-5">
                                <p className='blue_gradient'>Today's events</p>
                            </div>
                            : ""
                        }

                        {todayEvents?.map((event, key) => {
                            const eventData = JSON.parse(event.data);
                            const formattedDate = formatDate(eventData.Date);
                            // const  = "0:39";
                            const getTime = (timeString) => {
                                const [hour, minute] = timeString.split(":");
                                const date = new Date();
                                date.setHours(hour, minute);

                                return date.toLocaleTimeString([], {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true,
                                });
                            }

                            return (
                                <div className="task-box yellow flex flex-col flex-center lg:flex-row " key={key}>

                                    {/* for mob */}
                                    <p className="w-full font-bold text-xl lg:hidden">{formattedDate}</p>

                                    {/* for lappy */}
                                    <div className="w-48 ml-5 hidden lg:flex lg:flex-center lg:flex-col">

                                        {/* <div className="w-1/12 ml-5 hidden lg:flex lg:flex-center lg:content-center lg:flex-col"> */}
                                        <p className="font-bold text-xl">{formattedDate.split(' ')[1]}</p>
                                        <p className="font-bold">{formattedDate.split(' ')[0]}</p>
                                    </div>

                                    <div className="description-task flex-row justify-start">
                                        <div className="time">{getTime(eventData.startTime)} - {getTime(eventData.endTime)}</div>
                                        <div className="task-name text-xl">{eventData.Title}</div>
                                        <div className="text">{eventData.description}</div>
                                    </div>
                                </div>
                            );
                        })}
                        {upcomingEvents ? <div className="header flex font-bold text-2xl mt-5">
                            <p className='blue_gradient'>Upcoming events</p>
                        </div> : ""}
                        {upcomingEvents?.map((event, key) => {
                            const eventData = JSON.parse(event.data);
                            const formattedDate = formatDate(eventData.Date);
                            // const  = "0:39";
                            const getTime = (timeString) => {
                                const [hour, minute] = timeString.split(":");
                                const date = new Date();
                                date.setHours(hour, minute);

                                return date.toLocaleTimeString([], {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true,
                                });
                            }

                            return (
                                <div className="task-box blue flex flex-col flex-center lg:flex-row " key={key}>

                                    {/* for mob */}
                                    <p className="w-full font-bold text-xl lg:hidden">{formattedDate}</p>

                                    {/* for lappy */}
                                    <div className="w-48 ml-5 hidden lg:flex lg:flex-center lg:flex-col">


                                        {/* <div className="w-1/12 ml-5 hidden lg:flex lg:flex-center lg:content-center lg:flex-col"> */}
                                        <p className="font-bold text-xl">{formattedDate.split(' ')[1]}</p>
                                        <p className="font-bold">{formattedDate.split(' ')[0]}</p>
                                    </div>

                                    <div className="description-task flex-row justify-start">
                                        <div className="time">{getTime(eventData.startTime)} - {getTime(eventData.endTime)}</div>
                                        <div className="task-name text-xl">{eventData.Title}</div>
                                        <div className="text">{eventData.description}</div>
                                    </div>
                                </div>
                            );
                        })}







                    </div>}
        </div>
    );
};

export default Events;