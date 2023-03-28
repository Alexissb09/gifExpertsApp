const apiKey = "U0zPncmtJEyAxVTW5Jroa29pOUQny73A";

export const getGifs = async (category) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`
  );

  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  
  return gifs
  
};