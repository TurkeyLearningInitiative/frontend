import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export interface LectureNotesResponse {
  _id: string
  title: string
  description: string
  author: string
  uploader: string
  heroImageUrl: string
  tags: string[]
  searchText: string
  classId: string
  majorId: string
  contentUrl: string
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}
export interface LectureNoteFilter {
  university?: string
  course?: string
  major?: string
  tags?: string[]
}
export interface CourseResponse {
  _id: string
  name: string
}
export interface MajorResponse {
  _id: string
  name: string
}
export interface UniversityResponse {
  _id: string
  webPages: string[]
  name: string
  alphaTwoCode: string
  domains: string[]
  country: string
}
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-production-7e9a.up.railway.app/v1/',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getLectureNotes: builder.query<LectureNotesResponse[], LectureNoteFilter>({
      query: ({}) => '/lecture-notes',
    }),
    getLectureNotesByFilter: builder.mutation<
      LectureNotesResponse[],
      LectureNoteFilter
    >({
      query: ({ university, course, major, tags }) => {
        let url = '/lecture-notes'
        if (university) {
          url += `?university=${university}`
          if (course) {
            url += `&course=${course}`
          }
          if (major) {
            url += `&major=${major}`
          }
          if (tags && tags.length > 0) {
            url += `&tags=${tags.join(',')}`
          }
        } else if (course) {
          url += `?course=${course}`
          if (major) {
            url += `&major=${major}`
          }
          if (tags && tags.length > 0) {
            url += `&tags=${tags.join(',')}`
          }
        } else if (major) {
          url += `?major=${major}`
          if (tags && tags.length > 0) {
            url += `&tags=${tags.join(',')}`
          }
        } else if (tags && tags.length > 0) {
          url += `?tags=${tags.join(',')}`
        }
        return {
          url,
          method: 'GET',
        }
      },
    }),
    getCourses: builder.query<CourseResponse[], void>({
      query: () => '/courses',
    }),
    getUniversities: builder.query<UniversityResponse[], void>({
      query: () => '/universities',
    }),
    getUniversityMajor: builder.query<MajorResponse[], void>({
      query: () => '/university-majors',
    }),
  }),
})

export const {
  getLectureNotes,
  getCourses,
  getUniversities,
  getUniversityMajor,
  getLectureNotesByFilter,
} = api.endpoints

export const {
  useGetCoursesQuery,
  useGetLectureNotesQuery,
  useGetUniversitiesQuery,
  useGetUniversityMajorQuery,
  useGetLectureNotesByFilterMutation,
  util: { getRunningQueriesThunk },
} = api
