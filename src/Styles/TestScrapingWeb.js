import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import axios from "axios";
import cheerio from "react-native-cheerio/lib/cheerio";

const url = "https://www.imdb.com/chart/top/";
const movieData = {};

async function getHTML() {
  const axiosConfig = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
    },
  };
  const { data: html } = await axios.get(url, axiosConfig);
  return html;
}

// getHTML().then((res) => {
//   const $ = cheerio.load(res);
//   $(".lister-list>tr").each((i, movie) => {
//     const title = $(movie).find(".titleColumn a").text();
//     const rating = $(movie).find(".ratingColumn strong").text();
//     movieData[title] = rating;
//   });
//   RNFS.writeFile("moviedata.json", JSON.stringify(movieData), (err) => {
//     if (err) throw err;
//     console.log("file successfully saved!");
//   });
// });
const TestScrapingWeb = () => {
  const handleScrapeData = async () => {
    try {
      const res = await getHTML();
      const $ = cheerio.load(res);
      $(".lister-list>tr").each((i, movie) => {
        const title = $(movie).find(".titleColumn a").text();
        const rating = $(movie).find(".ratingColumn strong").text();
        movieData[title] = rating;
      });
      // await RNFS.writeFile("moviedata.json", JSON.stringify(movieData));
      console.log("Scraping data: ", movieData);
    } catch (error) {
      console.error("Error scraping data:", error);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handleScrapeData}>
        <View>
          <Text>Start Scraping Data From Website</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TestScrapingWeb;

const styles = StyleSheet.create({});
