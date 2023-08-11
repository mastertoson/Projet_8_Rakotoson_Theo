function Cards({card_cover,title}) {
    return (
      <article className="card">
			  <img src={card_cover} alt="location" />
			  <div className="card_title_container">
				  <p className="card_title">{title}</p>
			  </div>
		  </article>
    )
  }
  
  export default Cards