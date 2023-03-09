import './ItemListContainer.scss'


export const ItemListContainer = ({greeting}) =>{

    return (
        <div className='container my-5' id='container-top'>
             <h2 className="list-container__title">Productos</h2>
            <div className='main-container'>
               
                        <div className='container__producto'>
                            <hr/>
                            <img src='./imgs/lapicesFaber.jpg'></img>
                            <p>{greeting}</p>

                            <button className='btn btn-primary'>Ver más</button>
                        </div>
                        <div className='container__producto'>

                            <hr/>
                            <img src='./imgs/boligoma.jpg'></img>
                            <p>{greeting}</p>

                            <button className='btn btn-primary'>Ver más</button>
                        </div>
                        <div className='container__producto'>
                            <hr/>
                            <img src='./imgs/mochilaNike.jpg'></img>
                            <p>{greeting}</p>

                            <button className='btn btn-primary'>Ver más</button>
                        </div>

            </div>
        </div>

    )
}

export default ItemListContainer


