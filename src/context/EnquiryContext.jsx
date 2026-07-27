import { createContext, useContext, useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

const EnquiryContext = createContext();

export const useEnquiry = () => useContext(EnquiryContext);

export default function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [packageName, setPackageName] = useState("");

  const openEnquiry = (pkg = "") => {
    setPackageName(pkg);
    setOpen(true);
  };

  const closeEnquiry = () => {
    setOpen(false);
    setPackageName("");
  };

  return (
    <EnquiryContext.Provider value={{ openEnquiry }}>
      {children}

      <EnquiryModal
        open={open}
        close={closeEnquiry}
        packageName={packageName}
      />
    </EnquiryContext.Provider>
  );
}