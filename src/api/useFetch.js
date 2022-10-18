import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [todos, setTodos] = useState(null);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoding(true);

    axios
      .get(url)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoding(false);
      });
  }, [url]);
  return { todos, loading, error };
}

export default useFetch;
