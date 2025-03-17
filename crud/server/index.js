const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const UserModel = require('./models/Users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve images statically

// Ensure "uploads" folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files to "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});
const upload = multer({ storage: storage });

// Connect to MongoDB
mongoose.connect("mongodb+srv://waqar:12qw%21%40QW@cluster0.qnrye.mongodb.net/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes

// Get all users
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

// Get single user by ID
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

// Create a new user with an image
app.post("/createUser", upload.single("image"), (req, res) => {
    const { name, email, age } = req.body;
    const image = req.file ? req.file.filename : null;

    UserModel.create({ name, email, age, image })
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

// Update user with or without a new image
app.put('/updateUser/:id', upload.single("image"), (req, res) => {
    const { name, email, age } = req.body;
    const id = req.params.id;

    UserModel.findById(id)
        .then(user => {
            if (!user) return res.status(404).json({ message: "User not found" });

            if (req.file) {
                // Delete old image if it exists
                if (user.image) {
                    fs.unlink(path.join(__dirname, 'uploads', user.image), (err) => {
                        if (err) console.log("Failed to delete old image:", err);
                    });
                }
                user.image = req.file.filename;
            }

            user.name = name;
            user.email = email;
            user.age = age;

            return user.save();
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err));
});

// Delete user and remove their image
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;

    UserModel.findByIdAndDelete(id)
        .then(user => {
            if (user && user.image) {
                fs.unlink(path.join(__dirname, 'uploads', user.image), (err) => {
                    if (err) console.log("Failed to delete image:", err);
                });
            }
            res.json({ message: "User deleted successfully" });
        })
        .catch(err => res.json(err));
});

// Start Server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
