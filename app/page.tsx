import { Metadata } from "next/types";

import Footer from "components/home/footer";
import Header from "components/home/header";
import UI from "components/ui";

import { generateOgpImageUrl, getPoem } from "scripts/query";

import { SiteInfo } from "data/site";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams
}: Props): Promise<Metadata> {
  const imageUrl = generateOgpImageUrl(searchParams.id);
  const { title, description, url } = SiteInfo;

  return {
    title,
    description,
    openGraph: {
      title: title,
      description,
      url: url,
      siteName: title,
      type: "website",
      images: [{ url: imageUrl }]
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description,
      images: [{ url: imageUrl }]
    }
  };
}

export default function Page({ searchParams }: Props) {
  const poem = getPoem(searchParams.id);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-white font-default">
      <Header />
      <UI poemText={poem?.text ?? ""} />
      <Footer />
    </div>
  );
}
