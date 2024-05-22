import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";

const page = () => {
  return (
    <PagePadding>
      <div className="mt-4">
        <Category />
      </div>
    </PagePadding>
  );
};

export default page;
