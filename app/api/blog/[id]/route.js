import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        // console.log(params);
        const newBlog = await Blog.findById(params.id).populate("creator")
        if (!newBlog) return new Response("Blog Not Found", { status: 404 });
        console.log(newBlog);
        return new Response(JSON.stringify(newBlog), { status: 200 })

    } catch (error) {
        console.log(error);
        return new Response("Internal Server Error !!", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { Blog, tags } = await request.json();

    try {
        await connectToDB();

        // Find the existing Blog by ID
        const existingPrompt = await Blog.findById(params.id);

        if (!existingPrompt) {
            return new Response("Blog not found", { status: 404 });
        }

        // Update the Blog with new data
        existingPrompt.data = Blog;
        existingPrompt.tags = tags;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Error Updating Blog", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the Blog by ID and remove it
        await Blog.findByIdAndRemove(params.id);

        return new Response("Blog deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Blog", { status: 500 });
    }
};
