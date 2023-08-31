function Default() {
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
        margin:"auto"
    }
  return (
    <div  style={styles}>
      <h1 style={defaultLetter}>404 - Page Not Found</h1>
    </div>
  );
}

export default Default;
