import { Homepage } from "./components/Homepage";
import { homepage } from "@/data/homepage";

export default function Home() {
  return (
    <Homepage
      title={homepage.title}
      description={homepage.description}
      sections={homepage.sections}
      email={homepage.email}
      phone={homepage.phone}
      bankAccount={homepage.bankAccount}
    />
  );
}
