// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subscriptions, Volunteer, Event } = initSchema(schema);

export {
  Subscriptions,
  Volunteer,
  Event
};