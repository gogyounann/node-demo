//console.log("index.js・・・（　＾ω＾）・・・");
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");

const PORT = 8000;
const app = express();

const URL = "https://search.rakuten.co.jp/search/mall/カニ/?l-id=pc_header_search_suggest";
const data = [];

axios(URL)
    .then((response) => {
        const htmlParser = response.data;
        const $ = cheerio.load(htmlParser);

        // console.log(htmlParser);

        $(".searchresultitem", htmlParser).each(function () {
            const title = $(this).find(".title").text();
            const price = $(this).find(".important").text();
            data.push({ title, price });
            console.log(data);
        });
    })
    .catch((error) => console.log(error));

app.listen(PORT,console.log("server running!!!"));





