const NEWS_API_KEY = '0f9bae39f4644f76b6f720b986bef875';
var request = require('request');
request('https://newsapi.org/v2/top-headlines?country=de&apiKey=0f9bae39f4644f76b6f720b986bef875' , function (error, response, body) {


    if (response.statusCode === 200){
        var bodyObj = JSON.parse(body);
        console.log('Anzahl Ergebnisse ' + bodyObj.totalResults);
        for (var i = 0; i < bodyObj.articles.length; i++){
            if (bodyObj.articles[i].title){
            console.log((i+1) + '. ' + bodyObj.articles[i].title + ' '+ bodyObj.articles[i].url);
            }
        }
    }

});
//console.log('Hello Node.js');
// const response = {
//     "status": "ok",
//     "totalResults": 38, 
//     "articles": [
//         {
//             "source": {
//                 "id": "cnn",
//                 "name": "CNN"
//             },
//             "author": "Amanda Watts, CNN",
//             "title": "Officer shoots armed Wisconsin student in classroom - CNN",
//             "description": "An officer on Monday shot an armed 17 year old at a high school classroom in Waukesha, Wisconsin, a Milwaukee suburb, police said.",
//             "url": "https://www.cnn.com/2019/12/02/us/wisconsin-school-shooting/index.html",
//             "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/191202135245-waukesha-wi-high-school-2-super-tease.jpg",
//             "publishedAt": "2019-12-02T20:03:00Z",
//             "content": "(CNN)An officer on Monday shot an armed 17-year-old student at a high school classroom in the Milwaukee suburb of Waukesha, Wisconsin, police said.\r\nThe suspect, who police said pointed a handgun at officers, is in stable condition, Waukesha Police Chief Russ… [+1009 chars]"
//         }           
//     ]
// };

