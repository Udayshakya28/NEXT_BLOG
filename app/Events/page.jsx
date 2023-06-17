import React from 'react';
import './events.css';
const Events = () => {
    const actionItems = [
        { icon: 'inbox', text: 'Inbox' },
        { icon: 'star', text: 'Today' },
        { icon: 'calendar', text: 'Upcoming' },
        { icon: 'hash', text: 'Important' },
        { icon: 'users', text: 'Meetings' },
        { icon: 'trash', text: 'Trash' }
    ];

    const categoryItems = [
        { icon: 'users', text: 'Family' },
        { icon: 'sun', text: 'Vacation' },
        { icon: 'trending-up', text: 'Festival' },
        { icon: 'zap', text: 'Concerts' }
    ];

    const taskItems = [
        { id: 1, label: 'Dashboard Design Implementation', tag: 'approved', checked: true },
        { id: 2, label: 'Create a userflow', tag: 'progress', checked: true },
        { id: 3, label: 'Application Implementation', tag: 'review', checked: false },
        { id: 4, label: 'Create a Dashboard Design', tag: 'progress', checked: false },
        { id: 5, label: 'Create a Web Application Design', tag: 'approved', checked: false },
        { id: 6, label: 'Interactive Design', tag: 'review', checked: false },
        { id: 7, label: 'Dashboard Design Implementation', tag: 'waiting', checked: false },
        { id: 8, label: 'Create a userflow', tag: 'waiting', checked: false },
        { id: 9, label: 'Application Implementation', tag: 'waiting', checked: false },
        { id: 10, label: 'Create a Dashboard Design', tag: 'waiting', checked: false }
    ];

    return (
        <div className="task-manager">
            {/* <div className="left-bar">
                <div className="upper-part">
                    <div className="actions">
                        <div className="circle"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div className="left-content">
                    <ul className="action-list">
                        {actionItems.map((item, index) => (
                            <li className="item" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`feather feather-${item.icon}`}
                                    viewBox="0 0 24 24">
                                    {item.icon === 'inbox' && (
                                        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                                    )}
                                    {item.icon === 'star' && (
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    )}
                                    {item.icon === 'calendar' && (
                                        <>
                                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                            <path d="M16 2v4M8 2v4m-5 4h18" />
                                        </>
                                    )}
                                    {item.icon === 'hash' && (
                                        <>
                                            <line x1="4" y1="9" x2="20" y2="9" />
                                            <line x1="4" y1="15" x2="20" y2="15" />
                                            <line x1="10" y1="3" x2="8" y2="21" />
                                            <line x1="16" y1="3" x2="14" y2="21" />
                                        </>
                                    )}
                                </svg>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="category-list">
                        {categoryItems.map((item, index) => (
                            <li className="item" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`feather feather-${item.icon}`}
                                    viewBox="0 0 24 24">
                       
                                </svg>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div> */}

            <div className="right-content">
                <div class="header flex font-bold text-2xl mt-5">
                    <p>Today Tasks</p>

                </div>
                <div class="task-box yellow flex flex-colf flex-center lg:flex-row">
                    {/* for mob */}
                    <p className=' w-full font-bold text-xl lg:hidden'>19 JUNE</p>

                    {/* for lappy */}
                    <div className='w-48 ml-5  hidden lg:flex lg:flex-center lg:flex-col'>
                        <p className='font-bold text-xl '>19</p>
                        <p className='font-bold '>JULY</p>

                    </div>
                    <div class="description-task">
                        <div class="time">08:00 - 09:00 AM</div>
                        <div class="task-name text-xl">Product Review</div>
                        <div class="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quas incidunt modi dolor nesciunt labore non mollitia porro vero accusantium! Molestiae excepturi temporibus blanditiis sed mollitia, tempore sit inventore ut esse ex porro. Soluta!
                        </div>
                    </div>

                    {/* <div class="more-button"></div> */}

                </div>
                <div class="task-box yellow flex flex-colf flex-center lg:flex-row">
                    {/* for mob */}
                    <p className=' w-full font-bold text-xl lg:hidden'>19 JUNE</p>

                    {/* for lappy */}
                    <div className='w-48 ml-5  hidden lg:flex lg:flex-center lg:flex-col'>
                        <p className='font-bold text-xl '>19</p>
                        <p className='font-bold '>JULY</p>

                    </div>
                    <div class="description-task">
                        <div class="time">08:00 - 09:00 AM</div>
                        <div class="task-name text-xl">Product Review</div>
                        <div class="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quas incidunt modi dolor nesciunt labore non mollitia porro vero accusantium! Molestiae excepturi temporibus blanditiis sed mollitia, tempore sit inventore ut esse ex porro. Soluta!
                        </div>
                    </div>

                    {/* <div class="more-button"></div> */}

                </div>
                <div class="task-box yellow flex flex-colf flex-center lg:flex-row">
                    {/* for mob */}
                    <p className=' w-full font-bold text-xl lg:hidden'>19 JUNE</p>

                    {/* for lappy */}
                    <div className='w-48 ml-5  hidden lg:flex lg:flex-center lg:flex-col'>
                        <p className='font-bold text-xl '>19</p>
                        <p className='font-bold '>JULY</p>

                    </div>
                    <div class="description-task">
                        <div class="time">08:00 - 09:00 AM</div>
                        <div class="task-name text-xl">Product Review</div>
                        <div class="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quas incidunt modi dolor nesciunt labore non mollitia porro vero accusantium! Molestiae excepturi temporibus blanditiis sed mollitia, tempore sit inventore ut esse ex porro. Soluta!
                        </div>
                    </div>

                    {/* <div class="more-button"></div> */}

                </div>

                <div class="header flex font-bold text-2xl mt-5">
                    <p>Upcoming events</p>

                </div>


                <div class="task-box blue flex flex-colf flex-center lg:flex-row">
                    {/* for mob */}
                    <p className=' w-full font-bold text-xl lg:hidden'>19 JUNE</p>

                    {/* for lappy */}
                    <div className='w-48 ml-5  hiddennt lg:flex lg:flex-center lg:flex-col'>
                        <p className='font-bold text-xl '>19</p>
                        <p className='font-bold '>JULY</p>

                    </div>
                    <div class="description-task">
                        <div class="time">08:00 - 09:00 AM</div>
                        <div class="task-name text-xl">Product Review</div>
                        <div class="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quas incidunt modi dolor nesciunt labore non mollitia porro vero accusantium! Molestiae excepturi temporibus blanditiis sed mollitia, tempore sit inventore ut esse ex porro. Soluta!
                        </div>
                    </div>

                    {/* <div class="more-button"></div> */}

                </div>
                {/* <ul className="task-list">
                    {taskItems.map((item) => (
                        <li className={`item ${item.tag}`} key={item.id}>
                            <div className="checkbox">
                                <input type="checkbox" id={`task-${item.id}`} defaultChecked={item.checked} />
                                <label htmlFor={`task-${item.id}`}></label>
                            </div>
                            <div className="task-details">
                                <span className="task-label">{item.label}</span>
                                <span className={`task-tag ${item.tag}`}>{item.tag}</span>
                            </div>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
};

export default Events;
