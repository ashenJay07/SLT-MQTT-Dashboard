import KeywordField from "./components/keywordField";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="container pt-4">
          <div className="text-center">
            <h2>MQTT Dashboard</h2>
          </div>

          <div>
            <div className="col-7 pt-5 mx-auto">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Hostname or IP Address and Port Number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username and Password
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <KeywordField />

                <div>
                  <button type="submit" className="btn btn-primary mr-2">
                    Connect
                  </button>
                  <button type="submit" className="btn btn-danger mx-2">
                    Disconnet
                  </button>
                </div>
              </form>
            </div>

            <div className="col-7 mx-auto pt-3">
              <hr />
            </div>

            <div className="col-7 pt-3 mx-auto">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Hostname or IP Address and Port Number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Topic"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3 form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="floatingTextarea2"
                    style={{ minHeight: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="floatingTextarea2">Message</label>
                </div>

                <button type="submit" className="btn btn-primary">
                  Publish
                </button>
              </form>
            </div>

            <div className="col-7 mx-auto pt-3">
              <hr />
            </div>

            <div className="col-7 mx-auto pt-3 pb-5">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                  style={{ height: 250, overflow: "auto", resize: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
