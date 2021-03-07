export const gifFetch = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UWaoy6cb3wjKbatpPSHiyI6lzg4QZPI5&q=${encodeURI(category)}&limit=12`;
    
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifData = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })
    console.log(gifData);
    return gifData;
}