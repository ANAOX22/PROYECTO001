import './Card.css'



const Card = ({ conteudo }) => {
    return (
        <div className='card'>
            <h1>CARD</h1>
            {conteudo.map(curso => {
                return (
                    <p key={curso} >{curso}</p>
                )
            })}
        </div>
    )
}
export default Card