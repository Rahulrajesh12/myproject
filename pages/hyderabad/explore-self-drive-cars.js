// import React from 'react';
// import dynamic from 'next/dynamic';
// import Layout from '../components/Layout/Layout';

// // Dynamically import the ExploreCars component
// const ExploreCars = dynamic(() => import('../components/ExploreCars/ExploreCars'), {
//   ssr: false, // Set to false if you want to load it only on the client side
// });

// function ExploreSelfDriveCars() {
//   return (
//     <div>
//       <Layout phoneno={'9666-677-405'}>
//         <ExploreCars loc={'hyderabad'} phoneno={"9666677405"} />
//       </Layout>
//     </div>
//   );
// }

// export default ExploreSelfDriveCars;




import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

// Dynamically import the ExploreCars component
const ExploreCars = dynamic(() => import('../components/ExploreCars/ExploreCars'), {
  ssr: false, // Set to false to load only on the client side
});

function ExploreSelfDriveCars() {
  // Define the loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading delay or async operation
    const loadData = async () => {
      // Set loading to true to show the loader
      setLoading(true);
      // Simulate delay (e.g., with a timeout or actual async operation)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Set loading to false after data has loaded
      setLoading(false);
    };
    loadData();
  }, []); // Runs only once after component mounts

  return (
    <div>
      {/* Pass required props to Layout and ExploreCars */}
      <Layout phoneno="9666-677-405">
        {!loading && <ExploreCars loc="hyderabad" phoneno="9666677405" />}
      </Layout>

      {/* Show the loader when loading */}
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
          <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
        </div>
      )}
    </div>
  );
}

export default ExploreSelfDriveCars;

