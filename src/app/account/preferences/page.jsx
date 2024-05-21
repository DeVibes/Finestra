import ProfilePicture from "../../../components/UI/ProfilePicture";
import useServerAccountData from "../../../hooks/useServerAccountData";
import PersonalInfo from "./(sections)/PersonalInfo";

const PrefenrencesPage = async () => {
  const { userData, accountData } = await useServerAccountData();
  const profileData = {
    fullName: `${userData.firstName} ${userData.lastName}`,
    email: userData.email,
    accountName: accountData.name,
    accountOwner: accountData.owner,
  };
  const profilePicConfig = {
    isShown: true,
    size: 150,
    isLoading: !userData.profilePic,
    url: userData.profilePic,
  };

  return (
    <div className="w-full">
      <div className="flex justify-center my-4">
        <ProfilePicture config={profilePicConfig} />
      </div>
      <span className="block text-center text-xl mb-4">
        {profileData?.fullName}
      </span>
      <PersonalInfo data={profileData} />

      {/* i have an array of strings, i want a carousle (implementation) component that gets an array and prints a square for each string */}
      <div className="flex justify-center gap-2 overflow-x-scroll">
        {accountData.categories.map(({ name, displayName }) => (
          <div key={name} className="bg-catgreen rounded-lg">
            {displayName}
          </div>
        ))}
      </div>

      <section className="flex justify-end">
        <button className="p-2 bg-catgreen text-white rounded-lg">
          <a href="/api/auth/logout">logout</a>
        </button>
      </section>
    </div>
  );
};

export default PrefenrencesPage;
