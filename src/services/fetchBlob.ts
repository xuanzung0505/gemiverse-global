async function fetchBlob(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const textBlob = await response.blob();
    return textBlob;
  } catch (error) {
    console.error("Error fetching the text file as a Blob:", error);
    return null;
  }
}
export default fetchBlob;
