import { LinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from '../../../../assets/icons/linkedin.png';

function LinkedinBtn() {
  return (
    <LinkedIn
      clientId="78qs72yrglwasl"
      // redirectUri="http://localhost:5050"
      redirectUri={`${window.location.origin}/linkedin`}
      onSuccess={(code) => {
        console.log(code);
      }}
      onError={(error) => {
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (
        <button
          onClick={linkedInLogin}
          className="w-[250px] border-[#D3D3D3] text-[13px] pl-[12px]	h-[38px] border-[1px] rounded-[3px] m-[5px]"
        >
          <div className="flex justify-start items-start  ">
            <img
              src={linkedin}
              alt="Sign in with Linked In"
              className="h-5 w-5"
            />
            <span className="px-[10px] font-fontlinkedin font-[600] text-[#3c4043] tracking-[0.25px]">
              {' '}
              Login with LinkedIn
            </span>
          </div>
        </button>
      )}
    </LinkedIn>
  );
}
export default LinkedinBtn;
