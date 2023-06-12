const Card1 = ({ conteudo }) => {
    return (
        <div>
            {conteudo.map(curso => {
                return (
                    <p key={curso} >{curso}</p>
                )
            })}
        </div>
    )
}
export default Card1