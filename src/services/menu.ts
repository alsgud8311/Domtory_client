import { AxiosResponse } from "axios";
import { apiBe } from ".";

type AllMenuType = {
  date_code: string;
  date_detail: string;
  breakfast_list: string[];
  lunch_list: string[];
  dinner_list: string[];
};

type DateMenuType = {
  breakfast_list?: string[];
  lunch_list?: string[];
  dinner_list?: string[];
};
type DateMenuPromiseType = Promise<DateMenuType[]>;

export const getAllMenuData = async (date: string) => {
  const result = await apiBe<AllMenuType[]>(`/menu/${date}`);
  return result.data;
};

export const getDateMenuData = async (
  date: string,
  timezone: string
): Promise<DateMenuPromiseType> => {
  const { data } = await apiBe<DateMenuType[]>(`menu/${date}/${timezone}/`);
  return data;
};
