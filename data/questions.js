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
