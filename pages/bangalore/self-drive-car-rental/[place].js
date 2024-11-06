
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
// import BangaloreLayout from '@/pages/components/Layout/BangaloreLayout';
// import Head from 'next/head';
// import whitefield from '../../components/Branches/Bng/whitefield';
// import electroniccity from '../../components/Branches/Bng/electronic_city';
// import hsrlayout from '../../components/Branches/Bng/hsr-layout';
// import jayanagar from '../../components/Branches/Bng/jayanagar';
// import koramangala from '../../components/Branches/Bng/koramangala';
// import sarjapur from '../../components/Branches/Bng/sarjapur';
// import malleshwaram from '../../components/Branches/Bng/malleshwaram';
// import sadashivanagar from '../../components/Branches/Bng/sadashivanagar';

// const components = {
//   sarjapur: dynamic(() => import('../../components/Branches/Bng/sarjapur')),
//   electronic_city: dynamic(() => import('../../components/Branches/Bng/electronic_city')),
//   indiranagar: dynamic(() => import('../../components/Branches/Bng/indiranagar')),
//   jayanagar: dynamic(() => import('../../components/Branches/Bng/jayanagar')),
//   whitefield: dynamic(() => import('../../components/Branches/Bng/whitefield')),
//   koramangala: dynamic(() => import('../../components/Branches/Bng/koramangala')),
//   hsrlayout: dynamic(() => import('../../components/Branches/Bng/hsr-layout')),
//   malleshwaram: dynamic(() => import('../../components/Branches/Bng/malleshwaram')),
//   sadashivanagar: dynamic(() => import('../../components/Branches/Bng/sadashivanagar')),
// };

// // Metadata for each branch
// const metadata = {
//   indiranagar: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: 'Long Drive Cars in Indiranagar',
//     ogDescription: 'Long Drive Cars in Indiranagar',
//   },

//   whitefield: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: "Explore Whitefield's Vibrant Neighborhoods with Long drive cars",
//     ogDescription: "Explore Whitefield's Vibrant Neighborhoods with Long drive cars",
//   },

//   electronic_city: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: 'Experience the Thrill of Exploring Electronic City with Long Drive Cars!',
//     ogDescription: "Experience the Thrill of Exploring Electronic City with Long Drive Cars!",
//   },

//   hsrlayout: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: "Long Drive Cars In HSR Layout",
//     ogDescription: 'Long Drive Cars In HSR Layout',
//   },

//   jayanagar: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: "A Timeless Gem: Jayanagar",
//     ogDescription: 'A Timeless Gem: Jayanagar',
//   },

//   koramangala: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: 'Long Drive Cars In Koramangala',
//     ogDescription: 'Long Drive Cars In Koramangala',
//   },
//   sarjapur: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: 'Uncover the Hidden Gems of Sarjapur with Long Drive Cars',
//     ogDescription: "Uncover the Hidden Gems of Sarjapur with Long Drive Cars",
//   },

//   malleshwaram: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: "Long Drive Cars In Malleshwaram",
//     ogDescription: "Long Drive Cars In Malleshwaram",
//   },


//   sadashivanagar: {
//     title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
//     description: "Long Drive Cars In Sadashivanagar",
//     ogDescription: 'Long Drive Cars In Sadashivanagar',
//   },

// };

// export async function getServerSideProps(context) { 
//   const { req } = context;
//   const { place } = context.params;
//   const { title = 'Default Title', description = 'Default Description', ogDescription = '' } = metadata[place.toLowerCase()] || {};

//   const host = req.headers.host;
//   const canonicalUrl = host.includes('.in')
//       ? `https://www.longdrivecars.in/self-drive-car-rental/${place.toLowerCase()}`
//       : `https://www.longdrivecars.com/self-drive-car-rental/${place.toLowerCase()}`;

//   return {
//     props: {
//       place,
//       title,
//       description,
//       ogDescription,
//       canonicalUrl
//     },
//   };
// }

// function Place({ place, title, description, ogDescription, canonicalUrl }) {  // Include canonicalUrl here
//   const [Component, setComponent] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (place) {
//       const component = components[place.toLowerCase()];
//       setComponent(component || null);
//     }
//   }, [place]);

//   return (
//     <Layout>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={ogDescription} />
//         <link rel="canonical" href={canonicalUrl} />  {/* Use canonicalUrl here */}
//       </Head>
//       <div>{Component ? <Component /> : <div>Loading...</div>}</div>
//     </Layout>
//   );
// }

// export default Place;


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import BangaloreLayout from '@/pages/components/Layout/BangaloreLayout'; // Ensure you're using the correct layout
import Head from 'next/head';

// Dynamically import the branch components
const components = {
  sarjapur: dynamic(() => import('../../components/Branches/Bng/sarjapur')),
  electronic_city: dynamic(() => import('../../components/Branches/Bng/electronic_city')),
  indiranagar: dynamic(() => import('../../components/Branches/Bng/indiranagar')),
  jayanagar: dynamic(() => import('../../components/Branches/Bng/jayanagar')),
  whitefield: dynamic(() => import('../../components/Branches/Bng/whitefield')),
  koramangala: dynamic(() => import('../../components/Branches/Bng/koramangala')),
  hsrlayout: dynamic(() => import('../../components/Branches/Bng/hsr-layout')),
  malleshwaram: dynamic(() => import('../../components/Branches/Bng/malleshwaram')),
  sadashivanagar: dynamic(() => import('../../components/Branches/Bng/sadashivanagar')),
};

// Metadata for each branch
const metadata = {
  indiranagar: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: 'Long Drive Cars in Indiranagar',
    ogDescription: 'Long Drive Cars in Indiranagar',
  },
  whitefield: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: "Explore Whitefield's Vibrant Neighborhoods with Long drive cars",
    ogDescription: "Explore Whitefield's Vibrant Neighborhoods with Long drive cars",
  },
  electronic_city: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: 'Experience the Thrill of Exploring Electronic City with Long Drive Cars!',
    ogDescription: "Experience the Thrill of Exploring Electronic City with Long Drive Cars!",
  },
  hsrlayout: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: "Long Drive Cars In HSR Layout",
    ogDescription: 'Long Drive Cars In HSR Layout',
  },
  jayanagar: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: "A Timeless Gem: Jayanagar",
    ogDescription: 'A Timeless Gem: Jayanagar',
  },
  koramangala: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: 'Long Drive Cars In Koramangala',
    ogDescription: 'Long Drive Cars In Koramangala',
  },
  sarjapur: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: 'Uncover the Hidden Gems of Sarjapur with Long Drive Cars',
    ogDescription: "Uncover the Hidden Gems of Sarjapur with Long Drive Cars",
  },
  malleshwaram: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: "Long Drive Cars In Malleshwaram",
    ogDescription: "Long Drive Cars In Malleshwaram",
  },
  sadashivanagar: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore',
    description: "Long Drive Cars In Sadashivanagar",
    ogDescription: 'Long Drive Cars In Sadashivanagar',
  },
};

export async function getServerSideProps(context) {
  const { req } = context;
  const { place } = context.params;
  const { title = 'Default Title', description = 'Default Description', ogDescription = 'Default OG Description' } = metadata[place.toLowerCase()] || {};

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in/bangalore/self-drive-car-rental/${place.toLowerCase()}` 
    : `https://www.longdrivecars.com/bangalore/self-drive-car-rental/${place.toLowerCase()}`;

  return {
    props: {
      place,
      title,
      description,
      ogDescription,
      canonicalUrl,
    },
  };
}

function Place({ place, title, description, ogDescription, canonicalUrl }) {
  const [Component, setComponent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (place) {
      const component = components[place.toLowerCase()];
      setComponent(component || null);
    }
  }, [place]);

  return (
    <BangaloreLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div>
        {Component ? (
          <Component />
        ) : (
          <div>
            Branch not found or loading... Please try again later.
          </div>
        )}
      </div>
    </BangaloreLayout>
  );
}

export default Place;

