import ProfilePicture from "../../../../components/UI/ProfilePicture";
import TextInput from "../../../../components/UI/TextInput";

const BasicInfo = async ({ data, className }) => {
  const { fullName, profilePic, email, accountName, accountOwner } = data
  const profilePicConfig = {
    isShown: true,
    size: 150,
    isLoading: !profilePic,
    url: profilePic,
  };
  const dataFields = [
    { label: "Email", id: "email", value: email, disabled: true },
    { label: "Account name", id: "aname", value: accountName, disabled: true },
    { label: "Account owner", id: "aowner", value: accountOwner, disabled: true },
  ];

  return (
    <section className={`${className}`}>
      <ProfilePicture config={profilePicConfig} />
      <span className="block text-center text-xl mb-4">
        {fullName}
      </span>
      <h1 className="text-catmauve text-xl mb-1">Basic info</h1>
      <div className="rounded-md h-full flex flex-col">
        {dataFields.map((field) => (
          <TextInput field={field} key={field.id} className="mb-2 " />
        ))}
      </div>
    </section>
  );
}

export default BasicInfo