import config from "@payload-config";
import "@payloadcms/next/css";
import type { ServerFunctionClient } from "payload";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import React from "react";

import { cmsIsConfigured } from "@/lib/cms/env";

import { importMap } from "./admin/importMap.js";
import "./custom.scss";
import { UnconfiguredCms } from "./unconfigured";

export const dynamic = "force-dynamic";

type Args = {
  children: React.ReactNode;
};

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

const Layout = ({ children }: Args) => {
  if (!cmsIsConfigured()) return <UnconfiguredCms />;
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
};

export default Layout;
