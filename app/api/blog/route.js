import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const Blogs = await Blog.find({}).populate('creator')
        console.log(Blogs);
        return new Response(JSON.stringify(Blogs), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all blogs !!", { status: 500 })
    }
} 