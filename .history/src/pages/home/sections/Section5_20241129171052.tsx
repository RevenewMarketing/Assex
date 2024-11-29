
import GlobalBanner from '../component/GlobalBanner'
import aacountTypesImg from '../../../assets/pages/Homepage/5-Section-5-table.png'



const Section5: React.FC = () => {
  return (
    <div style={{
      backgroundColor: "#283D7B",
    }}>
      <img style={{
        width:"-webkit-fill-available",
      }} src={aacountTypesImg} alt="account types" />
      <GlobalBanner bgColor={'initial'} />
    </div>
  )
}

export default Section5