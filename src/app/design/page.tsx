import { permanentRedirect } from "next/navigation";

// DesignPage keeps older /design links working while the homepage stays canonical.
export default function DesignPage() {
  return permanentRedirect("/");
}
