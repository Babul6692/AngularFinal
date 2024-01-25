const express = require('express')
const cors = require('cors')
const app = express()
const dbobj = require('./dbobj')
const exp = require('constants')
const portno = 8080
app.use(cors())
app.use(express.json())

// app.get("/",(req,res)=>{
//     console.log('requesting server.....')
//     res.json({msg: "home"})
// })

app.get("/getData", (req, res) => {
    let querystr = "select * from users"
    dbobj.conn.query(querystr, (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else if (data.length === 0) {
            res.send("No Data Found")
        }
        else {
            res.send(data)
        }
    })

})

app.post("/verifyUser", (req, res) => {
    const data = req.body
    const email = data.email
    const pass = data.password

    let querystr = "select * from users where email = ? and pass = ?"
    dbobj.conn.query(querystr, [email, pass], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else if (result.length === 0) {
            console.log(result)
            res.send(result)
        }
        else {
            res.send(result)
            console.log(result)
        }
    })
})


app.post("/addUser", (req, res) => {
    data = req.body
    usn = data.username
    email = data.email
    pass = data.password

    let querystr = "insert into users values (?,?,?)"
    dbobj.conn.query(querystr, [usn, email, pass], (err) => {
        if (err) throw err
        else {
            res.json(usn)
        }

    })

})

app.delete("/deleteuser", (req, res) => {
    console.log(req.query.email)
    mail = req.query.email
    let querystr = "delete from users where email = ?"
    dbobj.conn.query(querystr, [mail], (err) => {
        if (err) throw err
        else {
            res.json({ data: "unsubscribed successfully" })
        }

    })
})

app.listen(portno, () => {
    console.log(`server is running at port no = ${portno}`)
})