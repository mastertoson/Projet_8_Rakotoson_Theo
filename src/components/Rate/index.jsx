import emptyStar from "../../assets/images/emptyStar.svg"
import fullStar from "../../assets/images/star-rate.svg"

function Rate ({rating}){
    const stars = [1, 2, 3, 4, 5]
    return(
        <div className="rate">
            {stars.map((level) =>
				rating >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( // si la note est pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
        </div>
    )
}

export default Rate