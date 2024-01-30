"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignupForm() {
  const [signUpModal, setSignupModal] = useState(false);
  //이메일 입력
  const [email, setEmail] = useState("");
  //이메일 유효 확인
  const [emailValidate, setEmailValidate] = useState(false);
  //비밀번호 입력
  const [password, setPassword] = useState("");
  //비밀번호 유효 확인
  const [passwordValidate, setPasswordValidate] = useState(false);
  //비밀번호 확인 입력
  const [passwordConfirm, setPasswordConfirm] = useState("");
  //비밀번호와 비밀번호 확인이 동일한지 확인
  const [passwordMatch, setPasswordMatch] = useState(false);
  //학사번호 입력
  const [roomNum, setRoomNum] = useState("");
  //이름 입력
  const [name, setName] = useState("");
  //회원가입 활성화 버튼
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Function to validate email
  const validateEmail = (email: string): boolean => {
    return email.includes("@");
  };

  // Function to validate password
  const validatePassword = (password: string): boolean => {
    const minLength = 7;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return password.length >= minLength && specialCharRegex.test(password);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // form의 기본 제출 동작 방지
    const signupData = {
      email: email,
      password: password,
      roomNum: roomNum,
      name: name,
    };
    console.log("Form submitted!");
    setSignupModal(true);
  };
  //useEffect로 필드 유효성 검사
  useEffect(() => {
    setEmailValidate(validateEmail(email));
    setPasswordValidate(validatePassword(password));
    setPasswordMatch(password === passwordConfirm);
    if (emailValidate && passwordValidate && passwordMatch && roomNum && name) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, passwordConfirm, roomNum, name]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            돔토리 회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-orange-200 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {emailValidate ? (
                ""
              ) : (
                <p className="text-sm pl-2 text-gray-400">
                  이메일에는 @가 포함되어 있어야 합니다.
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  비밀번호
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6 p-4"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {passwordValidate ? (
                ""
              ) : (
                <p className="text-sm pl-2 text-gray-400">
                  비밀번호는 7자 이상에 1개 이상의 특수기호가 들어있어야 합니다.
                </p>
              )}
            </div>
            <div>
              <div className="flex items-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  비밀번호 확인
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6 p-4"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
              {passwordMatch ? (
                ""
              ) : (
                <p className="text-sm pl-2 text-gray-400">
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[45%]">
                  <div className="flex items-center">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      학사번호
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="roomNum"
                      name="roomNum"
                      type="text"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6 p-4"
                      onChange={(e) => setRoomNum(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[45%]">
                  <div className="flex items-center">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      이름
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6 p-4"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                disabled={isButtonDisabled}
              >
                승인 요청
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* 모달창 */}
      {signUpModal && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
          <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
            <div className="w-full">
              <div className="m-8 my-20 max-w-[400px] mx-auto">
                <div className="mb-8">
                  <h1 className="mb-4 text-3xl font-extrabold text-center">
                    회원가입 요청이 완료되었습니다.
                  </h1>
                  <p className="text-gray-600 text-center">
                    승인이 완료되면 휴대폰 문자로 알려드릴게요!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-full">
                    <Link href="/" passHref>
                      <p className="w-full p-3 bg-orange-100 border border-orange-400 rounded-full font-semibold text-center block">
                        넹
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
