import { useEffect, useState } from "react";
import Loader from "./loadingAnimation";

interface Post {
  id: number;
  title: string;
  body: string;
}

const LogData: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fechData();
  }, [posts]);

  if (isLoading) return <Loader />;

  return (
    <>
      <div>
        <h2>Posts:</h2>
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LogData;

// useEffect(() => {...}, []): The empty dependency array [] ensures the effect runs only once after the component mounts.
// Fetching data: Inside useEffect, we define an async function that fetches posts from the API, converts the response to JSON, and updates the state.
// loading state: While the data is being fetched, a loading message is displayed.

// useEffect Dependencies: The second argument to useEffect ([], [count], etc.) controls when the effect is triggered.
// Cleanup: Always return a cleanup function in useEffect if you're setting up things like subscriptions, timers, or event listeners to avoid memory leaks.
