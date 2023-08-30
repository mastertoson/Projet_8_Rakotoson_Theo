
function Host({hostName, hostPicture}) {
  
    return(
        <div className="host_comp">
            <p className="host_name">{hostName}</p>
            <div className="host_img">
                <img src={hostPicture} alt={hostName} />
            </div>
        </div>
    )
    
  }
  
  export default Host