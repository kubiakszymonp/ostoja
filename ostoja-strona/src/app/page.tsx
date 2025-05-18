import { HomepageApi, HomepageSectionApi } from "@/api";
import { Homepage } from "./components/Homepage";
import { useApi } from "./services/useApi";

const REVALIDATE_SECONDS = 30;

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

  try {
    const homepageData = await homepageApi.getHomepage();

    const sections = await sectionsApi.getHomepageSections({
      populate: "*",
    });

    return (
      <Homepage
        title={homepageData.data?.attributes?.title || ""}
        description={homepageData.data?.attributes?.description || ""}
        sections={sections.data || []}
        email={homepageData.data?.attributes?.email || ""}
        phone={homepageData.data?.attributes?.phone || ""}
        bankAccount={homepageData.data?.attributes?.bankAccount || ""}
      />
    );
  } catch (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          letterSpacing: "-1px",
        }}
      >
        <span
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Prace serwisowe.
        </span>
        <span
          style={{
            fontSize: "2rem",
          }}
        >
          Spróbuj ponownie później
        </span>
      </div>
    );
  }
}
