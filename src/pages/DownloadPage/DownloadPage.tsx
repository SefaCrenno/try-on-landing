import { AppleIcon, PlayStoreIcon } from "./icons";
import Navbar from "../../components/ui/Navbar";

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16 bg-[#030303] flex items-center justify-center relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Download Our App
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Experience the future of fashion on your mobile device. Download
              now and start your style journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com/your-app-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 p-4 rounded-2xl border border-purple-600/20 hover:border-purple-600/40 transition-all duration-300"
            >
              <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-xl">
                <AppleIcon className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Download on the</p>
                <p className="text-xl font-semibold text-white">App Store</p>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/your-app-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 p-4 rounded-2xl border border-purple-600/20 hover:border-purple-600/40 transition-all duration-300"
            >
              <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-xl">
                <PlayStoreIcon className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">GET IT ON</p>
                <p className="text-xl font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>

          {/* Phone Mockup */}
          <div className="mt-20 flex justify-center">
            <img
              src="/images/mockup.png" // Bu görseli projenize eklemeniz gerekecek
              alt="App mockup"
              className="w-full max-w-md rounded-3xl shadow-2xl shadow-purple-600/20"
            />
          </div>
        </div>
      </div>
    </>
  );
}
