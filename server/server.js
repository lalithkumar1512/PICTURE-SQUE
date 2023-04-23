const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const multer = require("multer");
var morgan = require("morgan");
var path = require("path");
var rfs = require("rotating-file-stream");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const redisclient = require("./redis");
// const helmet = require("helmet");

const Posts = require("./models/posts");
const User = require("./models/user");
const Query = require("./models/query");
const contestregistrations = require("./models/contestregistrations");
const Winner = require("./models/winner");
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PICTURESQUE",
      version: "0.1.0",
      description: "Photography Blogging Site",
      contact: {
        name: "picturesque",
        url: "https://picturesque.com",
        email: "picturesque@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./models/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
// app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

mongoose
  .connect(
    "mongodb+srv://lalithkumarg20:chinnapinni@picturesquedb.wr3wvfl.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log(`Server listening on 5000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


  app.get("/",async (req, res) => {
    res.send("Hello World")
  })
app.get("/getusers", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getcrs", async (req, res) => {
  try {
    const contestregistration = await contestregistrations.find();
    return res.json(contestregistration);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getqs", async (req, res) => {
  try {
    const q = await Query.find();
    return res.json(q);
  } catch (err) {
    console.log(err);
  }
});

//MiddleWare
const verify = (token) => {
  var check = 0;
  jwt.verify(token, "mySecretKey", (err, user) => {
    if (err) {
      console.log(1);
    } else {
      console.log(2);
      check = 1;
    }
  });
  if (check === 1) return true;
  else return false;
};

app.post("/delete", async (req, res) => {
  try {
    await Posts.deleteOne({ _id: req.body.id });
    const posts = await Posts.find();
    return res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

app.post("/getposts", async (req, res) => {
  try {
    console.log(verify(req.body.accesstoken));
    const posts = await Posts.find({});
    console.log(posts);
    return res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

app.post("/myposts", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const posts = await Posts.find({ email: email });
    console.log(posts);
    return res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

app.post("/deleteuser", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    await User.deleteOne({ email: email });
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
  }
});

app.post("/deletecrs", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    await contestregistrations.deleteOne({ email: email });
    const posts = await contestregistrations.find();
    return res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

app.post("/deleteqs", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    await Query.deleteOne({ email: email });
    const crs = await Query.find();
    return res.json(crs);
  } catch (err) {
    console.log(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const emailCheck = await User.findOne({ email: req.body.email });
    console.log(emailCheck);
    if (emailCheck == null) {
      console.log(req.body);
      const hashedpassword = await bcrypt.hash(req.body.password, 10);
      console.log(req.body);
      const input = {
        username: req.body.username,
        password: hashedpassword,
        email: req.body.email,
        phnumber: req.body.phnumber,
        picture: req.body.picture,
      };
      const user = await User.create(input);
      return res.json({ status: true });
    } else {
      return res.json({ status: false });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/contactus", async (req, res) => {
  try {
    console.log(req.body);
    const query = await Query.create(req.body);
  } catch (err) {
    console.log(err);
  }
});

app.post("/contestregistrations", async (req, res) => {
  try {
    console.log(req.body);
    const contest = await contestregistrations.create(req.body);
  } catch (err) {
    console.log(err);
  }
});

app.get("/cr", async (req, res) => {
  try {
    const contest = await contestregistrations.count();
    return res.json(contest);
  } catch (err) {
    console.log(err);
  }
});

app.get("/ps", async (req, res) => {
  try {
    const contest = await Posts.count();
    return res.json(contest);
  } catch (err) {
    console.log(err);
  }
});

app.get("/us", async (req, res) => {
  try {
    const contest = await User.count();
    return res.json(contest);
  } catch (err) {
    console.log(err);
  }
});

app.post("/contestregistrations", async (req, res) => {
  try {
    console.log(req.body);
    const contest = await contestregistrations.create(req.body);
  } catch (err) {
    console.log(err);
  }
});

app.post("/posts", async (req, res) => {
  try {
    console.log(req.body);
    const post = await Posts.create(req.body);
  } catch (err) {
    console.log(err);
  }
});

app.post("/updatepost", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body);
    const input = {
      file: "http://localhost:5000/" + req.file.path,
      title: req.body.title,
      tag: req.body.tag,
      email: req.body.email,
      desc: req.body.desc,
    };
    const post = await Posts.updateOne(input);
  } catch (err) {
    console.log(err);
  }
});

app.post("/likecheck", async (req, res) => {
  try {
    console.log("REq", req.body.email);
    const post = await Posts.findOne({ file: req.body.file.file });
    console.log(post.likedb);
    let flag = 0;
    post.likedb.forEach((e) => {
      console.log(e);
      if (e === req.body.email) {
        console.log("Its False");
        flag = 1;
        return res.json({ status: false });
      }
    });
    if (flag === 0) {
      console.log("Its True");
      return res.json({ status: true });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/increaselikecount", async (req, res) => {
  try {
    const post = await Posts.findOne({ file: req.body.file.file });
    // console.log(post.file)
    // console.log(req.body.file.file)
    post.likes = post.likes + 1;
    // await post.save()
    const posts = await Posts.findOneAndUpdate(
      { file: req.body.file.file },
      { $inc: { likes: 1 } }
    );
    const likedb = await Posts.findOneAndUpdate(
      { file: req.body.file.file },
      { $push: { likedb: req.body.email } }
    );
    console.log("Likedb:", likedb);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let data = await redisclient.get(email);
    if (data) {
      console.log("cached")
      data = JSON.parse(data)
      const emailCheck = data
      try {
        if (await bcrypt.compare(password, emailCheck.password)) {
          const accesstoken = jwt.sign(
            { email: emailCheck.email },
            "mySecretKey"
          );
          return res.json({
            status: true,
            email: emailCheck.email,
            username: emailCheck.username,
            accesstoken,
          });
        } else {
          return res.json({ status: false });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      const emailCheck = await User.findOne({ email })
      if (!emailCheck) return res.json({ msg: "Invalid email", status: false });
      redisclient.set(email,JSON.stringify(emailCheck))
      try {
        if (await bcrypt.compare(password, emailCheck.password)) {
          const accesstoken = jwt.sign(
            { email: emailCheck.email },
            "mySecretKey"
          );
          return res.json({
            status: true,
            email: emailCheck.email,
            username: emailCheck.username,
            accesstoken,
          });
        } else {
          return res.json({ status: false });
        }
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/contestwinner", async (req, res) => {
  try {
    const cw = await Winner.find();
    console.log(cw[0]);
    if (cw[0] != undefined) {
      await Winner.deleteOne({ email: cw[0].email });
    }
    const contestwinner = await Winner.create({
      email: req.body.email,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/getcontestwinner", async (req, res) => {
  try {
    const contestwinner = await Winner.find();
    const user = await User.findOne({ email: contestwinner[0].email });
    console.log(user);
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
  // const emailCheck = await User.findOne({email})
});

app.post("/topbar", async (req, res) => {
  try {
    const { email } = req.body;
    const emailCheck = await User.findOne({ email });
    return res.json(emailCheck);
  } catch (err) {
    console.log(err);
  }
});
