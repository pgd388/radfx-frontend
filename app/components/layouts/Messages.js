import React, {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Page from '@/templates/Page'
import Hero from '@/modules/messages/Hero';
import MessagesTabs from '@/modules/messages/Tabs';

export default function Home() {
  return (
    <Page title="RADFX" >
      <Hero />
      <MessagesTabs />
    </Page>
  )
}
