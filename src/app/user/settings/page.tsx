import React from "react";

export default function Profile() {
  return (
    <div className="p-6 w-full bg-white rounded-2xl max-md:px-4 max-md:max-w-full">
      <h1 className="text-xl font-semibold text-neutral-700 mb-6">Business Profile</h1>

      <div className="flex gap-20 max-md:flex-col">
      <div className="flex flex-col max-md:w-full relative">
  <img
    loading="lazy"
    src="/logo.svg"
    className="object-contain aspect-square max-w-40 mt-4 max-md:ml-1 rounded-full "
    alt="Business Logo"
  />

  {/* Update Profile Icon */}
  <div className="absolute top-4 right-4 p-2 border text-white rounded-full cursor-pointer">
   <img src="/icons/camera.svg" alt="upload" className="h-5 w-5" />
  </div>
</div>
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
          <form className="space-y-6 text-black max-md:mt-6">
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              {/* Business Website 1 */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="businessWebsite1">Business Website 1</label>
                <input
                  id="businessWebsite1"
                  type="url"
                  value="https://solsn.com"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>

              {/* Business Industry */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="businessIndustry">Business Industry</label>
                <input
                  id="businessIndustry"
                  type="text"
                  value="Professional Services"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>

              {/* Business Address */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="businessAddress">Business Address</label>
                <input
                  id="businessAddress"
                  type="text"
                  value="Navi Mumbai, Maharashtra - 410218"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>

              {/* Email for Business Contact */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="businessEmail">Email for Business Contact</label>
                <input
                  id="businessEmail"
                  type="email"
                  value="info@solsn.com"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value="+91 8850346213"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>

              {/* Business Website 2 */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="businessWebsite2">Business Website 2</label>
                <input
                  id="businessWebsite2"
                  type="url"
                  value="N/A"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>

              {/* About */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="about">About</label>
                <input
                  id="about"
                  type="text"
                  value="Available"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>

              {/* Business Description */}
              <div>
                <label className="text-base font-medium tracking-tight" htmlFor="businessDescription">Business Description</label>
                <input
                  id="businessDescription"
                  type="text"
                  value="Web Development, Web Designing, Digital Marketing"
                  disabled
                  className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
                />
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white font-light text-sm rounded-lg hover:bg-green-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
