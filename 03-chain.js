import { LLMChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

const template =
  "Let's  welcome the participants, speakers, volunteers, organizers and sponsors for {conference}";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["conference"],
});
const model = new OpenAI({ temperature: 0 });
const chain = new LLMChain({ llm: model, prompt: prompt });
const res = await chain.call({ conference: "JSConf-2023" });
console.log(res);

/* const model = new OpenAI({ temperature: 0.9 });
const chain = new LLMChain({ llm: model, prompt: prompt });
const res = await chain.call({ conference: "JSConf-2023" });
console.log(res); */
