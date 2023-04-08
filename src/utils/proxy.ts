import axios from "axios";
import { formatDate } from "./helpers";

const bankJobAppKey = "BankJob-82634de6-ca4a-4af8-82e1-c8fdac6b0979-Key";

export function ReadData() {
  let date = "20230407"; // formatDate(new Date(Date.now()), "yyyymmdd");
  return axios.post(`https://bank-job.vercel.app/Read`, {
    TableName: "OSH",
    RowID: date,
    Key: bankJobAppKey,
  });
}