import pic from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
          <h1 className='text-4xl font-bold'>React Knowledge Cafe</h1>
          <img src={pic} alt="" />

        </div>
    );
};

export default Header;