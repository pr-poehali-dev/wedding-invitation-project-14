CREATE TABLE rsvp_responses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  day1 TEXT,
  day2 TEXT,
  plus1 TEXT,
  car TEXT,
  car_capacity TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
