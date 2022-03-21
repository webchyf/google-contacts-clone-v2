import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  CloudDownloadIcon,
  InboxInIcon,
  PlusIcon,
  PlusSmIcon,
  PrinterIcon,
  SparklesIcon,
  TagIcon,
  TrashIcon,
  UploadIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  return (
    <div
      className="w-64 lg:w-[360px] z-40 py-3 pr-3 absolute md:relative h-full flex-col justify-between  md:flex  transition duration-1000 ease-in-out bg-white "
      id="side-nav"
    >
      <button className="rounded-3xl shadow pl-2.5 pr-6 py-2 flex items-center ml-1.5 w-max hover:bg-slate-50 hover:shadow-md">
        <PlusIcon className="h-8 w-9 text-green-600" />
        <p className="font-medium text-sm ml-2 text-gray-600  mt-[0.15rem]">
          Create Contact
        </p>
      </button>
      <div className="border-b border-gray-100 pb-2 pt-4">
        <button
          className="flex py-2.5 pl-5 pr-4 items-center w-full rounded-r-full hover:bg-slate-100 justify-between"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="flex items-center">
            <UserIcon className="h-5 w-6 text-gray-500" />
            <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
              All Contacts
            </p>
          </div>

          <p className="font-medium text-sm ml-4 text-gray-500  mt-[0.2rem] self-end">
            456
          </p>
        </button>
        <button
          className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100"
          onClick={() => {
            navigate("/frequent");
          }}
        >
          <ClockIcon className="h-5 w-6 text-gray-500" />
          <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
            Frequently Contacted
          </p>
        </button>
        <button
          className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100"
          onClick={() => {
            navigate("/suggestions");
          }}
        >
          <SparklesIcon className="h-5 w-6 text-gray-500" />
          <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
            Merge & fix
          </p>
        </button>
      </div>
      <Disclosure as="div" className="border-b border-gray-100 py-2 ">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100">
              {open ? (
                <ChevronUpIcon className=" h-5 w-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className=" h-5 w-6 text-gray-500" />
              )}
              <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
                Labels
              </p>
            </Disclosure.Button>
            <Disclosure.Panel>
              <button
                className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100"
                onClick={() => {
                  navigate("/label/family");
                }}
              >
                <TagIcon className="h-5 w-6 text-gray-500" />
                <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
                  Family
                </p>
              </button>
              <button className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100">
                <PlusSmIcon className="h-5 w-6 text-gray-500" />
                <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
                  Create Label
                </p>
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="border-b border-gray-100 py-2">
        <button className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100">
          <UploadIcon className="h-5 w-6 text-gray-500" />
          <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
            Import
          </p>
        </button>
        <button className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100">
          <CloudDownloadIcon className="h-5 w-6 text-gray-500" />
          <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
            Export
          </p>
        </button>
        <button className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100">
          <PrinterIcon className="h-5 w-6 text-gray-500" />
          <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
            Print
          </p>
        </button>
      </div>
      <div className=" py-2">
        <button
          className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100"
          onClick={() => {
            navigate("/email-contacts");
          }}
        >
          <InboxInIcon className="h-5 w-6 text-gray-500" />
          <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
            Email Contacts
          </p>
        </button>
        <button
          className="flex py-2.5 pl-5 items-center w-full rounded-r-full hover:bg-slate-100"
          onClick={() => {
            navigate("/trash");
          }}
        >
          <TrashIcon className="h-5 w-6 text-gray-500" />
          <p className="font-medium text-sm ml-4 text-gray-700  mt-[0.2rem]">
            Trash
          </p>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
