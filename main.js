const { URL } = require('url');

const currency = "usd";
const date_from = "20220707";
const date_to = "20220719";

const url = new URL("https://bank.gov.ua/NBU_Exchange/exchange_site");

url.searchParams.append("start", date_from);
url.searchParams.append("end", date_to);
url.searchParams.append("valcode", currency);
url.searchParams.append("sort", "exchangedate");
url.searchParams.append("order", "asc");
url.searchParams.append("json", "");

console.log(url.href);
