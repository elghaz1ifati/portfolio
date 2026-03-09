import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="flex items-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 Fati EL GHAZOUANI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
