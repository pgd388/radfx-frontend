import React, {useEffect, useState} from 'react';
import * as API from '@radfx-api';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Page from '@/templates/Page'
import Hero from '@/modules/profile/Hero';
import TesterTabs from '@/modules/profile/tester/Tabs';
import IntegratorTabs from '@/modules/profile/integrator/Tabs';

export default function Home() {
  const [user_type, setUserType] = useState('logged_out')
  const [user, setUser] = useState({
    created_at: "",
    updated_at: "",
    first_name: "",
    last_name: "",
    phone: "",
    user_name: "",
    id: 0,
    full_name: "",
    email: "",
    role: "",
    verified_at: "",
    disabled_at: "",
    deleted_at: ""
  })
  const [integrators, setIntegrators] = useState({
    "page": 1,
    "per_page": 20,
    "total_page": 1,
    "total_count": 1,
    "data": [
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Rhea",
        "last_name": "Pontus",
        "affiliation": {name: 'mda', description: 'missles'},
        "phone": "1234567890",
        "name": "Rhea",
        "id": 0,
        "full_name": "Rhea Pontus",
        "email": "Rhea@radfx.com",
        role: "integrator",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      },
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Enid",
        "last_name": "Xanthos",
        "affiliation": {name: 'mda', description: 'missles'},
        "phone": "1234567890",
        "name": "Enid",
        "id": 1,
        "full_name": "Enid Xanthos",
        "email": "Enid@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      }
    ]
  })
  const [facilites, setFacilities] = useState({
    "page": 1,
    "per_page": 20,
    "total_page": 1,
    "total_count": 1,
    "data": [
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Korrine",
        "last_name": "Diggory",
        "phone": "1234567890",
        "name": "lbnl",
        "id": 0,
        "facility": "Lawrence Berkeley National Laboratory",
        "email": "lbl@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      },
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Odetta",
        "last_name": "Ryder",
        "phone": "1234567890",
        "name": "tamu",
        "id": 2,
        "facility": "Texas A&M University",
        "email": "tamu@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      },
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Corinna",
        "last_name": "Riny",
        "phone": "1234567890",
        "name": "nsrl",
        "id": 0,
        "facility": "NASA Space Radiation Laboraty",
        "email": "nsrl@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      },
    ]
  })
  const [testers, setTesters] = useState({
    "page": 1,
    "per_page": 20,
    "total_page": 1,
    "total_count": 2,
    "data": [
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Viraja",
        "last_name": "Jagadisha",
        "affiliation": "",
        "phone": "1234567890",
        "name": "tester_0",
        "id": 0,
        "full_name": "Viraja Jagadisha",
        "email": "Viraja@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      },
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Hildr",
        "last_name": "Sigrún",
        "affiliation": "",
        "phone": "1234567890",
        "name": "tester_1",
        "id": 1,
        "full_name": "Hildr Sigrún",
        "email": "Hildr@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      }
    ]
  })
  const [requests, setRequests] = useState({
    "page": 1,
    "per_page": 20,
    "total_page": 1,
    "total_count": 3,
    "data": [
      {
        "creator": {
          "name": "tester_1",
          "id": 1,
          "full_name": "Hildr Sigrún",
          "phone": "1234567890",
          "email": "Hildr@radfx.com",
        },
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "name": "space corn",
        "id": 0,
        "description": "mars vegitation",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z",
        status: 'scheduled'
      },
      {
        "creator": {
          "name": "tester_1",
          "id": 1,
          "full_name": "Hildr Sigrún",
          "phone": "1234567890",
          "email": "Hildr@radfx.com",
        },
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "name": "space rats",
        "id": 1,
        "description": "mars fauna",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z",
        status: 'requested'
      },
      {
        "creator": {
          "name": "tester_1",
          "id": 1,
          "full_name": "Hildr Sigrún",
          "phone": "1234567890",
          "email": "Hildr@radfx.com",
        },
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "name": "space chacolate",
        "id": 2,
        "description": "mars bars",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z",
        status: 'cancelled'
      },
    ]
  })
  async function fetchDataUser() {
    const result = await API.getUser(1);
    console.log(result)
    setUser(result.data);
    console.log(result.data)
  }
  useEffect(() => {
    fetchDataUser()
    }, [])
    
  return (
    <Page title="RADFX" >
      <Hero name={user.user_name} role={"user"}/>
      {/* <span> agengy tabs</span>
      <AgencyTabs /> */}
      <span> integrator tabs</span>
      <IntegratorTabs user={user}/>
      <span> tester tabs</span>
      <TesterTabs />
    </Page>
  )
}
