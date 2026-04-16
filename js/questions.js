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
    }
  ]
};
