import Image from 'next/image'
import { FunctionComponent } from 'react'
import AdminLayout from './AdminLayout'

const Profile: FunctionComponent = () => {
  return (
    <AdminLayout>
      <section className="pt-16 bg-blueGray-50">
        <div className="relative flex flex-col pt-16 min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 outline outline-blue-500/50">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    className="aspect-[3/2] object-cover rounded-full h-32 w-32 shadow-lg"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="TurkeyLearningInitiative"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Karsu Dönmez
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                example@gmail.com
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Admin
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
              <div className="w-full px-4 text-center mt-10">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      22
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Yüklenen Dökümanlar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
export default Profile
