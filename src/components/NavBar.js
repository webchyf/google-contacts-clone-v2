import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  AdjustmentsIcon,
  ArrowLeftIcon,
  CogIcon,
  HeartIcon,
  ViewGridIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import logo from "../assets/images/logo.png";

function NavBar() {
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <header className="bg-white h-min">
      <Disclosure>
        {({ open, close }) => (
          <div className="flex  items-center p-2 lg:px-3.5 justify-between">
            <div className="flex items-center lg:w-64">
              <button className="p-1.5 lg:p-2 hover:bg-slate-100 rounded-full">
                <AdjustmentsIcon className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" />
              </button>

              <img
                src={logo}
                alt="Webble Logo"
                className="h-8 w-8 ml-2 lg:h-10 lg:w-10"
              />
              <p className="ml-2 lg:ml-3 font-medium text-[22px]  text-gray-600">
                Contacts
              </p>
            </div>
            {/* input */}
            <div className="w-[65%] hidden lg:block pr-24">
              <button className="ml-2 mt-1.5 absolute p-2 hover:bg-slate-100 rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-600" />
              </button>
              <input
                type="search"
                className="w-full bg-slate-50 rounded-lg  py-3 pl-14 pr-2 focus-visible:border-cyan-700 outline-none font-normal text-gray-800 border-b-2 border-transparent focus:bg-white focus:border-b-2 focus:border-cyan-700 focus:rounded-b-none focus:shadow"
                placeholder="Search"
              />
            </div>
            {/* input end */}

            {open && (
              <Disclosure.Panel className="absolute z-10 sm:w-[70%] lg:hidden">
                <button
                  className="mt-0.5 absolute p-2 hover:bg-slate-100 rounded-full"
                  onClick={() => close()}
                >
                  <ArrowLeftIcon className="h-4 w-4 text-gray-600" />
                </button>
                <input
                  type="search"
                  className="w-full bg-slate-50 rounded-lg  py-2 pl-10 pr-2 focus-visible:border-cyan-700 outline-none font-normal text-gray-800 border-b-2 border-transparent focus:bg-white focus:border-b-2 focus:border-cyan-700 focus:rounded-b-none focus:shadow text-sm"
                  placeholder="Search"
                />
              </Disclosure.Panel>
            )}
            <div className="flex items-center justify-end">
              <div>
                {!open && (
                  <Disclosure.Button className="p-1 lg:p-2 hover:bg-slate-100 rounded-full lg:hidden">
                    <SearchIcon className="h-5 w-5 text-gray-600" />
                  </Disclosure.Button>
                )}
              </div>

              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="p-1 lg:p-2 hover:bg-slate-100 rounded-full mx-1">
                    <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow p-2 bg-white ">
                    <Menu.Item key="feedback">
                      {({ active }) => (
                        <a
                          href="/feedback"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Send Feedback
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item key="help">
                      {({ active }) => (
                        <a
                          href="/help"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Help
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="p-1 lg:p-2 hover:bg-slate-100 rounded-full lg:mx-1.5">
                    <CogIcon className="h-5 w-5 text-gray-600 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow p-2 bg-white ">
                    <Menu.Item key="undo-changes">
                      {({ active }) => (
                        <a
                          href="/undo-changes"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Undo Changes
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item key="settings">
                      {({ active }) => (
                        <a
                          href="/settings"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          More Settings
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="p-1 lg:p-1.5 hover:bg-slate-100 rounded-full mr-1 lg:mr-3 lg:ml-4">
                    <ViewGridIcon className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 min-w-[300px] rounded-md shadow p-2 bg-white grid grid-cols-3 gap-4">
                    <Menu.Item key="Health Tracker">
                      {({ active }) => (
                        <a
                          href="/h-tracker"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "p-2 text-sm text-gray-700 flex flex-col items-center justify-center rounded"
                          )}
                        >
                          <HeartIcon className="h-10 w-10 text-red-500" />
                          <p className="text-center mt-1">Health</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item key="Health Tracker">
                      {({ active }) => (
                        <a
                          href="/h-tracker"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "p-2 text-sm text-gray-700 flex flex-col items-center justify-center rounded"
                          )}
                        >
                          <HeartIcon className="h-10 w-10 text-red-500" />
                          <p className="text-center mt-1">Health</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item key="Walk Tracker">
                      {({ active }) => (
                        <a
                          href="/h-tracker"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "p-2 text-sm text-gray-700 flex flex-col items-center justify-center rounded"
                          )}
                        >
                          <HeartIcon className="h-10 w-10 text-red-500" />
                          <p className="text-center mt-1">Walk</p>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="bg-gray-800 rounded-full flex items-center justify-center text-sm ">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 lg:h-9 lg:w-9 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow  bg-white ">
                    <div className="flex flex-col justify-center items-center w-60 px-2 py-5">
                      <img
                        className="h-16 w-16 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                      <p className="mt-2 font-bold capitalize">
                        John Setsofia Gbadago
                      </p>
                      <p className="font-light m-0 mb-2 text-sm">
                        webchyf@gmail.com
                      </p>
                      <button className="mt-0.5 text-light border rounded-[25px] py-1 px-4 text-xs">
                        Manage your account
                      </button>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        )}
      </Disclosure>
    </header>
  );
}

export default NavBar;
