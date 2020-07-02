export const fetchData = async () => {
    try {
      const response = await fetch("http://195.201.137.93:2999/brands");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  