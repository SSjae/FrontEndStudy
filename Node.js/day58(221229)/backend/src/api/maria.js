const mysql = require("mysql");

const conn = {
  host: "127.0.0.1",
  port: "3310",
  user: "root",
  password: "1234qwer",
  database: "facebook",
};

const Maria = {};

const queryFunc = (sql) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(conn);
    connection.connect();

    connection.query(sql, (err, results) => {
      if(err) {
        console.trace(err);
        reject(err);
      } else {
        connection.end();
        resolve(results);
      }
    })
  })
}

Maria.selectUsers = (params) => {
  return new Promise(async (resolve) => {
    const sql = "select * from users";
    const result = await queryFunc(sql);
    resolve(result);
  });
};

Maria.insertUser = (params) => {
  return new Promise(async (resolve) => {
    const {userid, password, email, year, month, day, gender} = params;
    const birthday = String(year) + month + day;
    const sql = `insert into users(userid, password, email, birthday, gender, updatetime, createtime)
                  values('${userid}', '${password}', '${email}', '${birthday}', '${gender}',
                  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`;
    const result = await queryFunc(sql);
    resolve(result);
  });
}

Maria.checkUser = (params) => {
  return new Promise(async (resolve) => {
    const {userid} = params;

    const sql = `select * from users where userid='${userid}';`;
    const result = await queryFunc(sql);
    resolve(result);
  });
}

Maria["findUser"] = (params) => {
  return new Promise(async (resolve) => {
    const {userid, password} = params;

    const sql = "select * from users where " +
      `userid="${userid}" and password="${password}";`;
    const result = await queryFunc(sql);
    resolve(result);
  });
};

Maria.findAccountid = (params) => {
  return new Promise(async (resolve) => {
    const {email} = params;

    const sql = `select * from users where email='${email}';`;
    const result = await queryFunc(sql);
    resolve(result && result[0] ? result[0] : null);
  });
}

Maria.deleteUser = (params) => {
  return new Promise(async (resolve) => {
    const {userid, email} = params;

    const sql = `delete from users where userid='${userid}' and email='${email}';`;
    const result = await queryFunc(sql);
    resolve(result && result.affectedRows > 0 ? true : false);
  });
}

Maria.selectHome = (params) => {
  return new Promise(async (resolve) => {
    const sql = "select * from home";
    const result = await queryFunc(sql);
    resolve(result);
  })
}

Maria.updateLike = (params) => {
  return new Promise(async (resolve) => {
    const {likecount, homeid} = params;
    const sql = `update home set likecount = ${likecount + 1} where homeid='${homeid}'`;
    const result = await queryFunc(sql);
    resolve(result);
  })
}

Maria.findHome = (params) => {
  return new Promise(async (resolve) => {
    const {homeid} = params;
    const sql = `select * from home where homeid='${homeid}'`;
    const result = await queryFunc(sql);
    resolve(result);
  })
}

module.exports = Maria;