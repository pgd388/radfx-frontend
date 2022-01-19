import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Page from '@/templates/Page'
import Tabs from '@/modules/schedule/Tabs'
import Hero from '@/modules/schedule/Hero';

const mainFeaturedPost = {
  title: 'Schedule',
  description:
    "Some description of what is being provided via this tool",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'something…',
};

export default function Home() {
  return (
    <Page title="RADFX" >
      <Hero post={mainFeaturedPost} />
      <Tabs />
    </Page>
  )
}
