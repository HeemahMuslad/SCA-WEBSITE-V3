import React from "react";
import Header from "../../components/Header";
import { ImgCard } from "../../components/Cards";
import {team} from "../../utils"
const About = () => {
  return (
    <>
      <Header page={'about'} />
      <main>
        <div className="container mx-auto px-8">
            <div>
                <h2>Our Awesome Team</h2>
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
              {
                team.map(({name, src, role}, index)=>{
                return <ImgCard name={name} src={src} role={role} key={index}/>
                })
              }
              <div className="text-center col-start-1 col-span-3">
                <a className="btn shecode_button push2" href="/team"> VIEW ALL </a>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default About