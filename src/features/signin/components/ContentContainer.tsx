import logo from '../../../assets/images/logos/logo.png';

export default function SignInContent() {
  return (
    <div>
      <div className="flex flex-col absolute right-[50%] top-[30%] items-center vh w-[40%]">
        <div>
          <img src={logo} alt="logo_shape" className="h-[120px] w-[150px] " />
        </div>
        <div className="flex flex-col items-center justify-between ">
          <div>
            <span className="tt">
              Start Taking Control Of Your Career
            </span>
          </div>
          <div className="text-center">
            <span className="text">
              Gain practical experience, mentorship and guidance you need<br></br>
               to start your new career
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
