
# JSConf-2023 Setup

To begin, please install the latest version of [NodeJS](https://nodejs.org).

Next, install the openai library by executing the following command:

    npm install openai

Similarly, install langchain by running the following command:

`npm install langchain`

Please note that it is not mandatory to use npm. You may also use yarn or pnpm.

## Obtaining an OpenAI Key

To acquire an OpenAI key, kindly sign up for [OpenAI](https://openai.com/) and visit [OpenAI Keys](https://platform.openai.com/account/api-keys).

## Cloning the Repository

To clone the repository, please execute the following command:

`git clone https://github.com/castasint/JSConf-2023.git`

### Set the OpenAI Key

To set the `OPENAI_API_KEY` as an environment variable in Windows and macOS, you can follow these steps:

Windows:

1. Open the Start menu and search for "Environment Variables" or "Edit the system environment variables".
2. Click on the "Edit the system environment variables" option.
3. In the System Properties window, click on the "Environment Variables" button.
4. In the Environment Variables window, under the "User variables" section, click on the "New" button.
5. Enter `OPENAI_API_KEY` as the variable name.
6. Enter your OpenAI API key as the variable value.
7. Click "OK" to save the variable.

macOS:

1. Open the Terminal application.
2. Run the following command to open your shell profile file (e.g., `.bash_profile` or `.zshrc`):

    `open ~/.bash_profile`

    or

    `open ~/.zshrc`

3. Add the following line to the file, replacing `<YOUR_API_KEY>` with your actual OpenAI API key:

    `export OPENAI_API_KEY=<YOUR_API_KEY>`

4. Save the file and close it.
5. Run the following command to apply the changes to your current Terminal session:

    `source ~/.bash_profile`

    or

    `source ~/.zshrc`

After setting the `OPENAI_API_KEY` environment variable, you can access it in your code using `process.env.OPENAI_API_KEY`.

## Executing the Program

To run the program, please navigate to the folder where you cloned the repository in your terminal, and execute the following command:

`node 01-hello-jsconf.js`

## Setting up the Database for 05-sql.js

To set up the database for the `05-sql.js` script, follow these steps:

1. Set up a [PostgreSQL container](https://hub.docker.com/_/postgres).

2. Execute the scripts in the `db` folder to create the necessary tables and schema.

3. Import the data from the CSV files into the respective tables.

## Learn more

For more information, please refer to the following resources:

- [OpenAI Introduction](https://platform.openai.com/docs/introduction)
- [Langchain Documentation](https://docs.langchain.com/docs/)
- [JS Langchain Documentation](https://js.langchain.com/docs/)

## Report an Issue

If you encounter any difficulties or issues despite following the provided instructions, please feel free to open an issue in this repository.
