import useFinAuth from "../../../hooks/useFinAuth";

const SettingsPage = async () => {
  const { userProfileName } = await useFinAuth()
  return (
    <>
    <div>Hello from settings!</div>
    <p>{userProfileName }</p>
    </>
  )
}

export default SettingsPage