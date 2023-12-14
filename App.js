import * as React from "react";
import MainScreens from "./src/Screens/MainScreens";
// import axios from "axios";
// import rnf from "react-native-fs";
// import cheerio from "cheerio";

const url = "https://www.imdb.com/chart/top/";
const moviesData = {};

function App() {
  // const getHTML = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching HTML:", error);
  //   }
  // };

  // const parseHTML = (html) => {
  //   const $ = cheerio.load(html);
  //   $(".lister-list>tr").each((i, movie) => {
  //     const title = $(movie).find(".titleColumn a").text();
  //     const rating = $(movie).find(".ratingColumn strong").text();
  //     moviesData[title] = rating;
  //   });

  //   // Save data to a file
  //   const filePath = rnf.DocumentDirectoryPath + "/moviesData.json";
  //   rnf
  //     .writeFile(filePath, JSON.stringify(moviesData), "utf8")
  //     .then(() => console.log("File successfully saved!"))
  //     .catch((error) => console.error("Error writing file:", error));
  // };

  // useEffect(() => {
  //   getHTML().then((html) => parseHTML(html));
  // }, []);

  // <Router path="/" component={Home} />;
  return <MainScreens />;
}
export default App;
