import type { Metadata } from "next";

import config from "@payload-config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";

import { cmsIsConfigured } from "@/lib/cms/env";

import { importMap } from "../importMap";

export const dynamic = "force-dynamic";

type Args = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> => {
  if (!cmsIsConfigured()) {
    return Promise.resolve({
      title: "CMS not configured",
      robots: { index: false, follow: false },
    });
  }
  return generatePageMetadata({ config, params, searchParams });
};

const Page = ({ params, searchParams }: Args) => {
  if (!cmsIsConfigured()) return null;
  return RootPage({ config, params, searchParams, importMap });
};

export default Page;
