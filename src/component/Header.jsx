import pic from '../assets/images/profile.png'

const Header = () => {
    return (
        <div>
          <h1 className='text-4xl font-bold'>React Knowledge Cafe</h1>
          <img src={pic} alt="" />

        </div>
    );
};

export default Header;