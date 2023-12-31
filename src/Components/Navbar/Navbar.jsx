import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar({selected = 'Home'}) {

    {/* Style to apply when is Active */ }
    const selectedStyle = 'opacity-100 bg-green rounded-full'

    {/* Set the Style when is Active */}
    const [home, setHome] = useState('opacity-50')
    const [record, setRecord] = useState('opacity-50')
    const [stats, setStats] = useState('opacity-50')
    const [diary, setDiary] = useState('opacity-50')
    const [settings, setSettings] = useState('opacity-100')
    const navigate = useNavigate()
    //const [changeListener, setChangeListener] = useState()



    //Pendiente capturar evento de cambio para establecer array de dependencia.

    const switchStyle = () => {
        if (selected === '/dashboard/home'){
            setHome(selectedStyle)
                
        } else {
            setHome('opacity-50')
        }
        if (selected === '/dashboard/record' || selected === '/dashboard/NewRecord') {
            setRecord(selectedStyle)
        } else {
            setRecord('opacity-50')
        }
        

    }
    
    useEffect(()=>{
        switchStyle()
    },[selected])

    const handleExit = () =>{
        localStorage.clear()
        navigate('/login')
    }

    return (   

            <>
        
            <div className='flex bg-white md:rounded-tr-[30px] items-center md:flex-col md:h-screen md:w-32'>

                {/*'App Icon'*/}
                
                <div className='w-fit h-fit p-2 my-0 mx-2 divide-y md:my-6 md:p-10'>
                    <svg className="w-6 h-6 md:w-10 md:h-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                    </svg>
                </div>
                <hr className='md:w-full bg-gray-dark' />

                {/*'Home Button'*/}
                <Link to={'/dashboard/home'}>
                    <div className={`${home} w-fit h-fit p-2 my-2 mx-2 md:w-fit md:p-4 md:my-8 md:mx-0`}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                </div>
                </Link>
                <Link to={'/dashboard/record'}>
                {/*'Record Button'*/}
                    <div className={`${record} w-fit h-fit p-2 my-2 mx-2 md:w-fit md:p-4 md:my-8 md:mx-0`}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>
                </div>
                </Link>

                {/*'Stats Button'*/}
              
                <div className={`${stats} w-fit h-fit p-2 my-2 mx-2 md:w-fit md:p-14 md:mx-0`}>
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18">
                        <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6" />
                    </svg>
                </div>
               

                {/*'Calendar Button'*/}
                <div className={`${diary} w-fit h-fit p-2 my-2 mx-2 md:w-fit md:p-14 md:mx-0`}>
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                    </svg>
                </div>
                <div className='w-full h-full'></div>
                {/*'Options Button'*/}
                <div onClick={handleExit} className={`${settings} w-fit h-fit p-2 my-2 mx-2 md:w-fit md:p-14 md:mx-0 cursor-pointer`}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                        <path stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                    </svg>
                    <div className='text-xl my-2'>Exit</div>
                </div>
            </div>
        </>
    )
}

export default Navbar