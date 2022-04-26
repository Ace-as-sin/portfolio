import "./TitleSection.scss";

const TitleSection = () => {
    return (
      <section className="title-section--outer-container">
        <h1 className="title">Blake</h1>
        <div className="title--inner-container">
          <div className="blue-bar"/>
          <h2 className="title">Trapnell</h2>
        </div>
          <h3 className="title-section--job-title">Web Developer / Designer</h3>
      </section>
    );
  }

export default TitleSection