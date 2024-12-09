import React from 'react';
import dynamic from 'next/dynamic';

import CarProducts from '../components/CarProducts';

const DynCallBackForm = dynamic(() => import('../components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('../components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('../components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('../components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('../components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('../components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
// import Layout from '../components/Layout/Layout';
import Layout from '../components/Layout/Layout';
import PriceList from '../components/PriceList/PriceList';
import Head from 'next/head';

export default function Place({ cars, canonicalUrl }) {
    return (
        <div>
            <Layout locname={'hyderabad'} phoneno={"9666-677-405"}>
                <Head>
                    <title> No Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad</title>
                    <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km , Book clDzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content=" No Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
                    <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km , Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=AW-16731119855"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16731119855');
                    `,
                        }}
                    ></script>

                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-8RGJTJSJCW">
                    </script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8RGJTJSJCW');
                    `,
                        }}
                    ></script>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBCJDV6F');`,
                        }}
                    />


                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className="pt-32 lg:pt-0">
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-KBCJDV6F"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    <DynImageChange locname={'hyderabad'} />
                    <div>
                        <DynNearByApi city={'hyderabad'} />
                    </div>
                    <CarProducts data={cars} branch={"hyderabad"} phoneno={'9666677405'} count={6} />
                    <div><DynNearYou /></div>
                    <FeaturedCars data={cars} branch={"hyderabad"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs locname={'hyderabad'} />
                    <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent city={'hyderabad'} />
                    </div>
                    <GetInTouch city={'hyderabad'} phoneno={'9666677405'} />
                    <PriceList city={'hyd'} phoneno={'9666677405'} />
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=hyderabad');
    const items = await response.json();
    const cars = items?.data?.results;
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in/hyderabad'
        : 'https://www.longdrivecars.com/hyderabad';

    return {
        props: {
            cars,
            canonicalUrl,
        },
    };
}