import {useState} from 'react'
import './StarRating.css'

const StarRating = () => {
    const [rating,setRating] = useState(0);
    const [hoverRating,setHoverRating] = useState(0);
    const currentRating = hoverRating || rating;
    const ratingMessages = ['Awful','Poor','Fair','Good','Excellent'];
    const handleClick = (value)=>{
        setRating(value);
    };
    const handleMouseLeave =()=>{setHoverRating(0)};
    const handleMouseOver = (value) => {
        //value ranges from 1 to 5 (index + 1 i.e; 0+1 to 4+1)
        setHoverRating(value);
      };
    const getRatingMessage = (ratingValue)=>{
        return ratingMessages[Math.ceil(ratingValue)-1];
    }

    // Render star
    const renderStar = (index)=>{
        const fullstar = (hoverRating||rating) >index;
        return(
            <span
                key={index}
                className={`star ${fullstar ? 'full':''}`}
                onClick={()=>handleClick(index+1)}
                onMouseOver={()=>handleMouseOver(index+1)}
                onMouseLeave={handleMouseLeave}
            >
                {fullstar ? '*':'☆'}
            </span>
        )
    }
  return (
    <div className='container'>
        <div className='star-rating'>
            {Array.from({length:5},(_,index)=>renderStar(index))}
            <span className='rating-message'>
                <strong>{getRatingMessage(currentRating)}</strong>
            </span>
        </div>
    </div>
  )
}

export default StarRating