import './Watch.css'

const Watch = ({watch}) => {
    // console.log(watch)
    // {name,price}=watch;
    const {name,price} = watch
    return (
        <div>
            <h3>Watch : {name}</h3>
            <h4>Price : {price}</h4>
            
        </div>
    );
};

export default Watch;