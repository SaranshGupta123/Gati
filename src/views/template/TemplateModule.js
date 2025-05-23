import React from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Import icon
import "./template.css";
import images from "component/Image";
import Sidebar from "component/Sidebar";

const TemplateModule = ({
  selectedOption,
  selectedDPR,
  loading,
  error,
  templateMatched,
  templateMissing,
  handleOptionChange,
  handleDPRChange,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-100 min-vh-100 py-4 px-4" id="theme">
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Back Icon Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn d-flex align-items-center gap-1"
          id="back-button"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div>
        <div
          className="d-flex justify-content-end align-items-center gap-2 mb-4"
          id="hehe"
        >
          <label htmlFor="dpr" className="text-white mb-0 me-2">
            Select DPR:
          </label>
          <select
            id="dpr"
            className="form-select"
            value={selectedDPR}
            onChange={(e) => handleDPRChange(e.target.value)}
          >
            <option>Malkangiri–Bhadrachalam-DPR</option>
            <option>JUNAGARH-NABARANGPUR-DPR</option>
          </select>
        </div>

        <hr className="border-t-2 border-gray-300 my-3"  id="hr"/>
        <h1 className="text-center dprHeading" id="dpr">
          {selectedDPR}
        </h1>

        <div className="col-12 col-lg-10 mx-auto">
          <div style={{ width: "100%" }}>
            {loading ? (
              <div className="text-center w-100">
                <ClipLoader color="#c4136b" loading={loading} size={50} />
              </div>
            ) : selectedOption === "Template Matching" ? (
              <div className="equal-gap-row">
                {/* Template Matched */}
                <div className="template">
                  <h3 className="text-center mb-3" id="template-heading">
                    Template Matched
                  </h3>
                  <div className="text-success">
                    {Object.entries(templateMatched).map(
                      ([key, value], index) => (
                        <div key={key} className="template-block">
                          {typeof value !== "object" ? (
                            <div className="entry">
                              <span className="entry-number">{index + 1}.</span>
                              <div className="entry">
                                <div className="entry-label">{key}</div>
                                <div className="entry-value">
                                  {String(value)}
                                </div>
                              </div>
                            </div>
                          ) : (
                            Object.entries(value).map(([subKey, subValue]) => (
                              <div className="entry" key={subKey}>
                                <div className="entry-label">{subKey}</div>
                                <div
                                  className={`entry-value ${
                                    subValue === "Missing"
                                      ? "text-danger"
                                      : "text-success"
                                  }`}
                                >
                                  {String(subValue)}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Template Missing */}
                <div className="template">
                  <h3
                    className="text-center mb-3"
                    id="template-heading-missing"
                  >
                    Template Missing
                  </h3>
                  <div className="text-danger">
                    {Object.entries(templateMissing).map(
                      ([key, value], index) => (
                        <div key={key} className="template-block">
                          {typeof value !== "object" ? (
                            <div className="entry">
                              <span className="entry-number">{index + 1}.</span>
                              <span className="entry-label">{key}</span>
                              <span className="entry-value text-danger">
                                {String(value)}
                              </span>
                            </div>
                          ) : (
                            Object.entries(value).map(([subKey, subValue]) => (
                              <div key={subKey} className="entry">
                                <span className="entry-label">{subKey}</span>
                                <span
                                  className={`entry-value ${
                                    subValue === "Missing"
                                      ? "text-danger"
                                      : "text-success"
                                  }`}
                                >
                                  {String(subValue)}
                                </span>
                              </div>
                            ))
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : error ? (
              <div className="col-12 text-danger text-center">{error}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateModule;
