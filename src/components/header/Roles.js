import React,{useEffect} from 'react'
// import { motion} from "framer-motion"
import Typewriter from 'typewriter-effect';

const Roles = ({roles,role,setRole}) => {
    useEffect(()=>{
        let timer =setInterval(()=>{
          if(role===roles.length-1){
            setRole(0)
          }
          else
          setRole(role+1)
          // console.log(role)
        },1800)
        return ()=>{
            clearInterval(timer)
        }
      },[role, roles.length, setRole])
  return (
      <>
{/*      <motion.h4 key={roles[role]} className='text-light'
      initial={{ scale: 0 , rotate:90}}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >{roles[role]}</motion.h4>*/}
{ /*     <Typewriter 
        onInit={typewriter=>{
            typewriter.typeString('Hello')
            .pauseFor(1500)
            .deleteAll()
            .typeString('Youtube')
            .start()

        }}
    />*/}
    <Typewriter 
    options={{
        strings:roles,
        autoStart:true,
        loop:true,
        deleteSpeed:2,
        delay:90
    }}
    /> 
      </>
  )
}

export default Roles