const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const USERS_FILE = "passwords.json";

// Enable CORS for cross-origin requests
app.use(cors());
app.use(express.json());

// Load users from JSON file
function loadUsers() {
    try {
        if (!fs.existsSync(USERS_FILE)) {
            console.warn(
                `${USERS_FILE} not found. Initializing with an empty object.`,
            );
            fs.writeFileSync(USERS_FILE, JSON.stringify({}, null, 2));
            return {};
        }
        const data = fs.readFileSync(USERS_FILE, "utf8");
        return JSON.parse(data || "{}"); // Safeguard against empty file content
    } catch (error) {
        console.error("Error reading users file:", error);
        return {}; // Return an empty object if an error occurs
    }
}

// Save users to JSON file
function saveUsers(users) {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
        console.log(`Successfully updated ${USERS_FILE}`);
    } catch (error) {
        console.error("Error saving users file:", error);
    }
}

// Signup Route
app.post("/signup", async (req, res) => {
    console.log("Incoming signup request:", req.body);

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Username and password are required.",
        });
    }

    const users = loadUsers();

    if (users[username]) {
        return res.status(400).json({
            success: false,
            message: "Username already exists.",
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        users[username] = { password: hashedPassword };
        saveUsers(users);
        res.status(201).json({
            success: true,
            message: "User registered successfully!",
        });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    console.log("Incoming login request:", req.body);

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Username and password are required.",
        });
    }

    const users = loadUsers();

    if (!users[username]) {
        return res.status(404).json({
            success: false,
            message: "User not found.",
        });
    }

    try {
        const isMatch = await bcrypt.compare(
            password,
            users[username].password,
        );
        if (isMatch) {
            res.json({ success: true, message: "Login successful!" });
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid credentials.",
            });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
});

// Catch-All Route for Undefined Endpoints
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found.",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
