const db = require("../config/db");
const moment = require("moment");
require("moment/locale/th");
moment().locale("th");
exports.creted = async (req, res) => {
  const title = req.body.title;
  const start = moment(req.body.start)
    .add(1, "days")
    .toISOString();
  const end = moment(req.body.end).add(1, "days").toISOString();
  console.log(req.body);
  const insert = `insert into datestamp (title,start,end) value ('${title}','${start}','${end}')`;
  db.query(insert, (err, result) => {
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
};

exports.get = async (req, res) => {
  const get = `select * from datestamp`;
  db.query(get, (err, result) => {
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
};
