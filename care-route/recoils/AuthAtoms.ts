import { atom } from "recoil";

export type LoginInfoProps = {
  userLogined: boolean;
  userSelectedType: boolean;
};

export const loginInfo = atom<LoginInfoProps>({
  key: "loginInfo",
  default: {
    userLogined: false,
    userSelectedType: false,
  },
});

export type UserInfoProps = {
  id: string;
  type: string;
  idToken: string;
  userLogined: boolean;
};
export const userInfo = atom<UserInfoProps>({
  key: "userInfo",
  default: {
    id: "",
    type: "",
    idToken: "",
    userLogined: false,
  },
});
