import { motion } from 'framer-motion';
import { Link,Code } from '@heroui/react';
import Marquee from "react-fast-marquee";
import { useState,useEffect } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import NEWS from './Newspage';
import TopHeadlines from './Headlines';
import Navig from './navigate';
import '../App.css';
import { article, path } from 'framer-motion/client';

const Home = () => {
  
  const [articles, setArticles] = useState([]);
  var URL = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=fad69300e628408b848d23759c9d1440';
  var REQ = new Request(URL)
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



  const Routes = createBrowserRouter([
    { path: '/', Element: <><NEWS/></>},
    { path: '/TopHeadlines', Element: <><TopHeadlines/></> },
  ]);
    
  return (
    <>
    <motion.div>
        <motion.nav initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} className='fixed z-10 flex flex-row items-center w-full h-12 gap-2 p-4 text-white bg-slate-900'>
            <p className='font-bold tracking-wider font-Akira text-medium md:text-lg'>Qvis News</p>
            <div className='grow'></div>
            <Link showAnchorIcon href='https://github.com/EnderTonol' isExternal>github</Link>
            <Link showAnchorIcon href='https://www.linkedin.com/in/abdul-quddus-158643273/' isExternal>LinkedIn</Link>
        </motion.nav>
        <motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1}} viewport={{ once: true }} className='flex flex-col items-center justify-center h-[600px] bg-slate-950'>
           <motion.p className='my-2 font-mono text-4xl font-bold text-white md:text-9xl'><span className='text-red-500'>WORLD</span>NEWS</motion.p>
           <Marquee direction='right' speed={40} pauseOnHover><div className='flex flex-row gap-2 overflow-hidden'>{articles.map((itm)=> (<><p className='text-2xl tracking-wider text-white md:text-4xl font-Akira' >{itm.title+ ', '}</p></>))}</div></Marquee>
           <Marquee direction='right' pauseOnHover><div className='flex flex-row gap-2 overflow-hidden'>{articles.map((itm)=> (<><p className='text-xl tracking-wider text-white md:text-2xl font-Akira' >{itm.description + ', '}</p></>))}</div></Marquee>
           <Code color='danger'>This Site is fully Open-Source</Code>
           <Link href='https://github.com/EnderTonol' color='warning' className='pt-2' isExternal showAnchorIcon >GitHub</Link>
           <Navig/>
        </motion.div>
        </motion.div>
    </motion.div>
    <motion.div>
      <RouterProvider router={Routes}/>
    </motion.div>
    </>
  )
}

export default Home