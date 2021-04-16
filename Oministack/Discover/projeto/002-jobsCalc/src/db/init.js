const database = require('./config');

database()

database.exec(`CREATE TABLE profile(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  avatar TEXT,
  monthly_budget INT,
  days_per_week INT,
  hours_per_day INT,
  vacation_per_year INT,
  value_hour INT
)`);

database.exec(`CREATE TABLE jobs(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  daily_hours INT,
  total_hours INT,
  created_at DATETIME
);`);

database.run(`INSERT INTO profile(
  name,
  avatar,
  monthly_budget,
  days_per_week,
  hours_per_day,
  vacation_per_year,
  value_hour 
) VALUES (
  "Gabriel",
  "https://github.com/gabrielchagas1.png",
  1500,
  5,
  5,
  4,
  75
);`);

database.run(`INSERT INTO jobs(
  name,
  daily_hours,
  total_hours,
  created_at
)VALUES(
  "Pizzaria Guloso",
  3,
  1,
  1617753484744
);`)

database.close();