const express    = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'vue'
  });

const app = express();

var request = require('request');

app.use(bodyParser.json()); // json을 parse하도록 함​
app.use(cors());
app.use(express.static("."));

// 세션 미들웨어 설정
app.use(
    session({
      secret: '1234',
      resave: false,
      saveUninitialized: true
    })
  );

  app.post('/api/login', (req, res) => {
    let nickname = req.body.nickname; // 요청 본문에서 닉네임 추출
    console.log(nickname);
    req.session.nickname = nickname;
    console.log(req.session.nickname);
    connection.connect();
    //1. select 쿼리로 존재 체크 
    //2. 존재하면 그냥 연결 및 세션, 
    //3. 존재 안하면 db 추가 및 세션연결
    let check = `SELECT * FROM user WHERE nickname = '${nickname}'`
    let query = `INSERT INTO user (nickname) VALUES ('${nickname}')`
    // let query = `SELECT * FROM user`
    // console.log(query)
    let myresult = ''
    connection.query(query, function(error, results, fields){
        if(error) {
            console.log(error)
            throw error
        }
        // res.send(results);
        myresult = results
      });
      connection.end()
      //res.json({ success : true });
      res.status(200).send(nickname)
  });

  app.get('/getUserInfo', (req, res) => {
    const nickname = req.session.nickname; // 세션에서 닉네임 읽기
    res.json({ nickname });
  });

// configuration =========================​

app.set('port', process.env.PORT || 8030);
app.use( '/', express.static( path.join(__dirname, './dist') ));  
app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});