import type { Metadata } from "next";

import { CmsOnlyPage, cmsOnlyMetadata } from "@/lib/cms/cms-only";
import { normalizePath } from "@/lib/cms/paths";

type Params = { path: string[] };

function pathnameFrom(path: string[]): string {
  return normalizePath(`/${path.join("/")}`) ?? "/";
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { path } = await params;
  return cmsOnlyMetadata(pathnameFrom(path));
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { path } = await params;
  return <CmsOnlyPage pathname={pathnameFrom(path)} />;
}
