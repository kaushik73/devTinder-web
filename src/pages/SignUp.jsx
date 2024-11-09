import { useState } from "react";
import ErrorMessage from "../components/common/ErrorMessage";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../utils/formvalidation";
import { BASE_URL } from "../utils/constants";

const SignUp = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [somethingWrong, setSomethingWrong] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (
      !validateForm({ fName, lName, age, gender, email, password }, setError)
    ) {
      return;
    }
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          fName,
          lName,
          gender,
          age,
          profileURL,
          about,
          emailId: email,
          password,
        },
        { withCredentials: true }
      );

      if (res.status === 201) {
        setSuccessMsg(res.data.message);
        navigate("/login");
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
      <div className="flex justify-center mb-5">
        <div className="card bg-base-300 w-[50%] shadow-xl ">
          <div className="card-body">
            <h2 className="card-title m-auto">Sign up to Connect and Chat!</h2>

            {/* fName and lName */}
            <div className=" flex flex-col md:flex-row w-full gap-2  justify-center">
              {/* First Name */}
              <label className=" w-full md:w-1/2 input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                  className="grow"
                  placeholder="First Name"
                />
              </label>

              {/* Last Name */}
              <label className=" w-full md:w-1/2 input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                  className="grow"
                  placeholder="Last Name"
                />
              </label>
            </div>

            {/* email and passowrd */}
            <div className="flex flex-col md:flex-row  gap-2 justify-center">
              {/* email */}
              <label className=" w-full md:w-1/2  input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow"
                  placeholder="Email"
                />
              </label>

              {/* password */}
              <label className=" w-full md:w-1/2  input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="grow"
                />
              </label>
            </div>

            {/* age and gender */}
            <div className="flex flex-col md:flex-row  gap-2 justify-around">
              {/* Age */}
              <label className=" w-full md:w-1/3  input input-bordered flex items-center gap-2">
                <input
                  type="number"
                  // inputMode="numeric"
                  // pattern="[0-9]*"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="grow"
                  placeholder="Age"
                />
              </label>

              {/* Gender */}
              <label className="  w-full md:w-2/3   input-bordered">
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
            </div>

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

            {/* Sign Button */}
            <div className="flex justify-around items-center card-actions ">
              <button
                className="md:ml-[40%] btn btn-primary "
                onClick={handleSignup}
              >
                Sign Up
              </button>
              <Link
                className="text-sm hover:text-blue-900 mr-4 -mt-2"
                to="/login"
              >
                Already a User? Let&apos;s Login!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
