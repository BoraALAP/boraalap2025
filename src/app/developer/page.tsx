import { permanentRedirect } from "next/navigation";

// DeveloperPage now points legacy traffic back to the main portfolio.
const DeveloperPage = () => {
  return permanentRedirect("/");
};

export default DeveloperPage;
