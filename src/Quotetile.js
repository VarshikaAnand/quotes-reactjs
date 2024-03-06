import './Quotetile.css'
const Quotetile=({quote,author})=>{
    return(
        <div className='qdiv'>
            <h2>{quote}</h2>
        <p><i>-{author}</i></p>
        </div>
        
    )
}
export default Quotetile;