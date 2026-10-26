import config from "@payload-config";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";

import { previewFromPath } from "@/lib/cms/paths";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  const path = url.searchParams.get("path");
  const previewSecret = process.env.PREVIEW_SECRET;

  if (!previewSecret || secret !== previewSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: request.headers });
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const destination = previewFromPath(path);
  if (!destination) {
    return new Response("Invalid preview path", { status: 400 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(destination);
}
