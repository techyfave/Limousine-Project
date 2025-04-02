import React, { useEffect } from 'react'
import FaqsComponent from "../components/faqs/FaqsComponent"
import Head from '../components/head/Head'

export default function Faqspage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <Head     
    text="FAQS"
    styling="head"
    textStyle="text"
    bgOverlay="bg-overlay"
    />

    <FaqsComponent />
    
    </div>
  )
}
