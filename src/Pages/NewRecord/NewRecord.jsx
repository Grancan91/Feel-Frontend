import React, { useEffect, useState } from 'react'
import ListCard from '../../Components/ListCard/ListCard'
import ListEmotions from '../../Components/ListEmotions/ListEmotions'
import { saveRecord } from '../../Services/record_service'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

function NewRecord() {

    const [emotions, setEmotions] = useState([])
    const [causes, setCauses] = useState([])
    const [symptoms, setSymptoms] = useState([])
    const [strategies, setStrategies] = useState([])
    const [details, setDetails] = useState('')
    const [record, setRecord] = useState({})
    const navigate = useNavigate()

    //Handle emotions from child ListEmotions
    const handleEmotions = (emotion) => {
        setEmotions(emotion)
    }
    //Handle causes from child ListCard
    const handleCauses = (cause) => {
        setCauses(cause)
    }
    //Handle symptoms from child ListCard
    const handleSymptoms = (symptoms) => {
        setSymptoms(symptoms)
    }
    //Handle strategies from child ListCard
    const handleStrategies = (strategies) => {
        setStrategies(strategies)
    }
    //Handle strategies from child ListCard
    const handleDetails = (input) => {
        setDetails(input.target.value)
    }

    const handleCancel = () => {
        //Go to back
    }
    const handleSave = () => {
        //Call to services to save.
        setRecord({
            "detail": details,
            "emotions": emotions,
            "causes": causes,
            "symptoms": symptoms,
            "strategies": strategies
        })
    }

    const handleRefresh = () =>{
        if (record.emotions) {
            const save = async () =>{
                await saveRecord(record)
            }
            save()
            navigate('/dashboard/SavedRecord')
        }
    }
    
    useEffect(()=>{
        handleRefresh()
    },[record])

    

    return (
        <>
            {/*Container*/}
            <div className='col-span-11 h-screen md:p-4 md:mr-8'>
                {/*Header*/}
                <div className='flex items-center  h-14 md:h-20'>
                    <h1 className='text-xl antialiased font-bold text-gray-dark md:text-3xl'>New Record</h1>
                </div>
                {/*Container Emotions Cards*/}
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='shadow-sm bg-white rounded-lg h-2/12'>
                    <h1 className='p-2 text-xl text-center md:text-2xl'>¿How have you been feeling?</h1>
                    <ListEmotions handleEmotions={handleEmotions} />
                </motion.div>
                {/*Sections Container - Causes, Symptom, Strategy*/}
                <motion.div
                    initial={{ opacity: -50, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className='bg-white my-4 md:h-2/5 md:flex shadow-sm rounded-lg'>
                    <ListCard ListOf='Causes' handleData={handleCauses}/>
                    <ListCard ListOf='Symptoms' handleData={handleSymptoms} />
                    <ListCard ListOf='Strategies' handleData={handleStrategies} />
                </motion.div>
                {/*Sections Container - Causes, Symptom, Strategy*/}
                <motion.div
                    initial={{ opacity: -50, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-white md:h-fit my-0 p-4 md:p-10 gap-2 shadow-sm rounded-lg'>
                        <h2 className='text-lg'>Something important to tell?</h2>
                        <div className='w-full md:flex'>
                    <input onChange={handleDetails} type="text" className='w-full border border-gray rounded-md my-2 p-1 md:p-2 md:text-lg' />
                    {/*Button Container*/}
                    <div className='flex md:w-1/3 justify-between'>
                        <button className='md:w-1/2 antialiased text-red md:text-lg border-red border rounded-xl p-4 py-3 md:mx-4 hover:bg-rose-200'
                            onClick={handleCancel}>
                            Cancel</button>

                        <button className='w-1/2 antialiased bg-green-light rounded-xl p-4 py-3 text-white md:text-lg hover:bg-green'
                            onClick={handleSave}>
                            Save</button>
                    </div>
                                </div>
                </motion.div>
            </div>
        </>
    )
}

export default NewRecord