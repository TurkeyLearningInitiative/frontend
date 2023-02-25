import DangerButton from '@/components/buttons/DangerButton'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import DropDown from '@/components/dropdown'
import { DropDownItem } from '@/components/dropdown/DropDownItem'
import { Box, Card, CardMedia } from '@mui/material'
import { RowSelectionState } from '@tanstack/react-table'
import type { MRT_ColumnDef } from 'material-react-table' // If using TypeScript (optional, but recommended)
import MaterialReactTable from 'material-react-table'
import { FunctionComponent, useMemo, useState } from 'react'
import AdminLayout from './AdminLayout'

interface ILectureNote {
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
const Dashboard: FunctionComponent<{ lectures: ILectureNote[] }> = ({
  lectures,
}) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const columns = useMemo<MRT_ColumnDef<Partial<ILectureNote>>[]>(
    () => [
      {
        accessorKey: 'title', //simple recommended way to define a column
        header: 'Başlık',
      },
      {
        header: 'Açıklama',
        accessorKey: 'description', //simple recommended way to define a column
      },
      {
        header: 'Yazan',
        accessorKey: 'author', //simple recommended way to define a column
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
                  <DropDownItem
                    text="Onayla"
                    key="onayla"
                    onClick={() => {
                      console.log('onayla')
                    }}
                  />,
                  <DropDownItem
                    text="Sil"
                    key="Sil"
                    danger
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    }
                    onClick={() => {
                      console.log('sil')
                    }}
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

  return (
    <AdminLayout>
      <div className="mt-6 sm:px-6 lg:px-8">
        <div className="mt-3 flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <MaterialReactTable
              initialState={{
                density: 'compact',
                columnPinning: { right: ['_id'] },
              }}
              state={{ rowSelection }}
              columns={columns}
              data={lectures}
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
              renderTopToolbarCustomActions={({ table }) => (
                <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
                  <PrimaryButton
                    onClick={() => {
                      alert('Create New Account')
                    }}
                  >
                    Not Ekle
                  </PrimaryButton>
                  <DangerButton
                    disabled={Object.keys(rowSelection).length === 0}
                    onClick={() => {
                      alert('Delete Selected Accounts')
                    }}
                  >
                    Seçili Notları Sil
                  </DangerButton>
                </Box>
              )}
              onRowSelectionChange={setRowSelection}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api-production-7e9a.up.railway.app/v1/lecture-notes'
  )
  const lectures = await res.json()

  return {
    props: {
      lectures,
    },
  }
}
export default Dashboard
