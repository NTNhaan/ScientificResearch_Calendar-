// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import axios from "axios";
// import cheerio from "react-native-cheerio/lib/cheerio";
// import { index } from "cheerio/lib/api/traversing";
// const url = "https://dkmh.tdmu.edu.vn/#/tkb-tuan";

// async function getHTML() {
//   const axiosConfig = {
//     headers: {
//       // user agent này sẽ trả về một chuỗi ký tự mà trình duyệt gửi đến máy chủ. Khắc phục lỗi 403 khi truy cập trang web
//       "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
//     },
//   };
//   const { data: html } = await axios.get(url, axiosConfig);
//   return html;
// }

// const TestScrapingWeb = () => {
//   const [movieData, setMovieData] = useState([]);

//   const handleScrapeData = async () => {
//     try {
//       const res = await getHTML();
//       const $ = cheerio.load(res);
//       const movieData = [];

//       $(".table-responsive-sm .ng-star-inserted p").each((i, movie) => {
//         const title = $(movie).text().trim();
//         // const rating = $(movie).find(".ratingColumn strong").text();
//         movieData.push(title);
//       });

//       setMovieData(movieData);
//       // await RNFS.writeFile("moviedata.json", JSON.stringify(movieData));
//       console.log("Scraping data: ", movieData);
//     } catch (error) {
//       console.error("Error scraping data:", error);
//     }
//   };
//   return (
//     <View>
//       <TouchableOpacity onPress={handleScrapeData}>
//         <View>
//           <Text>Start Scraping Data From Website</Text>
//         </View>
//       </TouchableOpacity>
//       {movieData.map((movie, index) => (
//         <Text key={index}>{movie}</Text>
//       ))}
//     </View>
//   );
// };

// export default TestScrapingWeb;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import cheerio from "react-native-cheerio/lib/cheerio";
import { index } from "cheerio/lib/api/traversing";
const url = "https://dkmh.tdmu.edu.vn/#/tkb-tuan/";

// const loginAndGetCookies = async () => {
//   try {
//     const loginRes = await axios.post("https://dkmh.tdmu.edu.vn/#/tkb-tuan/", {
//       username: "2124802010059@student.tdmu.edu.vn",
//       password: "Thanhnhan20032@",
//     });
//     const cookies = loginRes.headers["set-cookie"];
//     return cookies;
//   } catch (error) {
//     console.error("Error logging in:", error);
//     throw error;
//   }
// };

const TestScrapingWeb = () => {
  const [movieData, setMovieData] = useState([]);

  const handleScrapeData = async () => {
    try {
      // const cookies = await loginAndGetCookies();

      const res = await axios.get(url, {
        headers: {
          // Cookie: cookies,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
        },
      });
      const $ = cheerio.load(res.data);
      const movieData = [];

      $(".table-responsive-sm .ng-star-inserted p").each((i, movie) => {
        const title = $(movie).text().trim();
        movieData.push(title);
      });

      setMovieData(movieData);
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
      {movieData.map((movie, index) => (
        <Text key={index}>{movie}</Text>
      ))}
    </View>
  );
};

export default TestScrapingWeb;

const styles = StyleSheet.create({});
