export const ACCESS_COOKIE = "softsove_proposal_access";
export const ACCESS_TOKEN = "letsroll-granted-v1";
export const SITE_PASSWORD = "letsroll";

export function isValidAccessToken(value: string | undefined | null) {
  return value === ACCESS_TOKEN;
}
