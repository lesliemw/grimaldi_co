"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";

export default function Modal({ open, setOpen, children }) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed flex inset-0 p-4 justify-center overflow-y-auto z-10">
        <div className="flex justify-center">
          <DialogPanel className="max-w-3xl md:max-w-4xl transform rounded-lg overflow-y-auto md:overflow-hidden bg-white p-6 text-left shadow-xl transition-all">
            <>
              <span className="object-left-top cursor-pointer">
                <FaXmark onClick={setOpen} />
              </span>
              {children}
            </>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
