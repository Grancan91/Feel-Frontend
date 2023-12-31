import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

function Intro1() {

    const navigate = useNavigate()

    const handleDay = () => {
        localStorage.setItem('reminder_freq', 1)
        navigate('/intro2')
    }

    const handleWeek = () => {
        localStorage.setItem('reminder_freq', 7)
        navigate('/intro2')
    }

    const handleMonth = () => {
        localStorage.setItem('reminder_freq', 30)
        navigate('/intro2')
    }

    return (
        <>
            {/* Container */}
            <div className='flex flex-col w-screen h-screen items-center md:justify-center'>

                {/* Title and Cards Container */}
                {/* Title */}
                <h1 className="antialiased text-lg text-center font-bold my-4 md:text-lg lg:text-2xl">Select Record Frequency of Reminders</h1>
                {/* Step Container */}
                <div className='flex gap-16'>
                    <div className='w-8 h-8 md:w-10 md:h-10 border rounded-full flex justify-center items-center bg-blue-dark text-white'>
                        <p>1</p>
                    </div>
                    <div className='w-8 h-8 md:w-10 md:h-10 border rounded-full flex justify-center items-center'>
                        <p>2</p>
                    </div>
                </div>
                {/* Card Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:p-4 md:mx-8 lg:mx-3 text-center">
                    {/* Card 1 */}

                    <motion.div
                        initial={{ opacity: 0, y: -400 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="p-4 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border hover:bg-slate-200" onClick={handleDay}>
                        <div className="bg-cover bg-top h-96 rounded-lg md:h-48 lg:h-96" style={{ backgroundImage: 'url("../../src/assets/calendar1.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-lg font-bold mb-2 md:mx-2">Daily Diary Register</h2>
                        <p className="antialiased text-gray">Keep track of your daily activities and important information with the Daily Register feature.</p>
                        <button className='antialiased  hover:bg-blue bg-blue-dark rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: -300 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border hover:bg-slate-200" onClick={handleWeek}>
                        <div className="bg-cover bg-top h-96 rounded-2xl md:h-48 lg:h-96 cursor-pointer" style={{ backgroundImage: 'url("../../src/assets/calendar2.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-lg font-bold mb-2 md:mx-2">Weekly Diary Register</h2>
                        <p className="antialiased text-gray">Develop the ability to identify and understand recurring emotional patterns within yourself and others. </p>
                        <button className='antialiased  hover:bg-blue bg-blue-dark rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </motion.div>
                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} className="p-6 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border hover:bg-slate-200" onClick={handleMonth}>
                        <div className="bg-cover bg-top h-96 rounded-2xl md:h-48 lg:h-96 cursor-pointer" style={{ backgroundImage: 'url("../../src/assets/calendar3.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-lg font-bold mb-2 md:mx-2">Monthly Diary Register</h2>
                        <p className="antialiased text-gray">Collaborate with your healthcare provider to actively participate in your own well-being</p>
                        <button className='antialiased bg-blue-dark  hover:bg-blue rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Intro1