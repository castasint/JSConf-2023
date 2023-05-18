// Import the necessary modules and classes
import { SqlToolkit, createSqlAgent } from "langchain/agents";

import { DataSource } from "typeorm";
import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define the main function
export const main = async () => {
  // Create a new data source using the provided environment variables
  const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // Create an instance of the SqlDatabase using the data source and specify the included tables
  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: dataSource,
    includesTables: ["students", "student_marks"],
  });

  // Create a SqlToolkit instance using the SqlDatabase
  const toolkit = new SqlToolkit(db);

  // Create an instance of the OpenAI model with a temperature of 0
  const model = new OpenAI({ temperature: 0, verbose: true });

  // Create a SQL agent using the OpenAI model and the SqlToolkit
  const executor = createSqlAgent(model, toolkit);

  // Define the input for the SQL agent
  const input =
    "Give me the list of 3 BEST students and their names along with highest total marks";

  // Execute the SQL agent with the input
  console.log(`Executing with input "${input}"...`);
  const result = await executor.call({ input });

  // Log the output received from the SQL agent
  console.log(`Got output ${result.output}`);

  // Destroy the data source to release any resources
  await dataSource.destroy();
};

// Call the main function to execute the code
main();
