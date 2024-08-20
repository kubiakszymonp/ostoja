import { HomepageApi, HomepageSectionApi } from "@/api";
import { Homepage } from "./components/Homepage";
import { useApi } from "./services/useApi";

const REVALIDATE_SECONDS = 60;

export default async function Home() {
  const homepageApi = useApi(HomepageApi, {
    next: {
      revalidate: REVALIDATE_SECONDS,
    },
  });

  const sectionsApi = useApi(HomepageSectionApi, {
    next: {
      revalidate: REVALIDATE_SECONDS,
    },
  });

  const homepageData = await homepageApi.getHomepage();

  const sections = await sectionsApi.getHomepageSections({
    populate: "*",
  });

  return (
    <Homepage
      title={homepageData.data?.attributes?.title || ""}
      description={homepageData.data?.attributes?.description || ""}
      sections={sections.data || []}
    />
  );
}
