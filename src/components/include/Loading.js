
import loading from "../../assets/img/loading.gif"
function Loading() {
    const styles = {
        width:"100%",
        height:"84vh",
        display:"flex",
        alignItems:"center",
        backgroundColor:"#fff"
    };
    const defaultLetter = {
        textAlign:"center",
        height:"fit-content",
        margin:"auto",
        width:"200px"
    }
  return (
    <div  style={styles}>
      <img src={loading} style={defaultLetter} alt="" />
    </div>
  );
}

export default Loading;
