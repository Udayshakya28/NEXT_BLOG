import { Schema, model, models } from 'mongoose';

const EventSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  data: {
    type: String,
    required: [true, 'Event is required.'],
  },
});

const Event = models.Event || model('Event', EventSchema);

export default Event;