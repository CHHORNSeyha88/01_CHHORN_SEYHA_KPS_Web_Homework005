import React from "react";
import DetailPage from "../_components/DetailPage";
import { getArticleService } from "@/app/service/read-article/article.service";

const page = async ({ params, searchParams }) => {
  const type = searchParams.type;
  const detail = await getArticleService(params.id, type);
  return (
    <>
      <DetailPage detail={detail} />
    </>
  );
};

export default page;
