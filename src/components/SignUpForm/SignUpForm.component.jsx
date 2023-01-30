import { useState } from "react";
import UserCredentialsInfo from "../FormInfo/UserCredentialsInfo.component";
import UserDescriptionInfo from "../FormInfo/UserDescriptionInfo.component";
import UserEducationInfo from "../FormInfo/UserEducationInfo.component";
import UserFamilyInfo from "../FormInfo/UserFamilyInfo.component";
import UserProfilePictureInfo from "../FormInfo/UserProfilePictureInfo.component";
import UserReligionInfo from "../FormInfo/UserReligionInfo.component";

const SignUpForm = () => {
  const [page, setPage] = useState(0);
  const titles = [
    "User Credentials",
    "Religion details",
    "Family details",
    "Educations and occupations",
    "Write yourself",
    "Add a profile picture",
  ];

  const pageDisplay = () => {
    if (page === 0) return <UserCredentialsInfo />;
    else if (page === 1) return <UserReligionInfo />;
    else if (page === 2) return <UserFamilyInfo />;
    else if (page === 3) return <UserEducationInfo />;
    else if (page === 4) return <UserDescriptionInfo />;
    else if (page === 5) return <UserProfilePictureInfo />;
  };

  return (
    <div>
      <p>{page * 20}% complete</p>
      <h2>{titles[page]}</h2>
      {pageDisplay()}
      <button
        disabled={page === 0}
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
      >
        prev
      </button>
      {page <= 4 ? (
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          next
        </button>
      ) : (
        <button>submit</button>
      )}
    </div>
  );
};
export default SignUpForm;
