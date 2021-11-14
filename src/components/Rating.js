const Rating = ({rating, Onclick, style}) => {
    return  <>
    {
        //to successfully let the user choose between 1 to 5  star
        // it is a good idea to start by creating a 5 element array
        {[...Array(5)].map((_i) => (
            <span>
            </span>

        ))}
    } </>
}

export default Rating
