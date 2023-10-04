export const CardPersonaje = ({imagen,nombre,edad,aldea,afiliación,jutsu_destacado,estado}) =>{
    return(
            <div className="cardPersonaje">
                <img src={`/img/${imagen}`} alt="" />
                <div className="txtDatos">
                    <h1>Nombre: <i>{nombre}</i></h1>
                    <h1>Edad: <i>{edad}</i></h1>
                    <h1>Aldea: <i>{aldea}</i></h1>
                    <h1>Afiliación: <i>{afiliación}</i></h1>
                    <h1>Jutsu Destacado: <i>{jutsu_destacado}</i></h1>
                    <h1>Estado: <i>{estado}</i></h1>
                </div>
        </div>

    )
}