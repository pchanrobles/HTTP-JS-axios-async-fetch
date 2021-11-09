// fetch con promesas
// const getPhotos = ()=>{
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => response.json())
// .then(json => console.log(json))
// };
// getPhotos()


// async
// const getPhotos = async()=> {
//     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//    const data = await response.json();
//     console.log(data)
// };
// getPhotos();


// axios con promesas
// const getPhotos = () => {
//     axios.get('https://jsonplaceholder.typicode.com/photos')
//         .then((response) => console.log(response))
//         .catch((err) => console.log('error', err));
// }
// getPhotos();


// axios async
// maquetando informacion
const title = document.querySelector('#title')
const image = document.querySelector('#image')

const getPhotos = async() => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos')

    console.log(data[0])
    title.innerHTML = data[0].title;
    image.innerHTML = data[0].url;


}

getPhotos();