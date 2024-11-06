
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const components = {
  ameerpet: dynamic(() => import('../components/Branches/ameerpet'), { ssr: false }),
  dilshuknagar: dynamic(() => import('../components/Branches/dilshuknagar')),
  ecil: dynamic(() => import('../components/Branches/ecil')),
  kukatpally: dynamic(() => import('../components/Branches/kukatpally')),
  madhapur: dynamic(() => import('../components/Branches/madhapur')),
  medipally: dynamic(() => import('../components/Branches/medipally')),
  miyapur: dynamic(() => import('../components/Branches/miyapur')),
  secunderabad: dynamic(() => import('../components/Branches/secunderabad')),
  shamshabad: dynamic(() => import('../components/Branches/shamshabad')),
  ramanthapur: dynamic(() => import('../components/Branches/ramanthapur')),
  gachibowli: dynamic(() => import('../components/Branches/gachibowli')),
};

const metadata = {

  ameerpet: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Discover Hyderabad at your own pace with self-drive cars in Ameerpet',
    ogDescription: 'Discover Hyderabad at your own pace with self-drive cars in Ameerpet',
  },

  dilshuknagar: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Convenient Availability of Self-Driving Cars in Dilsukhnagar',
    ogDescription: "Convenient Availability of Self-Driving Cars in Dilsukhnagar",
  },

  ecil: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: "Experience the Self Drive Cars ECIL at your own peace",
    ogDescription: 'Experience the Self Drive Cars ECIL at your own peace',
  },

  kukatpally: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: "It's Time for Self-Drive Car Rentals in Kukatpally",
    ogDescription: 'Its Time for Self-Drive Car Rentals in Kukatpally',
  },

  madhapur: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Self-Drive Car Rentals in Madhapur: Your Go-To Car Rental Services',
    ogDescription: 'Self-Drive Car Rentals in Madhapur: Your Go-To Car Rental Services',
  },
  medipally: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Self Drive Car Rentals in Uppal, Medipally',
    ogDescription: 'Self Drive Car Rentals in Uppal, Medipally',
  },

  miyapur: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Drive yourself around Hyderabad with self-drive car options in Miyapur',
    ogDescription: "Drive yourself around Hyderabad with self-drive car options in Miyapur",
  },

  secunderabad: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: "Experience the convenience of self-drive cars in Secunderabad",
    ogDescription: 'Experience the convenience of self-drive cars in Secunderabad',
  },


  shamshabad: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: "Explore the variety of self-drive car services in Shamshabad",
    ogDescription: 'Explore the variety of self-drive car services in Shamshabad',
  },

  ramanthapur: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Find a Range of Self-Drive Cars in Ramanthapur',
    ogDescription: 'Find a Range of Self-Drive Cars in Ramanthapur',
  },

  gachibowli: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Drive yourself around Hyderabad with self-drive cars from Gachibowli. Discover Hyderabad on Ys',
    ogDescription: 'Drive yourself around Hyderabad with self-drive cars from Gachibowli. Discover Hyderabad on Your Terms',
  },

 
  // Add other branches here...
};
export async function getServerSideProps(context) { 
  const { req } = context;
  const { place } = context.params;
  const { title = 'Default Title', description = 'Default Description', ogDescription = '' } = metadata[place.toLowerCase()] || {};

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
      ? `https://www.longdrivecars.in/self-drive-car-rental/${place.toLowerCase()}`
      : `https://www.longdrivecars.com/self-drive-car-rental/${place.toLowerCase()}`;

  return {
    props: {
      place,
      title,
      description,
      ogDescription,
      canonicalUrl
    },
  };
}

function Place({ place, title, description, ogDescription, canonicalUrl }) {  // Include canonicalUrl here
  const [Component, setComponent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (place) {
      const component = components[place.toLowerCase()];
      setComponent(component || null);
    }
  }, [place]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <link rel="canonical" href={canonicalUrl} />  {/* Use canonicalUrl here */}
      </Head>
      <div>{Component ? <Component /> : <div>Loading...</div>}</div>
    </Layout>
  );
}

export default Place;


