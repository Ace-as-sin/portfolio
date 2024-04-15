import useImageOnLoad from "./UseImageOnLoad";

const Image = ({ width = "100%", height = "100%", lowResSrc, highResSrc }) => {
    const { handleImageOnLoad, transitionStyles } = useImageOnLoad();
  
    const styles = {
      wrapper: {
        position: "absolute",
        width,
        height,
      },
      image: {
        position: "absolute",
        width: "100%",
        height: "100%",
      },
    };
  
    const lowResStyle = { ...styles.image, ...transitionStyles.lowRes };
    const highResStyle = { ...styles.image, ...transitionStyles.highRes };
  
    return (
      <div style={styles.wrapper}>
        <img src={lowResSrc} style={lowResStyle} onLoad={handleImageOnLoad} />
        <img src={highResSrc} style={highResStyle} onLoad={handleImageOnLoad} />
      </div>
    );
  };
  
  export default Image;