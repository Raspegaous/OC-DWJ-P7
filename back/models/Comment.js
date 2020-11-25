const mysql = require('mysql2');

const TABLE = 'comments';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

/**
 *
 * @return {Promise<*>|void}
 */
exports.get = () => {
    return db.connect((error) => {
        if (error) throw error;
        return db.promise().query(
            `SELECT * FROM ${TABLE}`,
        )
            .then(results => results[0])
            .catch(error => { throw error });
    });
}

/**
 *
 * @param {Object} data
 * @return {Promise<*>|void}
 */
exports.create = (data) => {
    return db.connect(error => {
        if (error) throw error;
        return db.promise().query(
          `INSERT INTO ${TABLE} (user_id, post_id, content) VALUES (?, ?, ?)`,
          [data.userId, data.postId, data.content]
        )
            .then(response => response)
            .catch(error => { throw error });
    })
}

/**
 *
 * @param {BigInt} id
 * @return {Promise<Object>|void}
 */
exports.delete = (id) => {
    return db.connect(error => {
        if (error) throw error;
        return db.promise().query(
            `DELETE FROM ${TABLE} WHERE id = ?`,
            [id]
        )
            .then(() => id)
            .catch(error => { throw error });
    })
}
