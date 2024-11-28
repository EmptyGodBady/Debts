type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type FetchOptions = {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: any;
};

const customFetch = async (url: string, options: FetchOptions = {}) => {
  const { method = "GET", headers = {}, body } = options;

  try {
    console.log("Fetching URL:", url);
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });
    console.log("Response status:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export default customFetch;
