// import UserStore from "@/store/userStore";
// import { createContext } from "react";

// interface Store {
//   userStore: UserStore;
// }

// export const store: Store = {
//   userStore: new UserStore(),
// };

// export const StoreContext = createContext(store);

// export function useStore() {
//   return store;
// }
import { Customer } from "@/models/Customer";
import { create } from "zustand";

export const initialUserData = {
  customerId: 0,
  customerCode: "",
  titleId: 0,
  img: "",
  name: "",
  lastName: "",
  companyName: "",
  address: "",
  countryId: 0,
  preferredPortId: 0,
  email: "",
  email2: "",
  email3: "",
  phone: "",
  phone2: "",
  phone3: "",
  isAssigned: false,
  assignedAgentId: 0,
  isTrxAccActive: false,
  isActive: false,
  isAdmin: false,
  createdOn: "",
};

interface userData {
  isUpdate: Boolean;
  user: Customer;
  setIsUpdate: (current: Boolean) => void;
  update: (newUserData: Customer) => void;
  deleteData: () => void;
}
interface adminData {
  isLogin: Boolean;
  setIsLogin: (current: Boolean) => void;
  deleteData: () => void;
}
// export const useUserStore = create<userData>((set) => ({
//   user: initialUserData,
//   update: (newUserData: Customer) => set((state) => ({ user: { ...state.user, ...newUserData } })),
//   deleteData: () => set((state) => ({ user: { ...initialUserData } })),
// }))

const persistedUserData =
  JSON.parse(
    typeof window !== "undefined" &&
    window.localStorage &&
    (localStorage?.getItem("user_data") as any)
  ) || initialUserData;

const isUpdate =
  JSON.parse(
    typeof window !== "undefined" &&
    window.localStorage &&
    (localStorage?.getItem("isUpdate") as any)
  ) || false;

const isLogin =
  JSON.parse(
    typeof window !== "undefined" &&
    window.localStorage &&
    (localStorage?.getItem("isLogin") as any)
  ) || false;

// interface userData {
//   user: Customer;
// }

export const useUserStore = create<userData>((set) => ({
  user: persistedUserData,
  isUpdate: isUpdate,
  update: (newUserData: Customer) =>
    set((state) => {
      const updatedUser = { ...state.user, ...newUserData };
      localStorage.setItem("user_data", JSON.stringify(updatedUser));
      return { user: updatedUser };
    }),
  setIsUpdate: (current: Boolean) =>
    set(() => {
      localStorage.setItem("isUpdate", JSON.stringify(current));
      return { isUpdate: current };
    }),
  deleteData: () =>
    set(() => {
      localStorage.removeItem("user_data");
      localStorage.removeItem("isUpdate");
      return { user: initialUserData, isUpdate: false };
    }),
}));

export const useAdminStore = create<adminData>((set) => ({
  isLogin: isLogin,
  setIsLogin: (current: Boolean) =>
    set(() => {
      localStorage.setItem("isLogin", JSON.stringify(current));
      return { isLogin: current };
    }),
  deleteData: () =>
    set(() => {
      localStorage.removeItem("isLogin");
      return { isLogin: false };
    }),
}));
