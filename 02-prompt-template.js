import { PromptTemplate } from "langchain/prompts";

const template =
  "Let's  welcome the participants, speakers, volunteers, organizers and sponsors for {conference}";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["conference"],
});

const res = await prompt.format({ conference: "JSConf-2023" });

console.log(res);
