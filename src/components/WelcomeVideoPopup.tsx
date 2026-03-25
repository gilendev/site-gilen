import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const STORAGE_KEY = "gilen-welcome-seen";

const WelcomeVideoPopup = () => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="sm:max-w-3xl p-0 border-none bg-black overflow-hidden rounded-lg">
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative w-full aspect-video">
          <video
            ref={videoRef}
            autoPlay
            controls
            playsInline
            className="w-full h-full object-contain"
            onEnded={handleClose}
          >
            <source src="/welcome-video.mp4" type="video/mp4" />
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeVideoPopup;
