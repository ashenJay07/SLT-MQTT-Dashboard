"use client";

import { useState } from "react";
import KeywordField from "../components/keywordField";

export default function Home() {
  const [protocol, setProtocol] = useState("");
  const [hostName, setHostName] = useState("");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keywords, setKeywords] = useState([]);

  const [mqttService, setMqttService] = useState(null);

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };

  const connectToMQTT = async () => {
    const hostAddress = `${hostName}:${port}`;
    console.log(hostAddress);
  };

  const handleDisconnection = async () => {};

  console.log(protocol, hostName, port, username, password, keywords);

  return (
    <>
      <div className="container-fluid">
        <div className="container pt-4">
          <div className="text-center">
            <h2>MQTT Dashboard</h2>
          </div>

          <div>
            <div className="col-7 pt-5 mx-auto">
              <form onSubmit={handleFormSubmission}>
                <div className="mb-3">
                  <label htmlFor="host" className="form-label">
                    Protocol
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setProtocol(e.target.value)}
                  >
                    <option value="mqtt://" selected>
                      mqtt://
                    </option>
                    <option value="mqtts://">mqtts://</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="host" className="form-label">
                    Hostname or IP Address and Port Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="host"
                    id="host"
                    placeholder="hostname or IP address"
                    onChange={(e) => setHostName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="port"
                    placeholder="port number"
                    onChange={(e) => setPort(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username and Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <KeywordField handleKeywords={setKeywords} />

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mr-2"
                    onClick={connectToMQTT}
                  >
                    Connect
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger mx-2"
                    onClick={handleDisconnection}
                  >
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
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
