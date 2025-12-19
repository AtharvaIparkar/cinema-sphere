import React from 'react';
import { UserProfile, useUser } from '@clerk/clerk-react';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Welcome back, {user?.firstName || 'Movie Lover'}!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">∞</div>
              <h3 className="text-white font-semibold">Movies Available</h3>
              <p className="text-gray-400 text-sm">Unlimited streaming</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">HD</div>
              <h3 className="text-white font-semibold">Quality</h3>
              <p className="text-gray-400 text-sm">High definition</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
              <h3 className="text-white font-semibold">Servers</h3>
              <p className="text-gray-400 text-sm">Multiple options</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <UserProfile 
            appearance={{

              baseTheme: "dark",
              elements: {
                rootBox: "w-full",
                card: "bg-gray-900 border-gray-700",
                headerTitle: "text-white",
                headerSubtitle: "text-white",
                socialButtonsBlockButton: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600",
                formButtonPrimary: "bg-red-600 hover:bg-red-700 text-white",
                formButtonSecondary: "text-white border-gray-600 hover:bg-gray-800",
                footerActionLink: "text-white hover:text-gray-300",
                formFieldLabel: "text-white",
                formFieldInput: "text-white bg-gray-800 border-gray-600",
                formFieldInputShowPasswordButton: "text-white",
                formFieldAction: "text-white",
                dividerLine: "bg-gray-600",
                dividerText: "text-white",
                alternativeMethodsBlockButton: "bg-gray-700 text-white border-gray-600 hover:bg-gray-600",
                otpCodeFieldInput: "text-white bg-gray-800 border-gray-600",
                formResendCodeLink: "text-white hover:text-gray-300",
                identityPreviewEditButton: "text-white",
                identityPreviewText: "text-white",
                formHeaderTitle: "text-white",
                formHeaderSubtitle: "text-white",
                profileSection: "text-white",
                profileSectionContent: "text-white",
                profileSectionTitle: "text-white",
                profileSectionTitleText: "text-white",
                profileSectionPrimaryButton: "bg-red-600 hover:bg-red-700 text-white",
                badge: "bg-red-600 text-white",
                modalContent: "bg-gray-900 text-white",
                modalCloseButton: "text-white hover:text-gray-300",
                accordionTriggerButton: "text-white hover:text-gray-300",
                accordionContent: "text-white",
                breadcrumbsItem: "text-white",
                breadcrumbsItemDivider: "text-gray-400",
                pageScrollBox: "bg-gray-900",
                navbar: "bg-gray-900 border-gray-700",
                navbarButton: "text-white hover:text-gray-300",
                navbarMobileMenuButton: "text-white",
                formFieldSuccessText: "text-green-400",
                formFieldErrorText: "text-red-400",
                formFieldWarningText: "text-yellow-400"
              },
              variables: {
                colorPrimary: "#dc2626",
                colorBackground: "#111827",
                colorInputBackground: "#374151",
                colorInputText: "#ffffff",
                colorText: "#ffffff",
                colorTextSecondary: "#ffffff"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;