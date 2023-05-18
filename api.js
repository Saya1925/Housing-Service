// api.js
export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

