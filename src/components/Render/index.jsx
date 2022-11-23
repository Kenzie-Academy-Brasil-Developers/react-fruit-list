import './style.css';

const UsersContainer = ({fruits, setFruits}) => {

    const redFruits = () => {
        const redFiltereds = fruits.filter((elt) => elt.color === 'red')
        setFruits(redFiltereds);
    }


    return (
        <div className='users-container'>
            {
                fruits.map(({name, color, price}, index) => <p key={index}>This {name} is {color} and costs U${price}.00</p>)
            }
            <button onClick={redFruits} >Stand-by</button>
        </div>
    );
}

export default UsersContainer;