import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [isLoading, setLoding] = useState(true);
  const [data, setData] = useState<any>();
  const [errors, setErrors] = useState<null | string>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) throw new Error("Error fetching data");
        const incomming = await res.json();
        setData(incomming);
      } catch (err) {
        setErrors(err.message);
      } finally {
        setLoding(false);
      }
    };
    load();
  }, [url]);

  return { data, isLoading, errors };
};

export default useFetch;
//?----------------------------------------------------------------------------------------------
// Custom hooks are JavaScript functions that use React’s built-in hooks like useState, useEffect, or useRef.
// The key rule is that a custom hook must start with the prefix use.

//    !Here are some common scenarios where you might use custom hooks:
// Fetching Data: Abstracting repetitive data fetching logic.
// Form Handling: Managing form state, validation, and submission.
// Handling Authentication: Abstracting logic for user login and authorization.
// Event Listeners: Encapsulating logic for adding/removing event listeners (e.g., window resize, scrolling).
// Local Storage: Managing state that syncs with localStorage or sessionStorage.

//?----------------------------------------------------------------------------------------------
// import { useState, useEffect } from "react";

// Custom Hook to fetch data
// const useFetch = (url: string) => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<null | string>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Error fetching data");
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;
