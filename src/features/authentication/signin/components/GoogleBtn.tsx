import { GoogleLogin } from '@react-oauth/google';

function GoogleBtn() {
//   const [user, setUser] = useState([]);
//   const [profile, setProfile] = useState([]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => setUser(codeResponse),
//     onError: (error) => console.log('Login Failed:', error),
//   });

//   useEffect(() => {
//     if (user) {
//       axios
//         .get(
//           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
//           {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//               Accept: 'application/json',
//             },
//           }
//         )
//         .then((res) => {
//           setProfile(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user]);

//   // log out function to log the user out of google and set the profile array to null
//   const logOut = () => {
//     googleLogout();
//     setProfile(null);
//   };

  const responseMessage = (response: unknown) => {
    console.log(response);
  };
  const errorMessage = (error: unknown) => {
    console.log(error);
  };
  return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />;
}
export default GoogleBtn;
