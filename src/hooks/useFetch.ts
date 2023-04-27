import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = ({
  url,
  method,
  body,
  params,
}: {
  url: string;
  method?: string;
  body?: any;
  params?: any;
}) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response: any = await axios({
          method: method || "GET",
          url: url,
          ...(method !== "GET" && { data: body }),
          params: params,
        });

        setData(response.data);
      } catch (err: any) {
        setError(err);
        console.log("ERROR:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
