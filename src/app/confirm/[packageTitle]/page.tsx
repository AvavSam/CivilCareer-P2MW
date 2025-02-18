import PlansPage from "@/features/plans/PlansPage";
import { authUserSession } from "@/libs/auth-libs";

export default async function Page() {
  const user = await authUserSession();

  return <PlansPage user={user} />;
}
