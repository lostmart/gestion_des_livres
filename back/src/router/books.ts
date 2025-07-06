import { Router, Request, Response } from "express"

const booksRouter = Router()

/**
 * @route GET /api/books
 * @group Books - Operations related to books
 * @returns {Object} 200 - A message from the books route
 * @example response - 200 - application/json
 * {
 *   "message": "Hello World from books"
 * TO DO : list of books ❗
 * }
 */

booksRouter.get("/", (_req: Request, res: Response) => {
	res.json({ message: "Hello World from books" })
})

export default booksRouter
