const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001
const mysql = require('mysql');
const { response } = require('express');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd',
  database: 'express_db'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected');  
});

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.json());

// バトルログ初期表示
app.get("/getBattleLog", (req,res) => {
  const sql = 'SELECT * FROM battlelog ORDER BY battledate DESC';
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

// バトルログ検索処理
app.post("/searchBattleLog", (req, res) => {

  // 検索条件
  const guildname = req.body.guildname;
  const masterId = req.body.masterId;
  let cond1 = "";
  let cond2 = "";
  
  // WHERE句
  let condition = "";
  if (guildname == "" && masterId == "") {
    condition = "";
  } else if (guildname == "") {
    condition = "WHERE masterId = ? ";
    cond1 = masterId;;
  } else if (masterId == "") {
    condition = "WHERE guildname = ? ";
    cond1 = guildname;
  } else {
    condition = "WHERE guildname = ? AND masterId = ? ";
    cond1 = guildname;
    cond2 = masterId;
  }

  // SQL
  const sql = 'SELECT * FROM battlelog ' + condition + 'ORDER BY battledate DESC';
  console.log(sql);
  
  // 検索処理
  con.query(sql, [cond1, cond2], function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  })
});

// バトルログ登録処理
app.post("/insertBattleLog", (req, res) => {
  const sql = 'INSERT INTO battlelog (battledate, guildname, masterId, life1, life2, memo) VALUES (?,?,?,?,?,?)';
  const battledate = req.body.battledate;
  const guildname = req.body.guildname;
  const masterId = req.body.masterId;
  const life1 = req.body.life1;
  const life2 = req.body.life2;
  const memo = req.body.memo;
  con.query(sql, [battledate, guildname, masterId, life1, life2, memo], function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  })
})

// ナイトメアリスト取得
app.get("/getNightmareList", (req, res) => {
  const sql = 'SELECT * FROM nightmarelist ORDER BY sortNo';
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

// ナイトメアリスト更新
app.post("/updateNightmareList", (req, res) => {
  const index = req.body.index;
  const member = req.body.member;
  const nightmare = req.body.nightmare;
  const sql = 'UPDATE nightmarelist SET ' + member + ' = ? WHERE sortNo = ?';
  con.query(sql, [nightmare, index], function(err, result, fields) {
    if(err) throw err;
    res.send(result);
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});