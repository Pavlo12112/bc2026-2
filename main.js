const { URL } = require('url');

const currency = "USD";
const date_from = "20220707";
const date_to = "20220719";

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

url.searchParams.append("valcode", currency);
url.searchParams.append("start", date_from);
url.searchParams.append("end", date_to);
url.searchParams.append("json", "");

console.log(url.href);