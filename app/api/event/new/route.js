import Event from "@models/event";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, data } = await request.json();

    try {
        await connectToDB();
        const newEvent = new Event({ creator: userId, data});

        await newEvent.save();
        return new Response(JSON.stringify(newEvent), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new Event", { status: 500 });
    }
}
