async function postData(endpoint, data) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data_1 = await response.json();
    console.log("Response from server:", data_1);
    return data_1;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
