const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const cheerio = require('cheerio');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`와우 ${port}`)
})

app.get('/api/idol/:group', async (req, res) => {
    // 파라미터 정보 가져오기
    let { group } = req.params;
  
    if (group === 'le_sserafim') {
        let data = [
            {name: "사쿠라", age: 24},
            {name: "김채원", age: 22},
            {name: "허윤진", age: 21},
            {name: "카즈하", age: 19},
            {name: "홍은채", age: 16},
        ];
        res.send(data);
    } else
    if (group === 'monsta-x') {
        let data = [
            {name: "셔누", age: 31},
            {name: "민혁", age: 30},
            {name: "기현", age: 30},
            {name: "형원", age: 29},
            {name: "주헌", age: 29},
            {name: "아이엠", age: 27},
        ];
      // 데이터 보내기
      res.send(data);
    } else
    if (group === 'red-velvet') {
        let data = [
            {name: "웬디", age: 29},
            {name: "아이린", age: 32},
            {name: "슬기", age: 29},
            {name: "조이", age: 27},
            {name: "예리", age: 24},
        ];
      // 데이터 보내기
        res.send(data);
    } else {
        res.send(req.params); 
    }
  })


  app.get('/api/bob/:school', async (req, res) => {
    // 파라미터 정보 가져오기
    let { school } = req.params;
    if (school === 'a') {
      async function a() {
        const resp = await axios.get(
          'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B1%B0%EC%A0%9C%ED%95%B4%EC%84%B1%EC%A4%91+%EA%B8%89%EC%8B%9D&oquery=%ED%95%B4%EC%84%B1%EC%A4%91+%EA%B8%89%EC%8B%9D&tqi=hItIBlp0J1ssst8%2FMP4ssssstoC-522363'
        );
        const $ = cheerio.load(resp.data);

        const data = $('div.timeline_box')
          .map((idx, el) => {
            return $(el).text();
          })
          .toArray();

        res.send(data)
      } 
      a();
    } else if (school === 'b') {
      async function b() {
        const resp = await axios.get(
          'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B1%B0%EC%A0%9C%ED%95%B4%EC%84%B1%EC%A4%91+%EA%B8%89%EC%8B%9D&oquery=%ED%95%B4%EC%84%B1%EC%A4%91+%EA%B8%89%EC%8B%9D&tqi=hItIBlp0J1ssst8%2FMP4ssssstoC-522363'
        );
        const $ = cheerio.load(resp.data);

        const data = $('div.timeline_box')
          .map((idx, el) => {
            return $(el).text();
          })
          .toArray();
        var result = data.find(function(data, index){
            return data.includes('TODAY') === true
        })
        res.send({result})
      } 
    b();
  }
  })