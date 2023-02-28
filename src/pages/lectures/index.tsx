import DropDown from '@/components/dropdown'
import { DropDownItem } from '@/components/dropdown/DropDownItem'
import SearchInput from '@/components/SearchInput'
import {
  api,
  CourseResponse,
  getRunningQueriesThunk,
  LectureNotesResponse,
  UniversityResponse,
  useGetCoursesQuery,
  useGetLectureNotesByFilterMutation,
  useGetUniversitiesQuery,
} from '@/lib/services'
import { wrapper } from '@/lib/store'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Box, Card, CardMedia } from '@mui/material'
import update from 'immutability-helper'
import { debounce } from 'lodash-es'
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table'
import { Fragment, useEffect, useMemo, useState } from 'react'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Lectures() {
  const columns = useMemo<MRT_ColumnDef<LectureNotesResponse>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'Başlık',
      },
      {
        header: 'Açıklama',
        accessorKey: 'description',
      },
      {
        header: 'Yazan',
        accessorKey: 'author',
      },
      {
        header: 'Yükleyen',
        accessorKey: 'uploader',
      },
      {
        header: 'Görsel',
        accessorKey: 'heroImageUrl',
        Cell: ({ cell }) => (
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140, objectFit: 'contain' }}
              image={cell.getValue<string>()}
              title="green iguana"
            />
          </Card>
        ),
      },
      {
        header: 'Etiketler',
        accessorKey: 'tags',
        Cell: ({ cell }) => {
          const colors = ['#7c3aed', '#6366f1', '#2563eb']
          return (
            <>
              {cell.getValue<string[]>().map((value, i) => (
                <Box
                  key={value}
                  component="span"
                  sx={() => ({
                    backgroundColor: colors[i % 3],
                    borderRadius: '0.25rem',
                    color: '#fff',
                    maxWidth: '9ch',
                    p: '0.25rem',
                    m: '0.3rem',
                  })}
                >
                  {value}
                </Box>
              ))}
            </>
          )
        },
      },
      {
        header: 'Onay Durumu',
        accessorKey: 'isVerified',
        Cell: ({ cell, row }) =>
          cell.getValue<boolean>() ? (
            <span className="text-green-400">Onaylandı</span>
          ) : (
            <span className="text-red-400">Onaylanmadı</span>
          ),
      },
      {
        header: 'İşlemler',
        accessorKey: '_id',
        Cell: ({ cell, row }) => {
          return (
            <>
              <DropDown
                cell={cell}
                text="İşlemler"
                actions={[
                  <DropDownItem
                    text="İndir"
                    key="indir"
                    href={cell.getValue<string>()}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={row.original['contentUrl']}
                  />,
                ]}
              />
            </>
          )
        },
      },
    ],
    []
  )

  const { data: courses } = useGetCoursesQuery()
  const [getLectureNotesByFilter, result] = useGetLectureNotesByFilterMutation()

  const { data: universities } = useGetUniversitiesQuery()
  const { data: universityMajors } = useGetUniversitiesQuery()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const universitiesArray = universities?.map(
    (university: UniversityResponse) => ({
      value: university._id,
      label: university.name,
      checked: false,
    })
  )
  const universityMajorsArray = universityMajors?.map(
    (universityMajor: UniversityResponse) => ({
      value: universityMajor._id,
      label: universityMajor.name,
      checked: false,
    })
  )
  const coursesArray = courses?.map((course: CourseResponse) => ({
    value: course._id,
    label: course.name,
    checked: false,
  }))

  const [selectedFilters, setSelectedFilters] = useState<any>()
  useEffect(() => {
    getLectureNotesByFilter({
      university: findFilters('university'),
      major: findFilters('major'),
      course: findFilters('course'),
    })
  }, [selectedFilters])

  const findFilters = (id: string) => {
    return (
      (selectedFilters &&
        selectedFilters
          .find((filter: any) => filter.id === id)
          ?.options?.find((option: { checked: boolean }) => option.checked)
          ?.value) ??
      '' ??
      ''
    )
  }
  const filters = useMemo(
    () => [
      {
        id: 'university',
        name: 'Üniversiteler',
        options: universitiesArray,
      },
      {
        id: 'major',
        name: 'Bölüm',
        options: universityMajorsArray,
      },
      {
        id: 'course',
        name: 'Ders',
        options: coursesArray,
      },
    ],
    [universitiesArray, universityMajorsArray, coursesArray]
  )
  const [searchedFilters, setSearchedFilters] = useState<
    {
      id: string
      name: string
      options:
        | {
            value: string
            label: string
            checked: boolean
          }[]
        | undefined
    }[]
  >(filters)

  const handleSearch = debounce((value: string, id: string) => {
    const searchedFilters = filters
      .find((filter) => filter.id === id)
      ?.options?.filter((option) =>
        option.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    setSearchedFilters((prev: any) => {
      const itemIndex = filters.findIndex((item) => item.id === id)

      const updatedState = update(filters, {
        [itemIndex]: {
          options: { $set: searchedFilters },
        },
      })
      return updatedState
    })
  }, 200)
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filtreler
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {searchedFilters?.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section?.options?.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={(value) => {
                                        setSelectedFilters(value)
                                      }}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Ders Notları
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sırala
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">Grid Görünümü</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filtreler</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="notes-heading" className="pt-6 pb-24">
            <h2 id="notes-heading" className="sr-only">
              Ders Notları
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {searchedFilters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        <Disclosure.Panel className="pt-6">
                          <SearchInput
                            handleChange={(value) =>
                              handleSearch(value, section.id)
                            }
                          />
                          <div className="space-y-4 overflow-auto h-60 pt-5">
                            {section?.options?.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange={(e) => {
                                    const itemIndex = filters.findIndex(
                                      (item) => item.id === section.id
                                    )
                                    const subItemIndex =
                                      filters[itemIndex]?.options?.findIndex(
                                        (subItem) =>
                                          subItem.value === e.target.value
                                      ) ?? 0

                                    const updatedState = update(filters, {
                                      [itemIndex]: {
                                        options: {
                                          [subItemIndex]: {
                                            checked: { $set: true },
                                          },
                                        },
                                      },
                                    })
                                    setSelectedFilters(updatedState)
                                  }}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* note grid */}
              <div className="lg:col-span-3">
                <MaterialReactTable
                  initialState={{
                    density: 'compact',
                    columnPinning: { right: ['_id'] },
                  }}
                  columns={columns}
                  data={result?.data ?? ([] as LectureNotesResponse[])}
                  enableRowSelection
                  enableColumnOrdering
                  enableGlobalFilter={false}
                  enablePinning
                  muiTableBodyProps={{
                    sx: {
                      //stripe the rows, make odd rows a darker color
                      '& tr:nth-of-type(odd)': {
                        backgroundColor: '#f5f5f5',
                      },
                    },
                  }}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(api.endpoints.getCourses.initiate())
    store.dispatch(api.endpoints.getUniversities.initiate())
    store.dispatch(api.endpoints.getUniversityMajor.initiate())

    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    return {
      props: {},
    }
  }
)
