import React from 'react';
import Sidebar from '../components/Sidebar';

export default function ProfilePage() {
  return (
    <>
      <div className="main flex justify-center relative   ">
        <section className=" bg-gradient-to-r from-[#192655] to-[#E1AA74]   left-6 flex-grow break-words ">
          <div className="container mx-auto py-10">
            <div className="flex  flex-col justify-center items-center">
              <div className="w-1/3">
                <div className="p-6 rounded-2xl  shadow mb-8 bg-slate-800 list-image- ">
                  <div className="text-center">
                    <img
                      src="pngegg.png"
                      alt="avatar"
                      className="rounded-full w-32 h-32 mx-auto mb-4 bg-white"
                    />
                    <p
                      className="text-white text-sm mb-2
              font-bold font-lora text-2xl"
                    >
                      Nihal Mohammad Ali
                    </p>
                    <p className="text-white mb-4 font-metal text-lg">
                      Student at IIITDM Jabalpur
                    </p>
                    <div className="flex justify-center mb-4">
                      <button className=" bg-[#F3F0CA] text-black font-metal px-4 py-2 rounded mr-2 hover:bg-[#74b7db]">
                       Register Complaint
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* BELOW PART */}

              <div className="w-2/3 flex flex-col justify-center ">

  {/* shrink here */}
                <div className=" text-black p-6 rounded shadow mb-8 bg-white ">
                  <div className="flex flex-col mb-4 mx-4">
                    <div className="prsnlh flex gap-2">
                      <span>
                        <img
                          src="personalDetailsLogo.png"
                          alt="logo"
                          className=" w-6 h-6 block"
                        />
                      </span>
                      <h1 className="peresonalDetails  font-lora text-ellipsis block">
                        PERSONAL DETAILS
                      </h1>
                    </div>
                    <br />

                    <div className="personalDetailValues flex flex-col font-lora gap-3">
                      {/* NAME */}
                      <div className="bbox1 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">Name :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">NIHAL MOHAMMAD ALI</p>
                      </div>
                      </div>


                      {/* ROLL NO */}
                     <div className="bbox2 flex gap-16">
                     <div className="w-1/4">
                        <p className="font-bold">Roll No :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800 ">22BCS170</p>
                      </div>
                     </div>

                      {/* DOB */}
                      <div className="bbox3 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">D.O.B :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">07-10-2003</p>
                      </div>
                      </div>

                      {/* email */}

                      <div className="bbox4 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">Email Id :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">22bcs170@iiitdmj.ac.in</p>
                      </div>
                      </div>
                    </div>
                  </div>
                  {/* Repeat the pattern for other user details */}
                </div>
{/* shrink here */}
                <div className=" text-black p-6 rounded shadow mb-8 bg-white">
                  <div className="flex flex-col mb-4 ">
                    <div className="prsnlh flex gap-2 ">
                      <span>
                        <img
                          src="hostelLogo.jpg"
                          alt="logo"
                          className=" w-10 h-10 block"
                        />
                      </span>
                      <h1 className="peresonalDetails  font-lora text-ellipsis ">
                        HOSTEL DETAILS
                      </h1>
                    </div>
                    <br />

                    <div className="personalDetailValues flex flex-col font-lora gap-3">
                      {/* NAME */}
                      <div className="box1 flex gap-16">
                      <div className="w-1/4 ">
                        <p className="font-bold">Hostel Name :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">Vasishtha Hostel (HALL-4)</p>
                      </div>
                      </div>
                      <br />
                      {/* hostel id */}
                      <div className="box2 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">Hostel ID :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800 ">H4V2882</p>
                      </div>
                      </div>
                      <br />
                      {/* ROLL NO */}
                      <div className="box3 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">Room No :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800 ">F-202</p>
                      </div>
                      </div>
<br />
                      {/* DOB */}
                      <div className="box4 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">Warden Name :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">Pankaj Sharma</p>
                      </div>
                      </div>
<br />
                      {/*Warden email */}

                      <div className="box5 flex gap-16 ">
                      <div className="w-1/4">
                        <p className="font-bold">Warden Mail Id :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">wardenhall4@iiitdmj.ac.in</p>
                      </div>
                      </div>

                      <br />
                      {/* caretaker */}
                      <div className="box6 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">Caretaker Name :</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">Ramnivas Mishra</p>
                      </div>
                      </div>

                      <br />
                      {/* caretaker mailid */}
                      <div className="box7 flex gap-16">
                      <div className="w-1/4">
                        <p className="font-bold">Caretaker Mail Id:</p>
                      </div>
                      <div className="w-3/4">
                        <p className="text-gray-800">caretakerhall4@iiitdmj.ac.in</p>
                      </div>
                      </div>
                      <br />
                    </div>
                  </div>
                  {/* Repeat the pattern for other user details */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Sidebar />
      </div>
    </>
  );
}