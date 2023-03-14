import "./App.css"

function FrutaItem({nome, qtd}){
    return(
        <div className="fruta">
            Fruta : {nome}, quantidade : {qtd}
        </div>
    )
}

export default FrutaItem;   