import { GetServerSidePropsContext } from "next";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=600"
  );
  return {
    props: { title: "hello world" },
  };
}
