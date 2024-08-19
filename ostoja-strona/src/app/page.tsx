import { HomepageApi } from "@/api";
import { Homepage } from "./components/Homepage";
import { useApi } from "./services/useApi";

const REVALIDATE_SECONDS = 60;

export default async function Home() {
  const homepageApi = useApi(HomepageApi, {
    next: {
      revalidate: REVALIDATE_SECONDS,
    },
  });

  const homepageData = await homepageApi.getHomepage();

  return (
    <Homepage
      title={homepageData.data?.attributes?.title || ""}
      description={homepageData.data?.attributes?.description || ""}
    />
  );
}
