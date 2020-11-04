const { Pool } = require("pg");

const PG_URI = "postgres://quvlnqqx:qKiIz0_ETiWQ1HLhflZPWIXKoJ7q2MWa@lallah.db.elephantsql.com:5432/quvlnqqx";
// console.log(PG_URI)

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});


module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query',params, text);
    return pool.query(text, params, callback);
  },
};
