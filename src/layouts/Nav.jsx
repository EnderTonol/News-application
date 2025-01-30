import React from 'react'
import { motion } from "framer-motion";
import { Link,Button,Divider } from '@heroui/react';
import Developer from './Developer'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure
} from "@heroui/react";

const Nav = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div className='flex flex-col gap-2'>
    <motion.nav initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} className='fixed z-10 flex flex-row items-center w-full h-14  gap-6 p-4 text-white bg-slate-900'>
            <Link href='/' className='font-bold tracking-wider font-Akira text-medium md:text-lg text-white'>Qvis News</Link>
            <div className='grow'></div>
            <div className='hidden md:flex gap-2'>
            <Link href="/" className='font-sans text-medium  text-slate-300'>Breaking News</Link>
            <Link href="/headlines" className='font-sans text-medium  text-slate-300'>Headlines</Link>
            <Link href="/tech-news" className='font-sans text-medium  text-slate-300'>Tech News</Link>
            <Link href="/industrial-news" className='font-sans text-medium text-slate-300'>Industrial News</Link>
            <Link href="/bbc-headlines" className='font-sans text-medium  text-slate-300'>BBC HeadLines</Link>
            <Link href="/bbc" className='font-sans text-medium  text-slate-300'>BBC News</Link>
            </div>
    <Button className='visible md:hidden bg-white' size='sm' onPress={()=>onOpen()}>Discover</Button>
    </motion.nav>
      <Drawer isOpen={isOpen} onOpenChange={()=>onOpenChange()} size='xs'>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">NEWS INFO</DrawerHeader>
              <DrawerBody>
              <Link href="/" className='font-sans text-lg '>Breaking News</Link>
              <Link href="/headlines" className='font-sans text-lg '>Headlines</Link>
              <p className='text-tiny font-thin'>Catagory</p>
              <Link href="/tech-news" className='font-sans text-lg '>Tech News</Link>
              <Link href="/industrial-news" className='font-sans text-lg '>Industrial News</Link>
              <p className='text-tiny font-thin'>BBC News</p>
              <Link href="/bbc-headlines" className='font-sans text-lg '>BBC HeadLines</Link>
              <Link href="/bbc" className='font-sans text-lg '>BBC News</Link>
              </DrawerBody>
              <Divider/>
              <DrawerFooter className='flex flex-col gap-2'>
                <Developer/>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    
                
                
    
    </div>
    </>
  )
}

export default Nav