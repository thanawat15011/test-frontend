import { atom } from "recoil";

export const typeView = atom({
  key: "typeView",
  default: 0,
});

export const selectedDate = atom({
  key: "selectedDate",
  default: new Date(),
});

export const typeShowData = atom({
  key: "typeShowData",
  default: 0,
});