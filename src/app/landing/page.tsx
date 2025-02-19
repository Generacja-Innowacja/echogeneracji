import { HeroBanner } from "@/components/LandingPage/HeroBanner";
import { MissionBanner } from "@/components/LandingPage/MissionBanner";
import { PillarsBanner } from "@/components/LandingPage/PillarsBanner";
import { Divider } from "@/components/LandingPage/Divider";
import { PillarInfoBanner } from "@/components/LandingPage/PillarInfoBanner";
import { Contact } from "@/components/LandingPage/Contact";
import ArticleSection from "@/components/Article/ArticlesSection";
import { getNewestPostsPreview } from "@/service/ghost";

export default async function LandingPage() {
  const { posts } = await getNewestPostsPreview({
    limit: 100,
  });

  const postsSection = posts.slice(0, 5);

  return (
    <>
      <main className="justify-center max-w-screen-xl ml-auto mr-auto">
        <HeroBanner />

        <div className="justify-center max-w-[900px] ml-auto mr-auto">
          <MissionBanner />
          <PillarsBanner />

          <Divider pillar="relacje" />
          <PillarInfoBanner pillar="relacje" />

          <div className="mb-[32px]">
            <Divider pillar="glos" />
            <PillarInfoBanner pillar="glos" />
          </div>

          <ArticleSection
            posts={postsSection}
            featureFirst
            ifEmpty="showEmptySection"
          />

          <Divider pillar="wplyw" />
          <PillarInfoBanner pillar="wplyw" />

          <hr
            style={{
              color: "#B0B4BE",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          />

          <Contact />
        </div>
      </main>
    </>
  );
}
