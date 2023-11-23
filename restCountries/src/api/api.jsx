export const fetchCountriesData = async () => {
  const urlApi = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error data:", error);
    throw error;
  }
};
