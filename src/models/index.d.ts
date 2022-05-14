import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SubscriptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VolunteerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Subscriptions {
  readonly id: string;
  readonly eventId?: string | null;
  readonly volunteerId?: string | null;
  readonly registered?: boolean | null;
  readonly interested?: boolean | null;
  readonly viewed?: boolean | null;
  readonly attended?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Subscriptions, SubscriptionsMetaData>);
  static copyOf(source: Subscriptions, mutator: (draft: MutableModel<Subscriptions, SubscriptionsMetaData>) => MutableModel<Subscriptions, SubscriptionsMetaData> | void): Subscriptions;
}

export declare class Volunteer {
  readonly id: string;
  readonly orgName?: string | null;
  readonly role?: string | null;
  readonly preferences?: string | null;
  readonly log?: string | null;
  readonly gender?: string | null;
  readonly skillset?: (string | null)[] | null;
  readonly interests?: (string | null)[] | null;
  readonly profileCompleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Volunteer, VolunteerMetaData>);
  static copyOf(source: Volunteer, mutator: (draft: MutableModel<Volunteer, VolunteerMetaData>) => MutableModel<Volunteer, VolunteerMetaData> | void): Volunteer;
}

export declare class Event {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly startDateTime?: string | null;
  readonly mobile?: string | null;
  readonly duration?: number | null;
  readonly skillset?: (string | null)[] | null;
  readonly perks?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly guidelines?: (string | null)[] | null;
  readonly meetingLink?: string | null;
  readonly social?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}