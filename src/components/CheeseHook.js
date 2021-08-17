import { useAxios } from "use-axios-client";

export default function CheeseHook() {
  const { data, error, loading } = useAxios({
    url: "https://ifv3jtog27.execute-api.us-east-2.amazonaws.com/latest/latest/cheeses/airag"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  ) 
}