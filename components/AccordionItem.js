const AccordionItem = ({ id, title, extra, body }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${id}`}
        >
          <div className="d-flex flex-column">
            <h4>{title}</h4>
            <span>{extra}</span>
          </div>
        </button>
      </h2>
      <div
        id={`flush-collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
