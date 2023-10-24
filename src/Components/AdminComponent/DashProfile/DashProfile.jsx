import { Button } from '@material-tailwind/react';

const DashProfile = () => {
    return (
      <div className="flex flex-col md:flex-row h-[100vh] justify-center items-center gap-5 bg-[#F7F6F9]  w-full container mx-auto">
        {/* left column  */}

        <div className="flex flex-col md:w-1/2 space-y-6">
          <div>
            <h1 className="text-4xl font-bold">My Profile</h1>
          </div>
          <div className="bg-white p-10 rounded-xl ">
            <form action="">
              <div>
                <div className="flex flex-col md:flex-row md:gap-10  p-5 rounded-lg">
                  <div className="relative z-0  mb-6 group md:w-1/2">
                    <input
                      type="text"
                      name="floating_name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#141E46] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="peer-focus:font-medium absolute text-sm text-[#141E46] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141E46] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative z-0  mb-6 group  md:w-1/2">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#141E46] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-[#141E46] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141E46] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-10  p-5 rounded-lg">
                  <div className="relative z-0  mb-6 group md:w-1/2">
                    <input
                      type="text"
                      name="floating_name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#141E46] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="peer-focus:font-medium absolute text-sm text-[#141E46] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141E46] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0  mb-6 group  md:w-1/2">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#141E46] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-[#141E46] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141E46] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-10  p-5 rounded-lg">
                  <div className="relative z-0  mb-6 group md:w-1/2">
                    <input
                      type="text"
                      name="floating_name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#141E46] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="peer-focus:font-medium absolute text-sm text-[#141E46] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141E46] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Facebook Url
                    </label>
                  </div>
                  <div className="relative z-0  mb-6 group  md:w-1/2">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#141E46] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-[#141E46] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141E46] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Address
                    </label>
                  </div>
                </div>
                <div className="flex justify-center px-4">
                  <div className="relative z-0  mb-6 group  w-full ">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block h-[100px] py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#141E46] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-[#141E46] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#141E46] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      About You
                    </label>
                  </div>
                </div>
                <div className="px-4 py-2 bg-[#141E46] text-white text-center rounded-lg">
                  <input className='w-full' type="submit" value="Update Profile" />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* right column  */}
        <div className="md:w-1/3 ">
          <div className="flex space-y-4 w-max flex-col justify-center items-center bg-white p-8 rounded-xl">
            <div className=" ">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/nL9YjTp/Screenshot-3.png"
                alt=""
              />
            </div>
            <div className="w-full space-y-4">
              <Button className="w-full py-5 bg-[#141E46]">Upload Image</Button>
              <p className="text-sm text-blue-gray-400">
                {" "}
                * recommended size minimum 550px
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashProfile;