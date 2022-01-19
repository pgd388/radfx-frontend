import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import Page from '@/templates/Page'
import Hero from '@/modules/directory/Hero';
import DirectoryTabs from '@/modules/directory/Tabs';

export default function Directory() {
  return (
    <Page title="RADFX - directory" >
      <Hero />
      <DirectoryTabs />
    </Page>
  )
}
