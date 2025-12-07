import { ImageGallery } from '../components/ui/image-gallery';

export default function GalleryTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Image Gallery Demo
          </h1>
          <p className="text-center text-gray-600 mb-8">
            True masonry layout with no cropping
          </p>
        </div>
      </div>

      <ImageGallery />
    </div>
  );
}
