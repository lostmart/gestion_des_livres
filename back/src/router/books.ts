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
	res.json({
		message: [
			{
				id: 1,
				title: "The Hitchhiker's Guide to the Galaxy",
				author: "Douglas Adams",
				year: 1979,
			},
			{
				id: 2,
				title: "The Lord of the Rings",
				author: "J.R.R. Tolkien",
				year: 1954,
			},
			{
				id: 3,
				title: "Harry Potter and the Philosopher's Stone",
				author: "J.K. Rowling",
				year: 1997,
			},
		],
	})
})

/**
 * @route GET /api/books
 * @group Books - Operations related to books
 * @returns {Object} 200 - A message from the books route
 * @example response - 200 - application/json
 * {
 *   one books as an object
 * TO DO : filter books ❗
 * }
 */

booksRouter.get("/:_id", (_req: Request, res: Response) => {
	res.json({
		message: [
			{
				id: 1,
				title: "The Hitchhiker's Guide to the Galaxy",
				author: "Douglas Adams",
				year: 1979,
			},
		],
	})
})

export default booksRouter
