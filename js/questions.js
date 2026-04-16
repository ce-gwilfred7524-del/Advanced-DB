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
          answer: `CREATE PROCEDURE procedure_name
AS
  sql_statement
GO;`,
          language: "sql"
        },
        {
          id: "sa3",
          type: "code",
          question: "Write the syntax for EXECUTING a stored procedure.",
          answer: `EXEC procedure_name;`,
          language: "sql"
        },
        {
          id: "sa4",
          type: "code",
          question: "Create a stored procedure called 'firstProcedure' that fetches Name, Nationality, and Destination from the Pilot table ordered by Name.",
          answer: `CREATE PROCEDURE firstProcedure
AS
BEGIN
  SELECT Name, Nationality, Destination
  FROM Pilot
  ORDER BY Name;
END
GO

-- Call it:
EXEC firstProcedure`,
          language: "sql"
        },
        {
          id: "sa5",
          type: "code",
          question: "Write a stored procedure with a single parameter that selects pilots whose age is less than or equal to a given value.",
          answer: `CREATE PROCEDURE firstParamProcedure(@choiceAge AS Integer)
AS
BEGIN
  SELECT Name, Nationality, Age
  FROM Pilot
  WHERE Age <= @choiceAge
  ORDER BY Name;
END
GO

-- Call it:
EXEC firstParamProcedure @choiceAge = 45`,
          language: "sql"
        },
        {
          id: "sa6",
          type: "code",
          question: "Write a stored procedure with multiple parameters filtering pilots by age and nationality.",
          answer: `CREATE PROCEDURE MoreParam(@choiceAge AS Integer, @citizen AS Varchar)
AS
BEGIN
  SELECT Name, Nationality, Age
  FROM Pilot
  WHERE Age <= @choiceAge AND Nationality = @citizen
  ORDER BY Name;
END
GO

-- Call it:
EXEC MoreParam @choiceAge=45, @citizen='Ghanaian'`,
          language: "sql"
        },
        {
          id: "sa7",
          type: "code",
          question: "Write a stored procedure called 'Update_Pilot' that inserts data into the Pilot table.",
          answer: `CREATE PROCEDURE Update_Pilot
  @Name VARCHAR(30),
  @Age INT,
  @Nationality VARCHAR(30),
  @Destination VARCHAR(30)
AS
BEGIN
  INSERT INTO Pilot VALUES (@Name, @Age, @Nationality, @Destination)
  SELECT * FROM Pilot
  PRINT 'new pilot data'
END
GO`,
          language: "sql"
        },
        {
          id: "sa8",
          type: "code",
          question: "Write the syntax to ALTER (modify) an existing stored procedure.",
          answer: `ALTER PROCEDURE ProcedureName
AS BEGIN
  -- New or modified SQL statements go here
END;`,
          language: "sql"
        },
        {
          id: "sa9",
          type: "theory",
          question: "What is a Database Trigger? List its key features.",
          answer: "A database trigger is procedural code that is automatically executed in response to certain events on a particular table or view in a database. It is a procedure that starts automatically if specified changes occur in the DBMS.\n\nKey Features:\n• Triggers do NOT accept parameters or arguments\n• Triggers CANNOT perform commit or rollback operations (they are part of the triggering SQL statement)\n• Triggers CAN cancel a requested operation"
        },
        {
          id: "sa10",
          type: "theory",
          question: "What are the types of Triggers in SQL?",
          answer: "Types of Triggers:\n1. DML Triggers (INSERT, UPDATE, DELETE)\n   • AFTER Triggers – fire after the DML operation\n   • INSTEAD OF Triggers – fire instead of the DML operation\n2. DDL Triggers (CREATE, ALTER, DROP)\n3. LogOn Triggers – execute on occurrence of a LogOn event"
        },
        {
          id: "sa11",
          type: "code",
          question: "Create a trigger called 'myTrigg' that shows the new row being inserted into the Pilot table.",
          answer: `CREATE TRIGGER myTrigg
ON Pilot
FOR INSERT
AS
BEGIN
  SELECT * FROM inserted
END;`,
          language: "sql"
        },
        {
          id: "sa12",
          type: "code",
          question: "Create a trigger 'myLogg' that logs a message into MessageLog whenever a new entry is made in the Pilot table.",
          answer: `CREATE TRIGGER myLogg
ON Pilot
FOR INSERT
AS
BEGIN
  DECLARE @id AS INT
  SELECT @id = PID FROM inserted
  INSERT INTO MessageLog
  VALUES('New Entry made with id' + CAST(@id AS VARCHAR(MAX)) + 'at' + CAST(GETDATE() AS VARCHAR(MAX)))
END;`,
          language: "sql"
        },
        {
          id: "sa13",
          type: "code",
          question: "Write syntax to DISABLE and ENABLE a trigger.",
          answer: `-- Disable a specific trigger:
DISABLE TRIGGER Trigger_name ON Table_name;

-- Disable ALL triggers on a table:
DISABLE TRIGGER ALL ON Table_name;

-- Disable ALL triggers on the database:
DISABLE TRIGGER ALL ON DATABASE;

-- Enable a trigger:
ENABLE TRIGGER Trigger_name ON Table_name;`,
          language: "sql"
        },
        {
          id: "sa14",
          type: "theory",
          question: "What are the types of SQL Functions? Explain each.",
          answer: "SQL Functions are of two main types:\n\n1. System Functions – built-in functions like Power()/Pow(), abs(), Log(), sin(), Concat(), Difference()\n\n2. User-Defined Functions (UDFs):\n   a. Scalar Functions – returns a single value\n   b. Table-Valued Functions – returns a table:\n      • Inline Table-Valued Function\n      • Multi Table-Valued Function"
        },
        {
          id: "sa15",
          type: "code",
          question: "Write the general syntax for creating a User-Defined Function (UDF).",
          answer: `CREATE FUNCTION Function_Name(@Parameter_Name DataType, ..., @Parameter_Name DataType)
RETURNS DataType
AS
BEGIN
  -- Function Body
  RETURN Data
END`,
          language: "sql"
        }
      ]
    },

    // ===================== SECTION B: DB SECURITY =====================
    {
      id: "sec-b",
      title: "Section B — Database Security & Transactions",
      color: "#dc2626",
      icon: "🔐",
      questions: [
        {
          id: "sb1",
          type: "code",
          question: "Write SQL to GRANT SELECT, INSERT, UPDATE privileges on the 'students' table to user 'teacher_John' WITH GRANT OPTION.",
          answer: `GRANT SELECT, INSERT, UPDATE ON students TO teacher_John
WITH GRANT OPTION;`,
          language: "sql"
        },
        {
          id: "sb2",
          type: "code",
          question: "Write SQL to REVOKE SELECT on 'course' FROM 'teacher_John'.",
          answer: `REVOKE SELECT ON course FROM teacher_John;`,
          language: "sql"
        },
        {
          id: "sb3",
          type: "code",
          question: "Write SQL to CREATE a new Role called 'Teacher'.",
          answer: `CREATE ROLE Teacher;`,
          language: "sql"
        },
        {
          id: "sb4",
          type: "code",
          question: "Write SQL to REVOKE the 'Teacher' role from user 'teacher_John'.",
          answer: `REVOKE Teacher FROM teacher_John;`,
          language: "sql"
        },
        {
          id: "sb5",
          type: "code",
          question: "Write the SQL command to BACKUP the database 'UMaTDB' to disk at 'C:\\Backup\\UMaTDB.bak'.",
          answer: `BACKUP DATABASE UMaTDB TO DISK = 'C:\\Backup\\UMaTDB.bak';`,
          language: "sql"
        },
        {
          id: "sb6",
          type: "code",
          question: "Question 2 — Write a transaction using BEGIN, SET @Action variables, and an INSERT INTO a log table using VALUES(@CustomerID, @Action).",
          answer: `BEGIN
  SET @Action = 'INSERT';   -- (1) First action
  SET @Action = 'UPDATE';   -- (2) Second action  
  SET @Action = 'DELETE';   -- (3) Third action
  
  INSERT INTO log VALUES (@CustomerID, @Action);
END;`,
          language: "sql"
        }
      ]
    },

    // ===================== SECTION C: MONGODB BASICS =====================
    {
      id: "sec-c",
      title: "Section C — MongoDB Basics",
      color: "#059669",
      icon: "🍃",
      questions: [
        {
          id: "sc1",
          type: "code",
          question: "Write the MongoDB command to USE (switch to) the 'InventoryDB' database.",
          answer: `use InventoryDB`,
          language: "mongodb"
        },
        {
          id: "sc2",
          type: "code",
          question: "Write MongoDB command to CREATE a collection called 'Products'.",
          answer: `db.createCollection("Products")`,
          language: "mongodb"
        },
        {
          id: "sc3",
          type: "code",
          question: "Write MongoDB command to DROP the 'outdatedstock' collection.",
          answer: `db.outdatedstock.drop()`,
          language: "mongodb"
        },
        {
          id: "sc4",
          type: "code",
          question: "Write MongoDB command to FIND all documents in the InventoryDB 'Products' collection (show all fields).",
          answer: `db.InventoryDB.find({})
-- or using the Products collection:
db.Products.find({})`,
          language: "mongodb"
        },
        {
          id: "sc5",
          type: "code",
          question: "Write MongoDB to INSERT ONE document into Products. Include fields: ProductName, price, and category.",
          answer: `db.Products.insertOne({
  ProductName: "Laptop",
  price: 1500,
  category: "Electronics"
})`,
          language: "mongodb"
        },
        {
          id: "sc6",
          type: "code",
          question: "Write MongoDB to find Products where price is {$gt: 500}, then LIMIT the results to 3.",
          answer: `db.Products.find({ price: { $gt: 500 } }).limit(3)`,
          language: "mongodb"
        },
        {
          id: "sc7",
          type: "code",
          question: "Write MongoDB to find Products (2 conditions: any 2 fields), then SORT by ProductName ascending.",
          answer: `db.Products.find({ price: { $gt: 3 } }).sort({ ProductName: 1 })`,
          language: "mongodb"
        },
        {
          id: "sc8",
          type: "code",
          question: "Write MongoDB to find Products where price is {$gt: 500} and SORT by productname ascending.",
          answer: `db.Products.find({ price: { $gt: 500 } }).sort({ productname: 1 })`,
          language: "mongodb"
        },
        {
          id: "sc9",
          type: "code",
          question: "Section C Q1 — Write the full MongoDB aggregation to find the total amount spent per product category using $match, $group, and $sum.",
          answer: `db.Products.aggregate([
  { $match: {} },
  {
    $group: {
      _id: "$ProductCategory",
      total: { $sum: "$total" }
    }
  }
])`,
          language: "mongodb"
        },
        {
          id: "sc10",
          type: "code",
          question: "Section C Q10 — Write MongoDB updateOne to update a product by ProductName using $set.",
          answer: `db.Products.updateOne(
  { ProductName: "Laptop" },
  { $set: { price: 1800 } }
)`,
          language: "mongodb"
        },
        {
          id: "sc11",
          type: "code",
          question: "Section C Q5 — Write MongoDB insertOne for a product with ProductName='Ipsd' and category='Electronics'.",
          answer: `db.Products.insertOne({
  ProductName: "Ipsd",
  category: "Electronics"
})`,
          language: "mongodb"
        }
      ]
    },

    // ===================== SECTION D: MONGODB ADVANCED (OBJ) =====================
    {
      id: "sec-d",
      title: "Section D — MongoDB MCQ Answers",
      color: "#d97706",
      icon: "📋",
      description: "These are the answers from the handwritten OBJ sheet. The exact MCQ questions are reconstructed from the MongoDB SQL file and lecture notes.",
      questions: [
        {
          id: "sd1",
          type: "mcq",
          question: "Which MongoDB method is used to insert multiple documents at once using an array and includes a 'customer' field?",
          options: ["A. insertOne()", "B. insertMany([])", "C. insert()", "D. save()"],
          answer: "B",
          explanation: "insertMany([]) takes an array of documents. The handwritten note shows: insertMany [ ], customer — matching option B."
        },
        {
          id: "sd2",
          type: "mcq",
          question: "Which MongoDB method is used to COUNT the number of documents matching a query?",
          options: ["A. find()", "B. count()", "C. aggregate()", "D. distinct()"],
          answer: "A",
          explanation: "Answer from notes is A. The count() method (now countDocuments()) is used: db.collection.count({query})"
        },
        {
          id: "sd3",
          type: "mcq",
          question: "Which MongoDB method returns a list of unique values for a field across a collection?",
          options: ["A. count()", "B. group()", "C. aggregate()", "D. distinct()"],
          answer: "A",
          explanation: "Answer from notes is A. db.collection.distinct('field') returns unique values."
        },
        {
          id: "sd4",
          type: "mcq",
          question: "Which aggregation operator in MongoDB sums up values in a $group stage?",
          options: ["A. $count", "B. $total", "C. $add", "D. $sum"],
          answer: "B",
          explanation: "Answer from notes is B. $sum is used inside $group: { total: { $sum: '$field' } }"
        },
        {
          id: "sd5",
          type: "mcq",
          question: "In MongoDB aggregation, which two operators are used together in the pipeline to filter AND group data with a sum?",
          options: ["A. $find and $group", "B. $match and $count", "C. $where and $sum", "D. $sum and $set"],
          answer: "D",
          explanation: "Answer from notes is D ($sum, $set). The pipeline uses $match → $group with $sum."
        },
        {
          id: "sd6",
          type: "mcq",
          question: "To find products that are EITHER 'toothbrush' OR 'pizza', which MongoDB query correctly uses $in?",
          options: [
            "A. {product: ['toothbrush','pizza']}",
            "B. {$or: [{product:'toothbrush'},{product:'pizza'}]}",
            "C. {product: {$in: ['toothbrush','pizza']}}, {_id: 0}",
            "D. {product: {$nin: ['toothbrush','pizza']}}"
          ],
          answer: "C",
          explanation: "Answer C — the notes show: [$in: ['toothbrush', 'pizza']], -id (suppress _id). Option C matches this pattern."
        },
        {
          id: "sd7",
          type: "mcq",
          question: "Which query finds all purchase orders for 'toothbrush' and 'pizza' products without returning the _id field?",
          options: [
            "A. db.orders.find({product:'toothbrush'})",
            "B. db.orders.find({$or:[{product:'toothbrush'},{product:'pizza'}]})",
            "C. db.orders.find({product:{$in:['toothbrush','pizza']}},{_id:0})",
            "D. db.orders.find({product:{$in:['toothbrush','pizza']}})"
          ],
          answer: "C",
          explanation: "Notes show: ['toothbrush', 'pizza'], -id — option C matches exactly using $in and projecting out _id."
        },
        {
          id: "sd8",
          type: "mcq",
          question: "In MongoDB, the _id field in a document is by default of what type?",
          options: ["A. Integer", "B. String", "C. ObjectId", "D. UUID"],
          answer: "C",
          explanation: "Answer C — MongoDB auto-generates an ObjectId for _id unless specified otherwise."
        },
        {
          id: "sd9",
          type: "mcq",
          question: "Which MongoDB operator checks for the existence of a field in a document?",
          options: ["A. $type", "B. $exists", "C. $has", "D. $in"],
          answer: "B",
          explanation: "Answer B — db.collection.find({field: {$exists: true}}) checks if a field exists."
        },
        {
          id: "sd10",
          type: "mcq",
          question: "What does the MongoDB sort value of -1 indicate?",
          options: ["A. Ascending order", "B. Random order", "C. No sort", "D. Descending order"],
          answer: "D",
          explanation: "Answer D — In MongoDB, sort({field: 1}) = ascending, sort({field: -1}) = descending."
        },
        {
          id: "sd11",
          type: "mcq",
          question: "Which MongoDB command shows all collections in the current database?",
          options: ["A. show collections", "B. list collections", "C. db.listAll()", "D. show tables"],
          answer: "A",
          explanation: "Answer A — 'show collections' is the MongoDB shell command to list all collections."
        },
        {
          id: "sd12",
          type: "mcq",
          question: "Which MongoDB method deletes ALL documents in a collection without dropping it?",
          options: ["A. drop()", "B. deleteAll()", "C. remove()", "D. deleteMany({})"],
          answer: "D",
          explanation: "Answer D — db.collection.deleteMany({}) deletes all documents. drop() removes the whole collection."
        },
        {
          id: "sd13",
          type: "mcq",
          question: "In MongoDB's insertMany(), which option makes operations continue even if one fails?",
          options: ["A. {ordered: true}", "B. {strict: false}", "C. {safe: false}", "D. {ordered: false}"],
          answer: "A",
          explanation: "Answer A — {ordered: false} means continue on error. {ordered: true} (default) stops on first error."
        },
        {
          id: "sd14",
          type: "mcq",
          question: "Which MongoDB operator finds all documents where an array field contains an element matching a condition?",
          options: ["A. $all", "B. $arrayMatch", "C. $size", "D. $elemMatch"],
          answer: "D",
          explanation: "Answer D — $elemMatch: db.collection.find({grades: {$elemMatch: {$gt: 80}}})"
        },
        {
          id: "sd15",
          type: "mcq",
          question: "Which pipeline stage in MongoDB aggregation filters documents (like WHERE in SQL)?",
          options: ["A. $group", "B. $sort", "C. $project", "D. $match"],
          answer: "A",
          explanation: "Answer A — $match filters documents in the aggregation pipeline, equivalent to WHERE in SQL."
        },
        {
          id: "sd16",
          type: "mcq",
          question: "In MongoDB, which data type stores a reference to another document?",
          options: ["A. String", "B. Array", "C. Object", "D. ObjectId"],
          answer: "B",
          explanation: "Answer B — ObjectId is used as a reference to link documents across collections."
        },
        {
          id: "sd17",
          type: "mcq",
          question: "Which MongoDB operator is used to UPDATE a specific field in a document without replacing the whole document?",
          options: ["A. $replace", "B. $update", "C. $change", "D. $set"],
          answer: "B",
          explanation: "Answer B — $set updates specific fields: db.collection.updateOne({filter}, {$set: {field: value}})"
        },
        {
          id: "sd18",
          type: "mcq",
          question: "Which MongoDB method replaces an entire document (not just a field)?",
          options: ["A. updateOne()", "B. updateMany()", "C. replaceOne()", "D. modifyOne()"],
          answer: "B",
          explanation: "Answer B (from notes). replaceOne() replaces the entire document except the _id field."
        },
        {
          id: "sd19",
          type: "mcq",
          question: "MongoDB is classified under which CAP theorem combination?",
          options: ["A. CA", "B. AP", "C. CP", "D. All three"],
          answer: "C",
          explanation: "Answer C — MongoDB is CP (Consistency + Partition Tolerance). CA = RDBMS; AP = Cassandra/CouchDB; CP = MongoDB/HBase."
        },
        {
          id: "sd20",
          type: "mcq",
          question: "MongoDB stores data in what format?",
          options: ["A. XML", "B. CSV", "C. Tables", "D. BSON (Binary JSON) Documents"],
          answer: "D",
          explanation: "Answer D — MongoDB stores data as BSON (Binary JSON) documents in collections."
        }
      ]
    },

    // ===================== SECTION E: NOSQL THEORY =====================
    {
      id: "sec-e",
      title: "Section E — NoSQL Theory & Relational Algebra",
      color: "#0891b2",
      icon: "📚",
      questions: [
        {
          id: "se1",
          type: "theory",
          question: "What is NoSQL? List its key features.",
          answer: "NoSQL (Not Only SQL) databases are non-relational databases. Key features:\n• Does NOT require a fixed schema or joins\n• Relatively easier to scale out compared to relational databases\n• Suitable for distributed data stores with humongous data storage needs\n• Suitable for Big Data and real-time web applications\n• Does not require object-relational mapping and data normalization\n• No complex features like query planners or referential integrity joins"
        },
        {
          id: "se2",
          type: "theory",
          question: "What are the four main categories of NoSQL databases? Give examples of each.",
          answer: "1. Key-Value Pair Based — Data stored in hash tables (key + value). Examples: Redis, Dynamo, Riak, Voldemort\n\n2. Column-Based — Each row stored in a separate file; columns at same offset. Examples: Cassandra, HBase, Hypertable\n\n3. Document-Oriented — Stores data as key-value pairs where value is a JSON/XML document. Examples: MongoDB, CouchDB, Amazon SimpleDB\n\n4. Graph-Based — Stores entities (nodes) and relationships (edges). Examples: Neo4J, OrientDB, FlockDB"
        },
        {
          id: "se3",
          type: "theory",
          question: "Explain the CAP Theorem. Which databases fall under CA, AP, and CP?",
          answer: "The CAP Theorem states that any distributed system can achieve AT MOST TWO of the following three properties simultaneously:\n\n• Consistency (C) — All replicas contain the same version of data\n• Availability (A) — System remains operational on failing nodes (every request gets a response)\n• Partition Tolerance (P) — System remains operational despite message loss or system splits\n\nClassifications:\n• CA → RDBMS, Teradata, Greenplum\n• AP → Cassandra, DynamoDB, CouchDB, Riak\n• CP → MongoDB, HBase, BigTable, HyperTable"
        },
        {
          id: "se4",
          type: "theory",
          question: "What is Relational Algebra? What are its fundamental operations?",
          answer: "Relational algebra is a procedural query language that takes relation instances as input and returns relation instances as output. It performs queries using operators.\n\nFundamental Operations:\n1. Select (σ) — filters rows based on a condition\n2. Project (π) — selects specific columns\n3. Union (∪) — combines tuples from two relations\n4. Set Difference (−) — tuples in one relation but not another\n5. Cartesian Product (×) — combines every tuple from two relations\n6. Rename (ρ) — renames a relation or attribute"
        },
        {
          id: "se5",
          type: "theory",
          question: "What is the difference between Relational Algebra and Relational Calculus?",
          answer: "Relational Algebra:\n• Procedural query language\n• Specifies HOW to retrieve data (step-by-step)\n• Uses operators on relations\n\nRelational Calculus:\n• Non-procedural (declarative) query language\n• Specifies WHAT to retrieve, not how\n• Uses mathematical predicate calculus (first-order logic)\n• Two types: TRC (Tuple Relational Calculus) and DRC (Domain Relational Calculus)\n\nKey Difference: Algebra gives the METHOD; Calculus gives the DESCRIPTION."
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
          question: "The SQL statement SELECT ROUND(45.926, -1) FROM DUAL;",
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
          options: ["A) Find the sailor IDs of all sailors who have reserved red boats", "B) Find the sailor IDs of at least one sailor who have reserved red boats but not green boats", "C) Find the sailor IDs of sailors who have reserved both red and green boats", "D) None of These"],
          answer: "B",
          explanation: "MINUS returns rows from the first query that don't appear in the second. This finds sailors who reserved red boats but NOT green boats."
        },
        {
          id: "sf40",
          type: "mcq",
          question: "Which of the following query finds the name of the sailors who have reserved at least two boats?",
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
          id: "sf44",
          type: "mcq",
          question: "If a query involves NOT, AND, OR with no parenthesis",
          options: ["A) NOT will be evaluated first; AND will be evaluated second; OR will be evaluated last", "B) NOT will be evaluated first; OR will be evaluated second; AND will be evaluated last", "C) AND will be evaluated first; OR will be evaluated second; NOT will be evaluated last", "D) The order of occurrence determines the order of evaluation"],
          answer: "A",
          explanation: "SQL operator precedence: NOT is highest, then AND, then OR (lowest). This is the standard evaluation order."
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
  ]
};
