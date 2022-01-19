import React, {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Page from '@/templates/Page'
import Hero from '@/modules/requests/Hero';
import RequestsTabs from '@/modules/requests/Tabs';
import CreateRequest from '@/modules/modals/CreateRequest';

export default function Home() {
  const [is_visible, setIsVisible] = React.useState({modal_create_request: false});

  const toggleVisibility = (id)=> {
    setIsVisible({...is_visible, [id]: !is_visible.id });
  }
  return (
    <Page title="RADFX" >
      <Hero 
      toggleVisibility={toggleVisibility}
      />
      <RequestsTabs />
      <CreateRequest
        id='modal_create_request'
        title='Create request'
        is_visible={is_visible}
        toggleVisibility={toggleVisibility}
      />
    </Page>
  )
}
