import React, { Fragment } from "react";
import {
  StarIcon,
  PencilIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";

function Contacts() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full px-2">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-600 px-6 py-3 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-600 px-6 py-3 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-600 px-6 py-3 text-left"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-600 px-6 py-3 text-left"
                  >
                    Job title & Company
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-3 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white transition duration-300 ease-in-out hover:bg-gray-100 group">
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                    <div className="rounded-full w-9 h-9 items-center justify-center hidden group-hover:flex">
                      <input
                        class=" h-5 w-5 border-4 border-gray-700 rounded-sm bg-slate-50 checked:bg-blue-600 checked:border-blue-600  transition duration-200 align-center bg-no-repeat bg-center bg-contain cursor-pointer "
                        type="checkbox"
                      />
                    </div>

                    <div className="rounded-full w-9 h-9 flex justify-center items-center bg-green-500 text-white text-lg font-bold uppercase pt-0.5 group-hover:hidden">
                      j
                    </div>
                    <p className="ml-5 text-md font-medium">John Gbadago</p>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-2whitespace-nowrap">
                    webchyf@gmail.com
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                    0249943971
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                    Software Developer - Andela
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap w-36">
                    <div className="items-center hidden group-hover:flex">
                      <button className="p-1">
                        <StarIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                      </button>
                      <button className="p-1 ml-1">
                        <PencilIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                      </button>
                      <Menu as="div">
                        <div>
                          <Menu.Button className="p-1">
                            <DotsVerticalIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
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
                          <Menu.Items className="origin-top-right absolute  right-10  w-48 rounded-md shadow p-2 bg-white">
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
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
