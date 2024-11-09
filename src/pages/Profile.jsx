import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";
import { validateForm } from "../utils/formvalidation";
import ErrorMessage from "../components/common/ErrorMessage";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/cards/UserCard";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const [err, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [somethingWrong, setSomethingWrong] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setfName(user.fName || "");
      setlName(user.lName || "");
      setAge(user.age || "");
      setAbout(user.about || "");
      setGender(user.gender || "");
      setProfileURL(user.profileURL || "");
    }
  }, [user]);
  const handleProfileUpdate = async () => {
    if (!validateForm({ fName, lName, age, gender }, setError)) {
      return;
    }
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          fName,
          lName,
          age,
          about,
          gender,
          profileURL,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        setSuccessMsg(res.data.message);
        dispatch(addUser(res.data.data));
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        throw new Error("Something Went Wrong, Please Try Later");
      }
    } catch (err) {
      setSomethingWrong(true);
      console.log(err);
    }
  };

  if (somethingWrong) return <ErrorMessage />;

  return (
    <>
      {user && (
        <div className="flex justify-evenly m-4 h-[90%]">
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="card bg-base-300 w-96 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title m-auto">Edit Profile!</h2>

                {/* First Name */}
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    value={fName}
                    onChange={(e) => setfName(e.target.value)}
                    className="grow"
                    placeholder="First Name"
                  />
                </label>

                {/* Last Name */}
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    value={lName}
                    onChange={(e) => setlName(e.target.value)}
                    className="grow"
                    placeholder="Last Name"
                  />
                </label>

                {/* Age */}
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="grow"
                    placeholder="Age"
                  />
                </label>
                {/* profileURL */}
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    value={profileURL}
                    onChange={(e) => setProfileURL(e.target.value)}
                    className="grow"
                    placeholder="profile URL"
                  />
                </label>

                {/* Gender */}
                <label className="input-bordered">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                {/* About */}
                <label className="">
                  <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="textarea textarea-bordered w-full"
                    placeholder="About"
                  />
                </label>

                {/* Error Message */}
                {err && (
                  <div role="alert" className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{err}</span>
                  </div>
                )}

                {/* Success */}
                {successMsg && (
                  <div role="alert" className="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{successMsg}</span>
                  </div>
                )}

                {/* Update Button */}
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-primary"
                    onClick={handleProfileUpdate}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <UserCard
                user={{ fName, lName, age, gender, about, profileURL }}
              />
            </div>
          </div>

          {/* Preview Card */}
        </div>
      )}
    </>
  );
};

export default Profile;
