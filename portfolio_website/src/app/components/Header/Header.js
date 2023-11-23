import profile from "../../images/profile.png"

export default function Header() {
  return (
    <div className="main-div-header"> 
      <h1 className="first-h1-header">I'm an </h1>
      <h1 lassName="second-h1-header" >IT student _</h1>
      <img src={profile} />
    </div>
  )
}
