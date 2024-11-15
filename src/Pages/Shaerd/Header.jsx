import header from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
  return (
    <div className='text-center space-y-4'>
      <h2 className="text-2xl mt-5">
        <img className='mx-auto' src={header} alt="" />
        </h2>
        <p className='text-2xl'>Journalism Without Fear or Favour</p>
        <p className='text-xl'>{moment().format("dddd, MMMM D ,YYYY")}</p>
    </div>
  );
};

export default Header;