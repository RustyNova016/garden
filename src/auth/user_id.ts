import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

/* Get the current user's id */
export async function get_user_id(): Promise<string | null> {
  const session = await getServerSession(authOptions);

  if (session === null) {
    return null;
  }

  if (session.user === undefined) {
    return null;
  }

  if (session.user.id === undefined) {
    return null;
  }

  return session.user.id;
}
