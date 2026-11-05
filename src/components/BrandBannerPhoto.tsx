interface BrandBannerPhotoProps {
  src: string;
  alt: string;
  backdrop: string;
  priority?: boolean;
}

// The subject stays in the original photograph; only the garden fills the extra width.
const BrandBannerPhoto = ({ src, alt, backdrop, priority }: BrandBannerPhotoProps) => (
  <div className="brand-banner-photo h-full w-full overflow-hidden" style={{ backgroundImage: `url("${backdrop}")` }}>
    <img src={src} alt={alt} fetchPriority={priority ? "high" : undefined} className="ml-auto h-full w-full object-cover object-center" />
  </div>
);

export default BrandBannerPhoto;
