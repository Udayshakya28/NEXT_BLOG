import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const Blog = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(Blog), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch Blog created by user", { status: 500 })
    }
} 