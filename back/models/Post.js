const mysql = require('mysql2');

const TABLE = 'posts';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

exports.getAll = (params) => {
    return db.connect((error) => {
        if (error) throw error;
        return db.promise().query(`SELECT * FROM ${TABLE}`)
            .then(results => results[0])
            .catch(error => { throw error; });
    });
}

/**
 *
 * @param {BigInt} id
 * @return {Promise<Object>|void}
 */
exports.get = (id) => {
    return db.connect(error => {
        if (error) throw error;
        return db.promise().query(
            `SELECT * FROM ${TABLE} WHERE id = ? INNER JOIN comments ON ${TABLE}.id = comments.post_id`,
            [id]
        )
            .then(response => response[0][0])
            .catch(error => { throw error; });
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
            `INSERT INTO ${TABLE} (user_id, title, category, content, image) VALUES (?, ?, ?, ?, ?)`,
            [data.userId, data.title, data.category.toLowerCase(), data.content, data.image]
        )
            .then(response => JSON.stringify(response))
            .catch(error => { throw error });
    });
}

/**
 *
 * @param {BigInt} id
 * @param liking
 * @return {Promise<Object>|void}
 */
exports.liking = (id, liking) => {
    return db.connect(error => {
        if (error) throw error;
        return db.promise().query(
            `UPDATE ${TABLE} SET liked = ? WHERE id = ?`,
            [liking, id]
        )
            .then(response => response)
            .catch(error => { throw error })
    })
}

/**
 *
 * @param {BigInt} id
 * @param {Object} data
 * @return {Promise<Object>|void}
 */
exports.update = (id, data) => {
    return db.connect(error => {
        if (error) throw error;
        return db.promise().query(
            `UPDATE ${TABLE} SET title = ?, content = ?, slug = ? WHERE id = ?`,
            [data.title, data.content, id]
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
            .then(response => response)
            .catch(error => { throw error });
    })
}
