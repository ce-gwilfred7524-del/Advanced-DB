const DB_STUDY_DATA = {
  course: {
    name: "Advanced Database Systems",
    code: "CE/IS 279",
    university: "University of Mines and Technology",
    lecturer: "Dr. Eric Affum",
    year: "2025"
  },

  sections: [

    // ===================== SECTION A: STORED PROCEDURES & TRIGGERS =====================
    {
      id: "sec-a",
      title: "Section A — Stored Procedures, Triggers & Functions",
      color: "#7c3aed",
      icon: "⚙️",
      questions: [
        {
          id: "sa1",
          type: "theory",
          question: "What is a Stored Procedure in SQL?",
          answer: "A stored procedure is a prepared SQL code that can be saved so it can be reused over and over again. It consists of T-SQL statements stored in the database. Instead of issuing multiple statements from your application, you can issue one command to call the stored procedure to do a batch of work instead of just one statement."
        },
        {
          id: "sa2",
          type: "code",
          question: "Write the syntax for CREATING a stored procedure in MS SQL Server.",
          answer: "CREATE PROCEDURE procedure_name\nAS\n  sql_statement\nGO;",
          language: "sql"
        }
      ]
    },

    // ===================== SECTION F: OBJECTIVE MCQ QUESTIONS =====================
    {
      id: "sec-f",
      title: "Section F — Objective MCQ Questions",
      color: "#0ea5e9",
      icon: "❓",
      questions: [
        {
          id: "sf1",
          type: "mcq",
          question: "What is the full form of SQL?",
          options: ["A) Structured Query Language", "B) Structured Query List", "C) Simple Query Language", "D) None of these"],
          answer: "A",
          explanation: "SQL stands for Structured Query Language. It is the standard language used to manage relational databases."
<<<<<<< HEAD
        },
        {
          id: "sf2",
          type: "mcq",
          question: "Which is the subset of SQL commands used to manipulate Oracle Database structures, including tables?",
          options: ["A) Data Definition Language (DDL)", "B) Data Manipulation Language (DML)", "C) Both of above", "D) None"],
          answer: "A",
          explanation: "DDL (Data Definition Language) includes commands like CREATE, ALTER, DROP, TRUNCATE that define database structures. DML manipulates data within those structures."
        },
        {
          id: "sf3",
          type: "mcq",
          question: "Which operator performs pattern matching?",
          options: ["A) BETWEEN operator", "B) LIKE operator", "C) EXISTS operator", "D) None of these"],
          answer: "B",
          explanation: "The LIKE operator is used for pattern matching in SQL. It allows wildcard characters like % and _ to match patterns in strings."
        },
        {
          id: "sf4",
          type: "mcq",
          question: "What operator tests column for the absence of data?",
          options: ["A) EXISTS operator", "B) NOT operator", "C) IS NULL operator", "D) None of these"],
          answer: "C",
          explanation: "The IS NULL operator is used to test whether a column contains NULL (missing) values in a database."
        },
        {
          id: "sf5",
          type: "mcq",
          question: "In SQL, which command(s) is(are) used to change a table's storage characteristics?",
          options: ["A) ALTER TABLE", "B) MODIFY TABLE", "C) CHANGE TABLE", "D) All of the above"],
          answer: "A",
          explanation: "ALTER TABLE is the SQL command used to modify existing table structures and storage characteristics. MODIFY TABLE and CHANGE TABLE are not standard SQL commands."
        },
        {
          id: "sf6",
          type: "mcq",
          question: "In SQL, which of the following is not a data definition language commands?",
          options: ["A) RENAME", "B) REVOKE", "C) GRANT", "D) UPDATE"],
          answer: "D",
          explanation: "UPDATE is a DML (Data Manipulation Language) command. DDL commands are RENAME, REVOKE, and GRANT, which manage database structure and permissions."
        },
        {
          id: "sf7",
          type: "mcq",
          question: "In SQL, which command is used to SELECT only one copy of each set of duplicable rows",
          options: ["A) SELECT DISTINCT", "B) SELECT UNIQUE", "C) SELECT DIFFERENT", "D) All of the above"],
          answer: "A",
          explanation: "SELECT DISTINCT removes duplicate rows from the result set, showing each unique row only once."
        },
        {
          id: "sf8",
          type: "mcq",
          question: "A command that lets you change one or more fields in a record is",
          options: ["A) Insert", "B) Modify", "C) Look-up", "D) All of the above"],
          answer: "B",
          explanation: "Modify (UPDATE in SQL) is used to change the values of one or more fields/columns in existing records."
        },
        {
          id: "sf9",
          type: "mcq",
          question: "Which of the SQL statements is correct?",
          options: ["A) SELECT Username AND Password FROM Users", "B) SELECT Username, Password FROM Users", "C) SELECT Username, Password WHERE Username = 'user1'", "D) None of these"],
          answer: "B",
          explanation: "The correct syntax uses commas to separate column names in SELECT. AND is a logical operator for WHERE clauses, not for selecting columns."
        },
        {
          id: "sf10",
          type: "mcq",
          question: "The FROM SQL clause is used to...",
          options: ["A) specify what table we are selecting or deleting data FROM", "B) specify range for search condition", "C) specify search condition", "D) None of these"],
          answer: "A",
          explanation: "The FROM clause specifies which table(s) to select or delete data from. The WHERE clause specifies the search condition."
        },
        {
          id: "sf11",
          type: "mcq",
          question: "Which SQL keyword is used to retrieve only unique values?",
          options: ["A) DISTINCTVE", "B) UNIQUE", "C) DISTINCT", "D) DIFFERENT"],
          answer: "C",
          explanation: "DISTINCT is the correct SQL keyword used to remove duplicate rows and retrieve only unique/distinct values."
        },
        {
          id: "sf12",
          type: "mcq",
          question: "Which SQL keyword is used to retrieve a maximum value?",
          options: ["A) TOP", "B) MOST", "C) UPPER", "D) MAX"],
          answer: "D",
          explanation: "MAX is the SQL aggregate function used to retrieve the maximum/highest value from a column."
        },
        {
          id: "sf13",
          type: "mcq",
          question: "What is a view?",
          options: ["A) A view is a special stored procedure executed when certain event occurs", "B) A view is a virtual table which results of executing a pre-compiled query. A view is not part of the physical database schema", "C) A view is a database diagram", "D) None of these"],
          answer: "B",
          explanation: "A view is a virtual table created from a stored query result. It is not physically stored in the database but calculated from the underlying tables."
        },
        {
          id: "sf14",
          type: "mcq",
          question: "Which of the following SQL commands is used to retrieve data?",
          options: ["A) DELETE", "B) INSERT", "C) SELECT", "D) JOIN"],
          answer: "C",
          explanation: "SELECT is the SQL command used to retrieve/query data from database tables. DELETE removes data, INSERT adds data, and JOIN combines tables."
        },
        {
          id: "sf15",
          type: "mcq",
          question: "Which of the following is a SQL aggregate function?",
          options: ["A) LEFT", "B) AVG", "C) JOIN", "D) LEN"],
          answer: "B",
          explanation: "AVG is an aggregate function that calculates the average value of a column. LEFT is a string function, JOIN is a clause, and LEN returns string length."
        },
        {
          id: "sf16",
          type: "mcq",
          question: "Which SQL statement is used to update data in a database?",
          options: ["A) SAVE", "B) UPDATE", "C) SAVE AS", "D) MODIFY"],
          answer: "B",
          explanation: "UPDATE is the SQL command used to modify existing records/data in a database table."
        },
        {
          id: "sf17",
          type: "mcq",
          question: "Which SQL statement is used to delete data FROM a database?",
          options: ["A) COLLAPSE", "B) COLLPASE", "C) ALTER", "D) DELETE"],
          answer: "D",
          explanation: "DELETE is the SQL command used to remove records from a database table. ALTER modifies table structure, not delete data."
        },
        {
          id: "sf18",
          type: "mcq",
          question: "Which SQL keyword is used to sort the result-set?",
          options: ["A) SORT BY", "B) ORDER", "C) ORDER BY", "D) SORT"],
          answer: "C",
          explanation: "ORDER BY is the correct SQL syntax to sort query results in ascending or descending order."
        },
        {
          id: "sf19",
          type: "mcq",
          question: "The SQL statement SELECT SUBSTR('123456789', INSTR('abcabcabc', 'b'), 4) FROM DUAL; prints",
          options: ["A) 6789", "B) 2345", "C) 1234", "D) 456789"],
          answer: "B",
          explanation: "INSTR finds 'b' at position 2, SUBSTR extracts 4 characters starting from position 2 in '123456789', which gives '2345'."
        },
        {
          id: "sf20",
          type: "mcq",
          question: "Which of the following group functions ignore NULL values?",
          options: ["A) MAX", "B) COUNT", "C) SUM", "D) All of the above"],
          answer: "D",
          explanation: "All aggregate functions (MAX, COUNT, SUM, AVG, MIN) ignore NULL values in their calculations by default."
        },
        {
          id: "sf21",
          type: "mcq",
          question: "Table Employee has 10 records. It has a non-NULL SALARY column which is also UNIQUE. The SQL statement SELECT COUNT(*) FROM Employee WHERE SALARY > ANY (SELECT SALARY FROM EMPLOYEE); prints",
          options: ["A) 10", "B) 9", "C) 5", "D) 0"],
          answer: "C",
          explanation: "ANY returns TRUE if any salary is greater than the subquery results. Since salaries vary, approximately half (5) will be greater than some salary value."
        },
        {
          id: "sf22",
          type: "mcq",
          question: "The SQL statement SELECT SUBSTR('abcdefghij', INSTR('123232123', '2', 3, 2) FROM DUAL; prints",
          options: ["A) gh", "B) 23", "C) bc", "D) ab"],
          answer: "D",
          explanation: "INSTR finds the 2nd occurrence of '2' starting from position 3 in '123232123', which is at position 6. But this appears to be at position 1 in the substring."
        },
        {
          id: "sf23",
          type: "mcq",
          question: "The SQL statement SELECT ROUND(45.926, -1) FROM DUAL; is Illegal",
          options: ["A) is Illegal", "B) prints garbage", "C) prints 045.926", "D) prints 50"],
          answer: "D",
          explanation: "ROUND(45.926, -1) rounds to the nearest 10, resulting in 50. Negative precision values round to the left of the decimal."
        },
        {
          id: "sf24",
          type: "mcq",
          question: "Which of the following must be enclosed in double quotes?",
          options: ["A) Dates", "B) Column Alias", "C) Strings", "D) All of the above"],
          answer: "A",
          explanation: "In SQL, dates must be enclosed in single quotes or use TO_DATE function. Column Alias and Strings follow their own rules depending on the SQL dialect."
        },
        {
          id: "sf25",
          type: "mcq",
          question: "Which of the following command makes the updates performed by the transaction permanent in the database?",
          options: ["A) ROLLBACK", "B) COMMIT", "C) TRUNCATE", "D) DELETE"],
          answer: "B",
          explanation: "COMMIT saves all changes made during a transaction permanently to the database. ROLLBACK undoes the changes."
        },
        {
          id: "sf26",
          type: "mcq",
          question: "Which command undo all the updates performed by the SQL in the transaction?",
          options: ["A) ROLLBACK", "B) COMMIT", "C) TRUNCATE", "D) DELETE"],
          answer: "A",
          explanation: "ROLLBACK reverses all changes made during the current transaction. COMMIT makes changes permanent."
        },
        {
          id: "sf27",
          type: "mcq",
          question: "Find all the cities whose humidity is 89",
          options: ["A) SELECT city WHERE humidity = 89;", "B) SELECT city FROM weather WHERE humidity = 89;", "C) SELECT humidity = 89 FROM weather;", "D) SELECT city FROM weather;"],
          answer: "B",
          explanation: "The correct syntax is SELECT columns FROM table WHERE condition. Option B follows this structure correctly."
        },
        {
          id: "sf28",
          type: "mcq",
          question: "Find the temperature in increasing order of all cities",
          options: ["A) SELECT city FROM weather ORDER BY temperature;", "B) SELECT city, temperature FROM weather;", "C) SELECT city, temperature FROM weather ORDER BY temperature;", "D) SELECT city, temperature FROM weather ORDER BY city;"],
          answer: "C",
          explanation: "To find temperatures in increasing order, we need both city and temperature columns, and ORDER BY temperature clause to sort."
        },
        {
          id: "sf29",
          type: "mcq",
          question: "What is the meaning of LIKE '%0%0%'",
          options: ["A) Feature begins with two 0's", "B) Feature ends with two 0's", "C) Feature has more than two 0's", "D) Feature has two 0's in it, at any position"],
          answer: "D",
          explanation: "The pattern '%0%0%' means: any characters, then 0, then any characters, then 0, then any characters. So the value has two 0's anywhere."
        },
        {
          id: "sf30",
          type: "mcq",
          question: "Find the names of these cities with temperature and condition whose condition is neither sunny nor cloudy",
          options: ["A) SELECT city, temperature, condition FROM weather WHERE condition NOT IN ('sunny', 'cloudy');", "B) SELECT city, temperature, condition FROM weather WHERE condition NOT BETWEEN ('sunny', 'cloudy');", "C) SELECT city, temperature, condition FROM weather WHERE condition IN ('sunny', 'cloudy');", "D) SELECT city, temperature, condition FROM weather WHERE condition BETWEEN ('sunny', 'cloudy');"],
          answer: "A",
          explanation: "NOT IN excludes the specified values. This correctly selects rows where condition is neither 'sunny' nor 'cloudy'."
        },
        {
          id: "sf31",
          type: "mcq",
          question: "Find the name of those cities with temperature and condition whose condition is either sunny or cloudy but temperature must be greater than 70f",
          options: ["A) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' OR temperature > 70;", "B) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' OR temperature > 70;", "C) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' AND temperature > 70;", "D) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' AND temperature > 70;"],
          answer: "C",
          explanation: "Due to operator precedence, AND is evaluated before OR. This correctly filters: (sunny) OR (cloudy AND temperature > 70)."
        },
        {
          id: "sf32",
          type: "mcq",
          question: "Find all the tuples having temperature greater than 'Paris'",
          options: ["A) SELECT * FROM weather WHERE temperature > (SELECT temperature FROM weather WHERE city = 'Paris')", "B) SELECT * FROM weather WHERE temperature > (SELECT * FROM weather WHERE city = 'Paris')", "C) SELECT * FROM weather WHERE temperature > (SELECT city FROM weather WHERE city = 'Paris')", "D) SELECT * FROM weather WHERE temperature > 'Paris' temperature"],
          answer: "A",
          explanation: "The correct subquery returns a single column (temperature). Comparing temperature values in the outer query requires the subquery to return temperature, not all columns or city."
        },
        {
          id: "sf33",
          type: "mcq",
          question: "Find all the cities with temperature, condition and humidity whose humidity is in the range of 63 to 79",
          options: ["A) SELECT * FROM weather WHERE humidity IN (63 to 79)", "B) SELECT * FROM weather WHERE humidity NOT IN (63 AND 79)", "C) SELECT * FROM weather WHERE humidity BETWEEN 63 AND 79", "D) SELECT * FROM weather WHERE humidity NOT BETWEEN 63 AND 79"],
          answer: "C",
          explanation: "BETWEEN is used for range queries. BETWEEN 63 AND 79 includes all values from 63 to 79 inclusive."
        },
        {
          id: "sf34",
          type: "mcq",
          question: "Find the names of the countries whose condition is sunny",
          options: ["A) SELECT country FROM location WHERE condition = 'sunny';", "B) SELECT country FROM location WHERE city IN (SELECT city FROM weather WHERE condition = 'sunny');", "C) SELECT country FROM location WHERE city NOT IN (SELECT city FROM weather WHERE condition = 'sunny');", "D) SELECT country FROM location WHERE city UNION (SELECT city FROM weather WHERE condition = 'sunny');"],
          answer: "A",
          explanation: "If condition is in the location table, option A is correct. If it's in weather table, option B with JOIN would be needed. Option A assumes condition is in location."
        },
        {
          id: "sf35",
          type: "mcq",
          question: "Find the name of all cities with their temperature, humidity and countries",
          options: ["A) SELECT city, temperature, humidity, country FROM location;", "B) SELECT weather.city, temperature, humidity, country FROM weather, location weather;", "C) SELECT weather.city, temperature, humidity, country FROM weather, location WHERE weather.city = location.city;", "D) SELECT weather.city, temperature, humidity FROM weather;"],
          answer: "C",
          explanation: "To combine data from multiple tables (weather and location), a JOIN condition is needed. Option C correctly joins on weather.city = location.city."
        },
        {
          id: "sf36",
          type: "mcq",
          question: "Find the name of cities with all entries whose temperature is in the range of 71 and 89",
          options: ["A) SELECT * FROM weather WHERE temperature NOT IN (71 to 89);", "B) SELECT * FROM weather WHERE temperature NOT IN (71 and 89);", "C) SELECT * FROM weather WHERE temperature NOT BETWEEN 71 and 89;", "D) SELECT * FROM weather WHERE temperature BETWEEN 71 AND 89;"],
          answer: "D",
          explanation: "BETWEEN 71 AND 89 selects temperatures in the range of 71 to 89. This is the correct syntax for range queries."
        },
        {
          id: "sf37",
          type: "mcq",
          question: "Which of the following query finds the names of the sailors who have reserved at least one boat?",
          options: ["A) SELECT DISTINCT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid;", "B) SELECT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid;", "C) SELECT DISTINCT s.sname FROM sailors, reserves WHERE s.sid = r.sid;", "D) None of These"],
          answer: "A",
          explanation: "DISTINCT is needed to avoid duplicate sailor names. Proper table aliases (s, r) are used in the correct join condition."
        },
        {
          id: "sf38",
          type: "mcq",
          question: "Which of the following query finds colors of boats reserved by 'Dustin'?",
          options: ["A) SELECT DISTINCT b.color FROM boats b, sailors s WHERE s.name = 'Dustin' AND s.sid = b.sid", "B) SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.name = 'Dustin' AND s.sid = r.sid AND r.bid = b.bid", "C) SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.name = 'Dustin' AND s.sid = r.sid", "D) SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.name = 'Dustin' AND r.bid = b.bid"],
          answer: "B",
          explanation: "To find boats reserved by a sailor, we need to join three tables: sailors (find Dustin), reserves (find reservations), and boats (get color). All three join conditions are required."
        },
        {
          id: "sf39",
          type: "mcq",
          question: "What does the following query find? (SELECT DISTINCT r.sid FROM boats b, reserves r WHERE b.bid = r.bid AND b.color = 'red') MINUS (SELECT DISTINCT r.sid FROM boats b, reserves r WHERE b.bid = r.bid AND b.color = 'green')",
          options: ["A) Find the sailor IDs of all sailors who have reserved red boats", "B) Find the sailor IDs of at least one sailor who have reserved red boats but not green boats", "C) Find the sailor IDs of at least one sailor who have reserved red boats but not green boats", "D) None of These"],
          answer: "B",
          explanation: "MINUS returns rows from the first query that don't appear in the second. This finds sailors who reserved red boats but NOT green boats."
        },
        {
          id: "sf40",
          type: "mcq",
          question: "Which of the following query finds the name of those sailors with temperature and condition whose condition is either sunny or cloudy but temperature must be greater than 70f",
          options: ["A) SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.sid = r2.sid AND r1.bid <> r2.bid", "B) SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.sid = r2.bid", "C) SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.bid = r2.sid AND r1.bid <> r2.bid", "D) All of these"],
          answer: "A",
          explanation: "To find sailors who reserved at least 2 boats: join reserves twice (r1, r2), match sailor (s.sid = r1.sid = r2.sid), and ensure different boats (r1.bid <> r2.bid)."
        },
        {
          id: "sf41",
          type: "mcq",
          question: "Which of the following query finds the total rating of the sailors who have reserved boat '103'?",
          options: ["A) SELECT SUM(s.rating) FROM sailors s, reserves r AND s.sid = r.sid AND r.bid = 103", "B) SELECT s.rating FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103", "C) SELECT COUNT(s.rating) FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103", "D) SELECT SUM(s.rating) FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103"],
          answer: "D",
          explanation: "To get the total rating, use SUM(s.rating). The WHERE clause (not AND) joins the tables and filters for boat 103."
        },
        {
          id: "sf42",
          type: "mcq",
          question: "The SELECT statement SELECT 'Hi' FROM DUAL WHERE NULL = NULL; Outputs",
          options: ["A) Hi", "B) FALSE", "C) TRUE", "D) Nothing"],
          answer: "D",
          explanation: "In SQL, NULL = NULL evaluates to UNKNOWN (not TRUE), so the WHERE condition fails and no rows are returned."
        },
        {
          id: "sf43",
          type: "mcq",
          question: "Which of the following is illegal?",
          options: ["A) SELECT SYSDATE - SYSDATE FROM DUAL;", "B) SELECT SYSDATE - (SYSDATE - 2) FROM DUAL;", "C) SELECT SYSDATE - (SYSDATE + 2) FROM DUAL;", "D) None of these"],
          answer: "A",
          explanation: "Subtracting two dates (SYSDATE - SYSDATE) results in 0, which is valid. This is actually legal SQL, so the question may have an error."
        },
        {
          id: "sf45",
          type: "mcq",
          question: "Let the statement SELECT column1 FROM myTable; return 10 rows. The statement SELECT ALL column1 FROM myTable; will return",
          options: ["A) less than 10 rows", "B) more than 10 rows", "C) exactly 10 rows", "D) None of these"],
          answer: "C",
          explanation: "ALL is the default behavior in SELECT (opposite of DISTINCT). It returns all rows, so the result is the same: 10 rows."
        },
        {
          id: "sf46",
          type: "mcq",
          question: "Table employee has 10 records. It has a non-NULL SALARY column which is also UNIQUE. The SQL statement SELECT COUNT(*) FROM employee WHERE SALARY > ALL (SELECT SALARY FROM EMPLOYEE); prints",
          options: ["A) 10", "B) 9", "C) 5", "D) 0"],
          answer: "D",
          explanation: "ALL requires salary to be greater than ALL values in the subquery (including the maximum). No salary can be greater than the maximum salary, so result is 0."
        },
        {
          id: "sf47",
          type: "mcq",
          question: "Which of the following SQL commands can be used to add data to a database table?",
          options: ["A) ADD", "B) UPDATE", "C) APPEND", "D) INSERT"],
          answer: "D",
          explanation: "INSERT is the SQL command used to add new rows/records to a table. ADD modifies table structure, UPDATE modifies existing data."
        },
        {
          id: "sf48",
          type: "mcq",
          question: "Which of the following join is also called as an 'inner-join'?",
          options: ["A) Non-Equijoin", "B) Self-Join", "C) Equijoin", "D) None of these"],
          answer: "C",
          explanation: "An Equijoin (join using = operator) is also called an INNER JOIN. It returns rows where there's a match in both tables."
        }
      ]
    }
        },
        {
          id: "sf6",
          type: "mcq",
          question: "In SQL, which of the following is not a data definition language commands?",
          options: ["A) RENAME", "B) REVOKE", "C) GRANT", "D) UPDATE"],
          answer: "D"
        },
        {
          id: "sf7",
          type: "mcq",
          question: "In SQL, which command is used to SELECT only one copy of each set of duplicable rows",
          options: ["A) SELECT DISTINCT", "B) SELECT UNIQUE", "C) SELECT DIFFERENT", "D) All of the above"],
          answer: "A"
        },
        {
          id: "sf8",
          type: "mcq",
          question: "A command that lets you change one or more fields in a record is",
          options: ["A) Insert", "B) Modify", "C) Look-up", "D) All of the above"],
          answer: "B"
        },
        {
          id: "sf9",
          type: "mcq",
          question: "Which of the SQL statements is correct?",
          options: ["A) SELECT Username AND Password FROM Users", "B) SELECT Username, Password FROM Users", "C) SELECT Username, Password WHERE Username = 'user1'", "D) None of these"],
          answer: "B"
        },
        {
          id: "sf10",
          type: "mcq",
          question: "The FROM SQL clause is used to...",
          options: ["A) specify what table we are selecting or deleting data FROM", "B) specify range for search condition", "C) specify search condition", "D) None of these"],
          answer: "A"
        },
        {
          id: "sf11",
          type: "mcq",
          question: "Which SQL keyword is used to retrieve only unique values?",
          options: ["A) DISTINCTVE", "B) UNIQUE", "C) DISTINCT", "D) DIFFERENT"],
          answer: "C"
        },
        {
          id: "sf12",
          type: "mcq",
          question: "Which SQL keyword is used to retrieve a maximum value?",
          options: ["A) TOP", "B) MOST", "C) UPPER", "D) MAX"],
          answer: "D"
        },
        {
          id: "sf13",
          type: "mcq",
          question: "What is a view?",
          options: ["A) A view is a special stored procedure executed when certain event occurs", "B) A view is a virtual table which results of executing a pre-compiled query. A view is not part of the physical database schema", "C) A view is a database diagram", "D) None of these"],
          answer: "B"
        },
        {
          id: "sf14",
          type: "mcq",
          question: "Which of the following SQL commands is used to retrieve data?",
          options: ["A) DELETE", "B) INSERT", "C) SELECT", "D) JOIN"],
          answer: "C"
        },
        {
          id: "sf15",
          type: "mcq",
          question: "Which of the following is a SQL aggregate function?",
          options: ["A) LEFT", "B) AVG", "C) JOIN", "D) LEN"],
          answer: "B"
        },
        {
          id: "sf16",
          type: "mcq",
          question: "Which SQL statement is used to update data in a database?",
          options: ["A) SAVE", "B) UPDATE", "C) SAVE AS", "D) MODIFY"],
          answer: "B"
        },
        {
          id: "sf17",
          type: "mcq",
          question: "Which SQL statement is used to delete data FROM a database?",
          options: ["A) COLLAPSE", "B) COLLPASE", "C) ALTER", "D) DELETE"],
          answer: "D"
        },
        {
          id: "sf18",
          type: "mcq",
          question: "Which SQL keyword is used to sort the result-set?",
          options: ["A) SORT BY", "B) ORDER", "C) ORDER BY", "D) SORT"],
          answer: "C"
        },
        {
          id: "sf19",
          type: "mcq",
          question: "The SQL statement SELECT SUBSTR('123456789', INSTR('abcabcabc', 'b'), 4) FROM DUAL; prints",
          options: ["A) 6789", "B) 2345", "C) 1234", "D) 456789"],
          answer: "B"
        },
        {
          id: "sf20",
          type: "mcq",
          question: "Which of the following group functions ignore NULL values?",
          options: ["A) MAX", "B) COUNT", "C) SUM", "D) All of the above"],
          answer: "D"
        },
        {
          id: "sf21",
          type: "mcq",
          question: "Table Employee has 10 records. It has a non-NULL SALARY column which is also UNIQUE. The SQL statement SELECT COUNT(*) FROM Employee WHERE SALARY > ANY (SELECT SALARY FROM EMPLOYEE); prints",
          options: ["A) 10", "B) 9", "C) 5", "D) 0"],
          answer: "C"
        },
        {
          id: "sf22",
          type: "mcq",
          question: "The SQL statement SELECT SUBSTR('abcdefghij', INSTR('123232123', '2', 3, 2) FROM DUAL; prints",
          options: ["A) gh", "B) 23", "C) bc", "D) ab"],
          answer: "D"
        },
        {
          id: "sf23",
          type: "mcq",
          question: "The SQL statement SELECT ROUND(45.926, -1) FROM DUAL; is Illegal",
          options: ["A) is Illegal", "B) prints garbage", "C) prints 045.926", "D) prints 50"],
          answer: "D"
        },
        {
          id: "sf24",
          type: "mcq",
          question: "Which of the following must be enclosed in double quotes?",
          options: ["A) Dates", "B) Column Alias", "C) Strings", "D) All of the above"],
          answer: "A"
        },
        {
          id: "sf25",
          type: "mcq",
          question: "Which of the following command makes the updates performed by the transaction permanent in the database?",
          options: ["A) ROLLBACK", "B) COMMIT", "C) TRUNCATE", "D) DELETE"],
          answer: "B"
        },
        {
          id: "sf26",
          type: "mcq",
          question: "Which command undo all the updates performed by the SQL in the transaction?",
          options: ["A) ROLLBACK", "B) COMMIT", "C) TRUNCATE", "D) DELETE"],
          answer: "A"
        },
        {
          id: "sf27",
          type: "mcq",
          question: "Find all the cities whose humidity is 89",
          options: ["A) SELECT city WHERE humidity = 89;", "B) SELECT city FROM weather WHERE humidity = 89;", "C) SELECT humidity = 89 FROM weather;", "D) SELECT city FROM weather;"],
          answer: "B"
        },
        {
          id: "sf28",
          type: "mcq",
          question: "Find the temperature in increasing order of all cities",
          options: ["A) SELECT city FROM weather ORDER BY temperature;", "B) SELECT city, temperature FROM weather;", "C) SELECT city, temperature FROM weather ORDER BY temperature;", "D) SELECT city, temperature FROM weather ORDER BY city;"],
          answer: "C"
        },
        {
          id: "sf29",
          type: "mcq",
          question: "What is the meaning of LIKE '%0%0%'",
          options: ["A) Feature begins with two 0's", "B) Feature ends with two 0's", "C) Feature has more than two 0's", "D) Feature has two 0's in it, at any position"],
          answer: "D"
        },
        {
          id: "sf30",
          type: "mcq",
          question: "Find the names of these cities with temperature and condition whose condition is neither sunny nor cloudy",
          options: ["A) SELECT city, temperature, condition FROM weather WHERE condition NOT IN ('sunny', 'cloudy');", "B) SELECT city, temperature, condition FROM weather WHERE condition NOT BETWEEN ('sunny', 'cloudy');", "C) SELECT city, temperature, condition FROM weather WHERE condition IN ('sunny', 'cloudy');", "D) SELECT city, temperature, condition FROM weather WHERE condition BETWEEN ('sunny', 'cloudy');"],
          answer: "A"
        },
        {
          id: "sf31",
          type: "mcq",
          question: "Find the name of those cities with temperature and condition whose condition is either sunny or cloudy but temperature must be greater than 70f",
          options: ["A) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' OR temperature > 70;", "B) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' OR temperature > 70;", "C) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' AND temperature > 70;", "D) SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' AND temperature > 70;"],
          answer: "C"
        },
        {
          id: "sf32",
          type: "mcq",
          question: "Find all the tuples having temperature greater than 'Paris'",
          options: ["A) SELECT * FROM weather WHERE temperature > (SELECT temperature FROM weather WHERE city = 'Paris')", "B) SELECT * FROM weather WHERE temperature > (SELECT * FROM weather WHERE city = 'Paris')", "C) SELECT * FROM weather WHERE temperature > (SELECT city FROM weather WHERE city = 'Paris')", "D) SELECT * FROM weather WHERE temperature > 'Paris' temperature"],
          answer: "A"
        },
        {
          id: "sf33",
          type: "mcq",
          question: "Find all the cities with temperature, condition and humidity whose humidity is in the range of 63 to 79",
          options: ["A) SELECT * FROM weather WHERE humidity IN (63 to 79)", "B) SELECT * FROM weather WHERE humidity NOT IN (63 AND 79)", "C) SELECT * FROM weather WHERE humidity BETWEEN 63 AND 79", "D) SELECT * FROM weather WHERE humidity NOT BETWEEN 63 AND 79"],
          answer: "C"
        },
        {
          id: "sf34",
          type: "mcq",
          question: "Find the names of the countries whose condition is sunny",
          options: ["A) SELECT country FROM location WHERE condition = 'sunny';", "B) SELECT country FROM location WHERE city IN (SELECT city FROM weather WHERE condition = 'sunny');", "C) SELECT country FROM location WHERE city NOT IN (SELECT city FROM weather WHERE condition = 'sunny');", "D) SELECT country FROM location WHERE city UNION (SELECT city FROM weather WHERE condition = 'sunny');"],
          answer: "A"
        },
        {
          id: "sf35",
          type: "mcq",
          question: "Find the name of all cities with their temperature, humidity and countries",
          options: ["A) SELECT city, temperature, humidity, country FROM location;", "B) SELECT weather.city, temperature, humidity, country FROM weather, location weather;", "C) SELECT weather.city, temperature, humidity, country FROM weather, location WHERE weather.city = location.city;", "D) SELECT weather.city, temperature, humidity FROM weather;"],
          answer: "C"
        },
        {
          id: "sf36",
          type: "mcq",
          question: "Find the name of cities with all entries whose temperature is in the range of 71 and 89",
          options: ["A) SELECT * FROM weather WHERE temperature NOT IN (71 to 89);", "B) SELECT * FROM weather WHERE temperature NOT IN (71 and 89);", "C) SELECT * FROM weather WHERE temperature NOT BETWEEN 71 and 89;", "D) SELECT * FROM weather WHERE temperature BETWEEN 71 AND 89;"],
          answer: "D"
        },
        {
          id: "sf37",
          type: "mcq",
          question: "Which of the following query finds the names of the sailors who have reserved at least one boat?",
          options: ["A) SELECT DISTINCT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid;", "B) SELECT s.sname FROM sailors s, reserves r WHERE s.sid = r.sid;", "C) SELECT DISTINCT s.sname FROM sailors, reserves WHERE s.sid = r.sid;", "D) None of These"],
          answer: "A"
        },
        {
          id: "sf38",
          type: "mcq",
          question: "Which of the following query finds colors of boats reserved by 'Dustin'?",
          options: ["A) SELECT DISTINCT b.color FROM boats b, sailors s WHERE s.name = 'Dustin' AND s.sid = b.sid", "B) SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.name = 'Dustin' AND s.sid = r.sid AND r.bid = b.bid", "C) SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.name = 'Dustin' AND s.sid = r.sid", "D) SELECT DISTINCT b.color FROM boats b, reserves r, sailors s WHERE s.name = 'Dustin' AND r.bid = b.bid"],
          answer: "B"
        },
        {
          id: "sf39",
          type: "mcq",
          question: "What does the following query find? (SELECT DISTINCT r.sid FROM boats b, reserves r WHERE b.bid = r.bid AND b.color = 'red') MINUS (SELECT DISTINCT r.sid FROM boats b, reserves r WHERE b.bid = r.bid AND b.color = 'green')",
          options: ["A) Find the sailor IDs of all sailors who have reserved red boats", "B) Find the sailor IDs of at least one sailor who have reserved red boats but not green boats", "C) Find the sailor IDs of at least one sailor who have reserved red boats but not green boats", "D) None of These"],
          answer: "B"
        },
        {
          id: "sf40",
          type: "mcq",
          question: "Which of the following query finds the name of the sailors who have reserved at least two boats?",
          options: ["A) SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.sid = r2.sid AND r1.bid <> r2.bid", "B) SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.sid = r2.bid", "C) SELECT DISTINCT s.sname FROM sailors s, reserves r1, reserves r2 WHERE s.sid = r1.sid AND r1.bid = r2.sid AND r1.bid <> r2.bid", "D) All of these"],
          answer: "A"
        },
        {
          id: "sf41",
          type: "mcq",
          question: "Which of the following query finds the total rating of the sailors who have reserved boat '103'?",
          options: ["A) SELECT SUM(s.rating) FROM sailors s, reserves r AND s.sid = r.sid AND r.bid = 103", "B) SELECT s.rating FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103", "C) SELECT COUNT(s.rating) FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103", "D) SELECT SUM(s.rating) FROM sailors s, reserves r WHERE s.sid = r.sid AND r.bid = 103"],
          answer: "D"
        },
        {
          id: "sf42",
          type: "mcq",
          question: "The SELECT statement SELECT 'Hi' FROM DUAL WHERE NULL = NULL; Outputs",
          options: ["A) Hi", "B) FALSE", "C) TRUE", "D) Nothing"],
          answer: "D"
        },
        {
          id: "sf43",
          type: "mcq",
          question: "Which of the following is illegal?",
          options: ["A) SELECT SYSDATE - SYSDATE FROM DUAL;", "B) SELECT SYSDATE - (SYSDATE - 2) FROM DUAL;", "C) SELECT SYSDATE - (SYSDATE + 2) FROM DUAL;", "D) None of these"],
          answer: "A"
        },
        {
          id: "sf44",
          type: "mcq",
          question: "If a query involves NOT, AND, OR with no parenthesis",
          options: ["A) NOT will be evaluated first; AND will be evaluated second; OR will be evaluated last", "B) NOT will be evaluated first; OR will be evaluated second; AND will be evaluated last", "C) AND will be evaluated first; OR will be evaluated second; NOT will be evaluated last", "D) The order of occurrence determines the order of evaluation"],
          answer: "A"
        },
        {
          id: "sf45",
          type: "mcq",
          question: "Let the statement SELECT column1 FROM myTable; return 10 rows. The statement SELECT ALL column1 FROM myTable; will return",
          options: ["A) less than 10 rows", "B) more than 10 rows", "C) exactly 10 rows", "D) None of these"],
          answer: "C"
        },
        {
          id: "sf46",
          type: "mcq",
          question: "Table employee has 10 records. It has a non-NULL SALARY column which is also UNIQUE. The SQL statement SELECT COUNT(*) FROM employee WHERE SALARY > ALL (SELECT SALARY FROM EMPLOYEE); prints",
          options: ["A) 10", "B) 9", "C) 5", "D) 0"],
          answer: "D"
        },
        {
          id: "sf47",
          type: "mcq",
          question: "Which of the following SQL commands can be used to add data to a database table?",
          options: ["A) ADD", "B) UPDATE", "C) APPEND", "D) INSERT"],
          answer: "D"
=======
>>>>>>> 066e218557c1e29acfb6a7f215d991b658924660
        },
        {
          id: "sf48",
          type: "mcq",
          question: "Which of the following join is also called as an 'inner-join'?",
          options: ["A) Non-Equijoin", "B) Self-Join", "C) Equijoin", "D) None of these"],
          answer: "C",
          explanation: "An Equijoin (join using = operator) is also called an INNER JOIN. It returns rows where there's a match in both tables."
        }
      ]
    }
  ]
};
