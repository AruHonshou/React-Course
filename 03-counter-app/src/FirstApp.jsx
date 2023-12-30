// import {Fragment} from 'react', usabamos <Fragment> pero ahora solo usamos lo siguiente: <><>

// const newMessage = 'Aru';se recomienda no estar adentro  de ese componente

// const newMessage = {
//     message: 'El Papu',
//     title: 'Nuevo titulo'
// }

// const Minitarea = () => {
//     return console.log('Hola Mundo');
// };

// export const FirstApp = () => {



    // return (
    //     <>
                //estp es para que se vea un arreglo
    //         <code>{ JSON.stringify( newMessage ) }</code>
    //         <p>Soy un subtitulo</p>
    //     <>

    // );

//     return (
        // <> Esto es para demostrar que funciona con funciones
//             <h1>{ Minitarea() } </h1>
//             <p>Soy un subtitulo</p>
//         </>

//     );
// }

//PROPS, Comunicacion entre componentes
// export const FirstApp = ( { title } ) => {

    // console.log(props);

//     return (
//         <>
//             <h1>{title}</h1>
//             <p>Soy un subtitulo</p>
//         </>
//     )
// }

//Proptypes
// import PropTypes from 'prop-types';

// export const FirstApp = ( { title, subTitle } ) => {

//     // console.log(props);

//     return (
//         <>
//             <h1>{title}</h1>
//             <p>{subTitle}</p>
//         </>
//     )
// }

// FirstApp.propTypes = {
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.number
// }

//DefaultProps
import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name} ) => {

    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

//Podemos dejar los estados aqui en el default
//usualmente esto siempre se coloca al final
FirstApp.defaultProps = {
    title: 'NO HAY TITULO',
    subTitle: 'NO HAY SUBTITULO'
}