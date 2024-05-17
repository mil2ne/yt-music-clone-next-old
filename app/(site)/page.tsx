import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  // await sleep(2000);
  // throw new Error("my error");

  console.log("before Homepage sleep ...");

  await sleep(4000);

  console.log("after Homepage sleep ...");

  return <div>Home Page</div>;
};

export default page;
