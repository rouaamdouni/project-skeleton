import Button from '../signup/components/Button';
import { useAuth } from '../services/contexts/Auth';
import useUser from '../services/hook/user';

export default function ProfilePage() {
  const { user } = useUser();
  const { logoutUser } = useAuth();

  if (!user) return null;

  return (
    <div className="mx-auto  mt-10 flex w-full max-w-2xl flex-col items-center">
      <h1 className="text-sm font-bold capitalize text-gray-900">
        {user.fullName}
      </h1>
      <Button type="button" clickHandler={logoutUser}>
        <span className="text-sm font-bold capitalize text-purple-100">
          logout
        </span>
      </Button>
    </div>
  );
}
