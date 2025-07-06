import express from "express"

import booksRouter from "./router/books"

const app = express()
const PORT = process.env.PORT || 3000

/**
 * @route GET /
 * @group Root - Base endpoint to check if server is running
 * @returns {Object} 200 - A simple success message
 */
app.get("/", (req, res) => {
	res.json({
		message: "Hello World",
	})
})

// Middleware to parse JSON bodies
//app.use(express.json())
// Mount the books router under /api/books
app.use("/api/books/", booksRouter)

/**
 * Start the Express server
 * @function
 */
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
