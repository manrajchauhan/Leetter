"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [profileData, setProfileData] = useState<any>(null);
  const [businessProfileData, setBusinessProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBusinessProfile = async () => {
      try {1
        const profileResponse = await axios.get("/api/business-profile/profile");
        setProfileData(profileResponse.data);

        const businessProfileResponse = await axios.get("/api/business-profile");
        setBusinessProfileData(businessProfileResponse.data?.data[0] || null);

      } catch (err) {
        setError("Failed to fetch business profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessProfile();
  }, []);

  return (
    <div className="p-6 w-full bg-white rounded-2xl max-md:px-4 max-md:max-w-full">
      <h1 className="text-xl font-semibold text-neutral-700 mb-6">Business Profile</h1>

      <div className="flex gap-20 max-md:flex-col">
        {/* Profile Logo */}
        <div className="flex flex-col max-md:w-full relative">
        {loading ? (
            <Skeleton className="w-40 h-40 rounded-full" />
          ) : (
            <img
              loading="lazy"
              src={businessProfileData?.profile_picture_url || "/logo.svg"}
              className="object-contain aspect-square max-w-40 mt-4 max-md:ml-1 rounded-full"
              alt="Business Logo"
            />
          )}
        </div>

        {/* Profile Details */}
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
          <form className="space-y-6 text-black max-md:mt-6">
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="h-10 w-full" />)
              ) : (
                <>
                  <InputField label="Business Name" value={profileData?.verified_name || "N/A"} />
                  <InputField label="Display Phone" value={profileData?.display_phone_number || "N/A"} />
                </>
              )}

{loading ? (
                Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="h-10 w-full" />)
              ) : (
                <>
                  <InputField label="About" value={businessProfileData?.about} />
                  <InputField label="Business Description" value={businessProfileData?.description} />
                  <InputField label="Email for Business Contact" value={businessProfileData?.email} />
                  <InputField label="Service Type" value={formatServiceType(businessProfileData?.vertical)} />
                  {businessProfileData?.websites?.[0] && (
                    <InputField label="Website 1" value={businessProfileData.websites[0]} />
                  )}
                  {businessProfileData?.websites?.[1] && (
                    <InputField label="Website 2" value={businessProfileData.websites[1]} />
                  )}
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const formatServiceType = (type: string | undefined) => {
  const serviceTypes: Record<string, string> = {
    "PROF_SERVICES": "Professional Services",
  };
  return serviceTypes[type || ""] || "N/A";
};

const InputField = ({ label, value }: { label: string; value?: string }) => (
  <div>
    <label className="text-base font-medium tracking-tight">{label}</label>
    <input
      type="text"
      value={value?.trim() ? value : "N/A"}
      disabled
      className="mt-2 px-3 py-2 rounded-lg bg-gray-100 font-light text-sm text-neutral-700 w-full"
    />
  </div>
);

const Skeleton = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-neutral-100 rounded ${className}`} />
);
