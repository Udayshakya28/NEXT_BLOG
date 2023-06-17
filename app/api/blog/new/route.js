import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, data } = await request.json();

    try {
        await connectToDB();
        const newBlog = new Blog({ creator: userId, data});

        await newBlog.save();
        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new Blog", { status: 500 });
    }
}
