import axios from "axios";
import {
  formatDate,
  getCurrentDay,
  getCurrentMonth,
  getPrevMonth,
} from "./helpers";

const bankJobAppKey = "BankJob-82634de6-ca4a-4af8-82e1-c8fdac6b0979-Key";

export function ReadData(date: string) {
  let fixdate = date.replaceAll("-", ""); // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(`https://bank-job.vercel.app/Read`, {
    TableName: "OSH",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}

export function ReadCategories(date: string) {
  let fixdate = date.replaceAll("-", ""); // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(`https://bank-job.vercel.app/Read`, {
    TableName: "CategoryTable",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}

export function ReadAllCategoriesTemplates() {
  let fixdate = "Categories"; // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(`https://bank-job.vercel.app/Read`, {
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
  console.log(fixdate);
  return axios.post(`https://bank-job.vercel.app/Read`, {
    TableName: "CategoriesPrices",
    RowID: fixdate,
    Key: bankJobAppKey,
  });
}
