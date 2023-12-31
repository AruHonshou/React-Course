export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7nn53HS3GmO5AATLL3nst0H0UUB9xETn&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}