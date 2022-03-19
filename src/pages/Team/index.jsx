import React, {useState} from 'react'
import Header from "../../components/Header";
import { ImgCard } from "../../components/Cards";
import {team} from "../../utils"
const Team = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");
  const [role, setRole] = useState("");
  const [details, setDetails] = useState("")
  const modalDialog = (name, src, role, details) => {
    setOpenModal(true);
    setRole(role);
    setSrc(src);
    setName(name);
    setDetails(details)
  }
  return (
    <div>
        <Header />
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className=" col-span-12 sm:col-span-7 inline sm:px-14"> 
              <div className="__shecodeheader_text">
                    <div className="__shecodeheader_title">
                        <h1>Our Team</h1>
                    </div>
                    <div className="__shecodeheader_subtitle">
                        <h4>
                            Empowering and celebrating <span className="highlight">women <br/> in technology</span> across Africa guiding <br/> Tech-Girls to their Full Potential
                        </h4>
                    </div>
                </div>
            </div>
            <div className="hidden sm:col-span-5 sm:inline">
              <div className="__shecodeheader_image"></div>
            </div>
          </div>

        </section>
        <div className="container mx-auto px-8 __shecodecontent">
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
              {
                team.map(({name, src, role, details}, index)=>{
                return <div onClick={()=> modalDialog(name, src, role, details)} key={index}>
                    <ImgCard name={name} src={src} role={role}/>
                </div>
                })
              }
            </div>
        </div>
        {
          openModal ? 
            <div id="defaultModal" aria-hidden="true" className="modal team_modal overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-full md:inset-0 bg-[#333] bg-opacity-70">
              <div className="relative px-4 w-full max-w-2xl h-full modal-dialog-centered mx-auto my-auto grid content-center">
              <div className="modal-content relative">
                <div className="-mx-4 grid grid-cols-12 modal-body content-center rounded-[50px] bg-white">
                          <div className="col-span-12 sm:col-span-6">
                            <div className="__shecodeteammember_box">
                                <div className="__shecodeteammember_img">                                 
                                    <img src={src} alt={name} className="img-responsive"/> 
                                </div>
                                <div className="__shecodeteammember_text">
                                    <h5 className="name">{name}</h5>
                                    <p className="role">{role}</p>
                                </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 justify-self-start bg-white rounded-lg shadow px-4">
                            <div className="__shecodeteammember_details">
                            <div className="flex justify-between items-start ">
                              <span className="close hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl font-bold p-1.5 ml-auto inline-flex items-center " data-dismiss="modal" aria-hidden="true" title="close" role="button" onClick={()=> setOpenModal(false)}>x</span>
                            </div>
                                <p>{details}</p>
                            </div>
                          </div>
                </div>
              </div>
          </div>
          </div> : null
        }
    </div>
  )
}

export default Team