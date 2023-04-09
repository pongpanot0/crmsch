const db = require("../config/db");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  let username = req.body.username;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let company_id = req.body.company_id;
  let count = `SELECT COUNT(username)  AS name2 FROM users WHERE username='${username}'`;
  db.query(count, async (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result[0].name2 >= 1) {
      console.log("มีUsername นี่แล้ว");
    }
    if (result[0].name2 == 0) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log(err);
        }
        if (hash) {
          let create = `INSERT INTO users (username,first_name,last_name,email,password,company_id)  VALUES ('${username}','${first_name}','${last_name}','${email}','${hash}','${company_id}')`;
          db.query(create, (err, result) => {
            if (err) {
              console.log(err);
            }
            if (result) {
              res.send({
                status: 200,
                data: result,
              });
            }
          });
        }
      });
    }
  });
};

exports.login = async (req, res) => {
  let username = req.body.username;
  db.query(
    `select * from users  WHERE username = '${username}'`,
    async (err, result) => {
      console.log(result);
      if (err) {
        res.send({
          status: 400,
          message: "ชื่อหรือรหัสผ่านไม่ถูกต้อง",
        });
        return;
      }
      if (result[0] === null || result[0] === [] || result[0] === undefined) {
        res.send({
          status: 400,
          message: "ชื่อหรือรหัสผ่านไม่ถูกต้อง",
        });
        return;
      }
      if (result) {
        bcrypt.compare(
          req.body.password,
          result[0]["password"],
          (bErr, bResult) => {
            if (bErr) {
                console.log(bErr)
              throw bErr;
              return res.status(401).send({
                msg: "Email or password is incorrect!",
              });
            }
            if (bResult) {
              const token = jwt.sign(
                {
                  user_id: result[0].user_id,

                  first_name: result[0].first_name,
                  last_name: result[0].last_name,
                  email: result[0].email,
                  company_id: result[0].company_id,
                },
                "zuHbAry/7IrrSQaynzj4c8i8n1iO+CCqzdyeXgRNlfDdQBUJcX9yrYGc98fqp169/ELDSLwtvzebeQ0nf6WkOiXUhOdStRMhPykd/nJwEdmENXThvX9Map7k1gwvXvciZ48DYVc7nntfN82k+ZXSRX2+rTN8YEK3S7tP/0csBYdQwB6OS5FzMHM1gQvK3VX4QAlC6nDbvLsYOBqZcYsDlvlL/Uglw57wNNpLfwjQQC+zXBFvGnROVNLh//yyBl1kB+YmIZXrnkrUkNbLm7QteW+6nXUWZ1gQOEatjCr9NnYxaY4Ve0QABq0sHzifZ65Bz4HVFptun97VS4LSTJmxeQ==",
                { expiresIn: "1h" }
              );
              res.send({
                status: 200,
                token: token,
                user: result,
              });
            } else {
              return res.send({
                status: 400,
                message: "ชื่อหรือรหัสผ่านไม่ถูกต้อง",
              });
            }
          }
        );
      }
    }
  );
};
