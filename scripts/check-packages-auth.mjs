/**
 * Verify GitHub Packages auth for @fw-vision/* before bun install.
 *
 * Usage (local):
 *   $env:GITHUB_TOKEN_FWVISION = "ghp_..."   # PowerShell
 *   bun scripts/check-packages-auth.mjs
 *
 * Exit 0 = token present and registry returns 200 for both packages.
 * Exit 1 = missing token or 401/403/other failure (prints status only, never the token).
 */
const token = process.env.GITHUB_TOKEN_FWVISION;

if (!token || !String(token).trim()) {
  console.error(
    "FAIL: GITHUB_TOKEN_FWVISION is empty or unset.\n" +
      "  Local: set the env var to your classic PAT (read:packages).\n" +
      "  CI: ensure secret FWVISION_PACKAGES_TOKEN exists and the job can see it\n" +
      "      (Repository secret, OR Environment secret + job.environment matching)."
  );
  process.exit(1);
}

console.log(`OK: GITHUB_TOKEN_FWVISION present (length=${token.length})`);

const packages = ["@fw-vision/web-kit", "@fw-vision/widgets"];
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.npm.install-v1+json",
  "User-Agent": "daicompute-website-packages-auth-check",
};

let failed = false;

for (const name of packages) {
  // GitHub Packages expects @scope%2fname in the path.
  const gprUrl = `https://npm.pkg.github.com/${name.replace("/", "%2f")}`;
  try {
    const res = await fetch(gprUrl, { headers, method: "GET", redirect: "manual" });
    const ok = res.status === 200 || res.status === 302;
    const label = ok ? "OK" : "FAIL";
    console.log(`${label}: GET ${name} -> HTTP ${res.status}`);
    if (!ok) {
      failed = true;
      if (res.status === 401) {
        console.error("  Hint: 401 = bad/empty/revoked token, or SSO not authorized for the org.");
      } else if (res.status === 403) {
        console.error("  Hint: 403 = token valid but lacks read access to this package.");
      }
    }
  } catch (err) {
    failed = true;
    console.error(`FAIL: GET ${name} -> ${err instanceof Error ? err.message : err}`);
  }
}

if (failed) {
  process.exit(1);
}

console.log("OK: GitHub Packages auth check passed.");
