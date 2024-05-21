'use client';
import TextInput from "../../../../components/UI/TextInput";
import { EmailIcon } from "../../../../utils/icons";

const PersonalInfo = ({ data }) => {
  const dataFields = [
    { label: "Email", id: "email", value: data?.email, Icon: EmailIcon },
    { label: "Account name", id: "aname", value: data?.accountName, Icon: EmailIcon },
    { label: "Account owner", id: "aowner", value: data?.accountOwner, Icon: EmailIcon },
  ];

  return (
    <section className="mb-2">
        <div className="rounded-md h-full flex flex-col">
            {dataFields.map((field) => (
              <TextInput field={field} key={field.id} className="mb-2"/>
            ))} 
        </div>
    </section>
  );
}

export default PersonalInfo