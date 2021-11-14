import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
const Rating = ({rating, Onclick}) => {
    return  <>
    {
        //to successfully let the user choose between 1 to 5  star
        // it's a good idea to start by creating a 5 element array
        
        [...Array(5)].map((_, i) => (
            <span key={i} Onclick={() =>onclick(i)} >
            {rating > i ? (
                <AiFillStar/>
            ) : (
                <AiOutlineStar/>
            )}
            </span>

        ))
    } </>
}

export default Rating
