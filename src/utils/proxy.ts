import axios from "axios";
import {
  formatDate,
  getCurrentDay,
  getCurrentMonth,
  getPrevMonth,
} from "./helpers";

const bankJobAppKey = "BankJob-82634de6-ca4a-4af8-82e1-c8fdac6b0979-Key";
const urlDB = "https://bank-job.vercel.app/Read";
export function ReadData(date: string) {
  let fixdate = date.replaceAll("-", ""); // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(urlDB, {
    TableName: "OSH",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}

export function ReadCardsData(date: string) {
  let fixdate = date.replaceAll("-", ""); // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(urlDB, {
    TableName: "CARDS",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}

export function ReadCategories(date: string) {
  let fixdate = date.replaceAll("-", ""); // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(urlDB, {
    TableName: "CategoryTable",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}

export function ReadAllCategoriesTemplates() {
  let fixdate = "Categories"; // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(urlDB, {
    TableName: "Categories",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}

export function ReadCategoriesPrices() {
  const day = getCurrentDay();
  const month = day <= 15 ? getPrevMonth() : getCurrentMonth();
  const year = formatDate(new Date(Date.now()), "yyyy");

  let fixdate = "" + month + year; // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(urlDB, {
    TableName: "CategoriesPrices",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}
