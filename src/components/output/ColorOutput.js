export default function ColorOutput({colors}){
    return(
        <div>
            <span className="RGB RGB-red">{colors.red} </span>
            <span className="RGB RGB-green">{colors.green} </span>
            <span className="RGB RGB-blue">{colors.blue} </span>
        </div>
    )
}
