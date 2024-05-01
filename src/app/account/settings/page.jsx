import { getSession } from "@auth0/nextjs-auth0";

const SettingsPage = async () => {
  const session = await getSession();
  return (
    <>
    <div>Hello from settings!</div>
    <p>{JSON.stringify(session?.user.name, null, 2)}</p>
    </>
  )
}

export default SettingsPage