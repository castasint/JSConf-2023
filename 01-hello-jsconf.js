import { OpenAI } from "langchain/llms/openai";
import colors from "colors";
const model = new OpenAI({});

const res = await model.call(
  "Let's  welcome the participants, speakers, volunteers, organizers and sponsors for JS Conf - 2023"
);

console.log(colors.green(res));
