import "../styles/Banner.css"

function Banner() {
    /*className='lmj-banner'*/
    return (
        <div style={
            {
                color:"black",
                textAlign:"right",
                padding:32/* "32px" */,
                borderBottom:"solid 3px black"
            }
        }>
            <h1>La maison jungle</h1>
        </div>
    );
}

export default Banner;