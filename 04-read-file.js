import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAI } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RetrievalQAChain } from "langchain/chains";

async function main() {
  const model = new OpenAI({});
  const loader = new PDFLoader("./books/attention_is_all_you_need.pdf");

  const docs = await loader.load();

  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

  // Create a chain that uses the OpenAI LLM and HNSWLib vector store.
  const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());

  //Shoot the queries...
  const res = await chain.call({
    query: "What was the paper about?",
  });
  console.log({ res });

  const res1 = await chain.call({
    query: "What is attention?",
  });
  console.log({ res1 });

  const res2 = await chain.call({
    query: "Who are the authors of the paper?",
  });
  console.log({ res2 });
}

main();
