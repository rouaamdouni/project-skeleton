import { AxiosError } from 'axios';
import User from '../../signin/models/Iuser';
import instance from '../utils/axios';

type RegisterArgs = {
  email: string;
  password: string;
  fullName: string;
};

type RegisterResult =
  | { status: 'user_created'; user: User }
  | { status: 'user_not_created'; msg: string; payload: { email: string } };

export const register = async (args: RegisterArgs): Promise<RegisterResult> => {
  try {
    const {
      data: { user },
    } = await instance.post('/auth/register', args);
    return { status: 'user_created', user };
  } catch (error) {
    const responseError = error as AxiosError;
    const response = responseError.response?.data as any;
    return {
      status: 'user_not_created',
      msg: response.error.msg as string,
      payload: { email: response.email },
    };
  }
};

type LoginArgs = {
  email: string;
  password: string;
};

type LoginResult =
  | { status: 'user_logged'; accessToken: string }
  | { status: 'user_not_logged'; msg: string };

export const logUser = async (args: LoginArgs): Promise<LoginResult> => {
  try {
    const {
      data: { accessToken },
    } = await instance.post('/auth/login', args);
    return { status: 'user_logged', accessToken };
  } catch (error) {
    const responseError = error as AxiosError;
    const response = responseError.response?.data as any;
    return {
      status: 'user_not_logged',
      msg: response.error.msg as string,
    };
  }
};

export const fetchUser = async (accessToken: string) => {
  const {
    data: { user },
  } = await instance.get('/users/logged', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return user;
};
