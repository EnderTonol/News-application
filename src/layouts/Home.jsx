import { motion } from 'framer-motion';
import { Link,Code } from '@heroui/react';
import Marquee from "react-fast-marquee";
import { useState,useEffect } from 'react';
import '../App.css';
import Developer from './Developer';

const Home = () => {
  
  const [articles, setArticles] = useState([]);
  var URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fad69300e628408b848d23759c9d1440'
  var REQ = new Request(URL);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(REQ);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);



    
  return (
    <>
    <motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1}} viewport={{ once: true }} className='flex flex-col items-center justify-center h-[600px] bg-slate-950'>
           <motion.p className='my-2 font-mono text-4xl font-bold text-white md:text-9xl'><span className='text-red-500'>WORLD</span>NEWS</motion.p>
           <Marquee direction='right' speed={40} pauseOnHover><div className='flex flex-row gap-2 overflow-hidden'>{articles.map((itm)=> (<><p className='text-2xl tracking-wider text-white md:text-4xl font-Akira' >{itm.title+ ', '}</p></>))}</div></Marquee>
           <Marquee direction='right' pauseOnHover><div className='flex flex-row gap-2 overflow-hidden'>{articles.map((itm)=> (<><p className='text-xl tracking-wider text-white md:text-2xl font-Akira' >{itm.description + ', '}</p></>))}</div></Marquee>
           <div className='flex items-center flex-col mt-8'>
           <Developer/>
           <Link href='https://github.com/EnderTonol' color='warning' isExternal showAnchorIcon >GitHub</Link>
           </div>
        </motion.div>
    </motion.div>
    </>
  )
}

export default Home