import axios from "axios";

const API_BASE_URL = "https://api.timbu.cloud";

const createSale = async (saleData, organizationId, apiKey, appId) => {
  const url = `${API_BASE_URL}/sales?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`;

  try {
    const response = await axios.post(url, saleData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating sale:", error);
    throw error;
  }
};

export default createSale;
