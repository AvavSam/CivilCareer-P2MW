"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header/header";
import { Eye, EyeOff, Settings, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import Image from "next/image";
import { formatDate } from "@/libs/utils";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!session?.user) {
          return;
        }
        const data = await fetch("/api/v1/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: session.user.id,
          }),
        });
        const user = await data.json();

        if (status === "authenticated" && session?.user) {
          setUserData({
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            emailVerified: user.emailVerified,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            subscriptions: user.subscriptions || [], // Harus array
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [session, status]);

  if (status === "loading" || isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (status === "unauthenticated") {
    window.location.href = "/auth/signin";
    return null;
  }
  if (!userData) {
    return;
  }
  const expDate = formatDate(userData.subscriptions[0]?.expiresAt);
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main>
          <div className="mx-auto max-w-7xl p-6">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Profile Overview */}
              <div className="md:col-span-1">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex flex-col items-center">
                    <Image
                      src={
                        userData?.image ||
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                      alt="Profile"
                      width={256}
                      height={256}
                      className="h-32 w-32 rounded-full object-cover"
                    />
                    <h2 className="mt-4 text-xl font-semibold">{userData?.name || "Loading..."}</h2>
                    <p className="text-gray-500">{userData?.email || "Loading..."}</p>
                  </div>
                  <div className="mt-6 border-t pt-6">
                    <h3 className="mb-4 font-semibold">Membership</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Package</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-sm">
                          {userData?.subscriptions[0]?.planName}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status</span>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-800">
                          {userData?.subscriptions[0]?.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Valid Until</span>
                        <span className="text-sm">{expDate}</span>
                      </div>
                    </div>
                    <div className="mt-4 border-t pt-4">
                      <h4 className="mb-2 text-sm font-medium">Features</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>✓ Unlimited course access</li>
                        <li>✓ Practice questions</li>
                        <li>✓ Mentor consultation</li>
                        <li>✓ Certificate of completion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="md:col-span-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">Account Settings</h2>
                  </div>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input
                          name="name"
                          defaultValue={userData?.name || ""}
                          className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          name="email"
                          type="email"
                          defaultValue={userData?.email || ""}
                          className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <div className="relative">
                        <input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-500" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {/* <button
                        type="submit"
                        disabled={isLoading}
                        className={`rounded-lg bg-blue-900 px-4 py-2 text-white transition-colors hover:bg-blue-800 ${
                          isLoading ? "cursor-not-allowed opacity-50" : ""
                        }`}
                      >
                        {isLoading ? "Saving..." : "Save Changes"}
                      </button> */}
                    </div>
                  </form>

                  {/* Logout Section */}
                  <div className="mt-8 border-t pt-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-red-600">Logout Account</h3>
                        <p className="mt-1 text-sm text-gray-500">Securely sign out from your CivilCareer account</p>
                      </div>
                      <button
                        onClick={() => setShowLogoutDialog(true)}
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-red-600 transition-colors hover:bg-red-50"
                        aria-label="Open logout confirmation dialog"
                      >
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Logout Dialog */}
      {showLogoutDialog && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowLogoutDialog(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="mx-4 w-full max-w-sm rounded-lg bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Confirm Logout</h2>
              <p className="mb-6 text-gray-600">Are you sure you want to logout from your account?</p>
              <div className="flex justify-end gap-3">
                <button
                  className="rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50"
                  onClick={() => setShowLogoutDialog(false)}
                >
                  Cancel
                </button>
                <button
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setShowLogoutDialog(false);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
