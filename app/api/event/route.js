import Event from "@models/event";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const Events = await Event.find({}).populate('creator')
        console.log(Events);
        return new Response(JSON.stringify(Events), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all Events !!", { status: 500 })
    }
} 