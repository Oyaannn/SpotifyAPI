const { config } = require('dotenv')
const db = require('../config/db')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'dskjdlzjdsjk279usand09wwqmd'
const bcrypt = require('bcrypt')

const userRegistration = async (data) => {
    const { name, email, phone, password } = data
    if (!name || !email || !password) {
        return "Data is not valid"
    }
    try {
        const salt = 10
        const hash = await bcrypt.hash(password, salt)
        const [result] = await db.query('INSERT INTO users (name,email,phone,password) values(?,?,?,?)', [name, email, phone, hash])
        return ({ id: result.insertId, hash: hash })
    } catch (error) {
        console.log(error)
    }
}

const userLogin = async (data) => {
    const { email, password } = data
    if (!email || !password) {
        return "Email and Password Required"
    }
    try {
        const query = "SELECT * FROM users WHERE email=?"
        const [result] = await db.query(query, [email])
        const isLogin = await bcrypt.compare(password, result[0].password)
        if (isLogin) {
            const payload = {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email
            }
            const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" })
            return ({
                message: "Login Successfull",
                token: token
            })
        }
        return ({
            message: "Wrong username or password"
        })
    } catch (error) {
        console.log(erorr);
    }
}

const getAllUser = async () => {
    try {
        const query = "SELECT * FROM users"
        const [result] = await db.query(query)
        return result
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (id, data) => {
    try {
        const { name, email, phone } = data;
        const query = "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?";
        const [result] = await db.query(query, [name, email, phone, id]);
        return result.affectedRows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteUser = async (id) => {
    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id])
        return result.affectedRows
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = { userRegistration, userLogin, getAllUser, updateUser, deleteUser }