import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function LoadingComponent() {
  return <div>Loading...</div>;
}

function App() {
  const [data, setData] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`, {
      signal,
    })
      .then((result) => {
        console.log("result is", result.ok);

        if (!result.ok) {
          throw new Error("Network response was not ok");
        }

        return result.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failure reason:", error.message);
        setLoading(false);
      });

    // Cleanup function (Triggers when the component remounts )
    return () => {
      controller.abort();
    };
  }, [limit]);

  console.log("Limit is", limit);

  return (
    <section>
      <h1>Results</h1>
      {loading ? <LoadingComponent /> : "Data loaded:"}

      <div className="flex flex-col gap-2">
        {data.map((item, key) => {
          return (
            <div key={key} className="flex flex-col bg-black text-white p-4">
              <h1>{item.title}</h1>
              <p>{item.completed ? "Completed" : "Not Completed"}</p>
            </div>
          );
        })}
      </div>

      <input
        type="number"
        value={limit}
        onChange={(element) => setLimit(Number(element.target.value))}
        className="border p-2 rounded"
      />
    </section>
  );
}

export default App;
