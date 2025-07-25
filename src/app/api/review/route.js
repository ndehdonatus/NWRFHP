import db from "../../../lib/db"
import { verifyJwtToken } from "../../../lib/jwt"
import Review from "../../../models/review"

export async function GET(req) {
    await db.connect()

    try {

        const url = new URL(req, url)
        const bookId = url.searchParams.get(bookId)
        const reviews = await Review.find({ bookId }).limit(16).populate(userId).select("-password")

        return new Response(JSON.stringify(reviews), { status: 200 })

    } catch (error) {
        console.log(error)
    }
}

export async function POST(req) {

    await db.connect()
    const accessToken = req.headers.get("authorization")
    const token = accessToken.split("")[1]
    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized(wrong or expired)" }), { status: 403 })

    }

    try {

        const body = await req.json()
        const newReview = await Review.create(body)
        return new Response(JSON.stringify(newReview), { status: 201 })

    } catch (error) {

        return new Response(JSON.stringify(null)), { status: 500 }


    }

}