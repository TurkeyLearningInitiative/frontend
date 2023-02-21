import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import SecondarySuccessButton from '@/components/buttons/SecondarySuccessButton'
import { Box } from '@mui/material'
import type { MRT_ColumnDef } from 'material-react-table' // If using TypeScript (optional, but recommended)
import MaterialReactTable from 'material-react-table'
import { FunctionComponent, useMemo, useState } from 'react'
import Hero from '@/components/BrandHero'
import AdminLayout from './AdminLayout'
import { RowSelectionState } from '@tanstack/react-table'
import DangerButton from '@/components/buttons/DangerButton'

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
        Cell: ({ cell }) => <img src={cell.getValue<string>()} />,
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
              <SecondaryButton
                href={cell.getValue<string>()}
                target="_blank"
                rel="noopener noreferrer"
                download={row.original['contentUrl']}
              >
                İndir
              </SecondaryButton>
              <SecondarySuccessButton
                onClick={() => {
                  console.log('onayla')
                }}
              >
                Onayla
              </SecondarySuccessButton>
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
