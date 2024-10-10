module.exports = {
    async redirects() {
      return [
        {
          source: '/amongathon', // Old URL
          destination: '/among-a-thon', // New URL
          permanent: true, // Set to true for a 301 redirect
        },
        {
            source: '/mulemeat', // Old URL
            destination: '/mule-meat', // New URL
            permanent: true, // Set to true for a 301 redirect
        },
        {
            source: '/dirkdurnston', // Old URL
            destination: '/dirk-durnston', // New URL
            permanent: true, // Set to true for a 301 redirect
        },
        {
            source: '/teenpest', // Old URL
            destination: '/teen-pests', // New URL
            permanent: true, // Set to true for a 301 redirect
        },
        {
            source: '/teenpests', // Old URL
            destination: '/teen-pests', // New URL
            permanent: true, // Set to true for a 301 redirect
        },
        {
            source: '/teen-pest', // Old URL
            destination: '/teen-pests', // New URL
            permanent: true, // Set to true for a 301 redirect
        },
      ];
    },
  };