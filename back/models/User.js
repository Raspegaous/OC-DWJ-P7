const mysql = require('mysql2');

const TABLE = 'users';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

/**
 *
 * @param {string} email
 * @return {Promise<Object>|void}
 */
exports.getOne = (email) => {
    return db.connect((err) => {
        if (err) throw err;
        return db.promise().query(
            `SELECT * FROM ${TABLE} WHERE email = ?`,
            [email]
        )
            .then(response => response[0][0] )
            .catch( error => { throw error; });
    })
}

/**
 *
 * @param {string} email
 * @param {string} password
 * @return {Promise<Object>|void}
 */
exports.create = (email, password) => {
    return db.connect((err) => {
        if (err) throw err;
        return db.promise().query(
            `INSERT INTO ${TABLE} (email, password) VALUES (?, ?)`,
            [email, password]
        )
            .then((response) => response)
            .catch(error => { throw error; })
    });
}

exports.getAll = () => {
    return db.connect((err) => {
        if (err) throw err;
        return db.promise().query(
            `SELECT id, email, avatar, role, updated_at FROM ${TABLE}`
        )
            .then((response) => response[0])
            .catch((error) => { throw error; })
    })
}

/**
 *
 * @param {Object} data
 * @return {Promise<Object>}
 */
exports.update = (data) => {
    return db.promise().query(
        `UPDATE ${TABLE} SET updated_at = ? WHERE id = ${data.userId}`,
        [data.updatedAt]
    )
        .then((response => response)
        .catch(error => { throw error })
    );
}

exports.delete = (id) => {
    return db.connect(err => {
        if (err) throw err;
        return db.promise().query(
            `DELETE FROM ${TABLE} WHERE id = ?`,
            [id]
        )
            .then((response) => response)
            .catch((error) => { throw error })
    })
}
