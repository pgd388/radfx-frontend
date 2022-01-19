import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Page from '@/templates/Page'
import Hero from '@/modules/about/Hero';

export default function Directory() {
  return (
    <Page title="RADFX - About" >
      <Hero />
    </Page>
  )
}