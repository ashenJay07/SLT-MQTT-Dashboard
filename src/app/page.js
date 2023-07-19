"use client";

import { useState } from "react";
import KeywordField from "../components/keywordField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [protocol, setProtocol] = useState("");
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [publishTopic, setPublishTopic] = useState("");
  const [publishMessage, setPublishMessage] = useState("");

  const [mqttService, setMqttService] = useState(null);

  const notify = (msg) => {};

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };

  const connectToMQTT = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_MQTT_BACKEND_URL}/api/mqtt/connect`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            protocol,
            host,
            port,
            username,
            password,
          }),
        }
      );

      const result = await response.json();

      if (result) {
        setConnectionStatus(result);
        notify(
          toast.success("Connected to MQTT broker", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
        console.log("Connection Successful");
      }
    } catch (error) {}
  };

  const handleDisconnection = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_MQTT_BACKEND_URL}/api/mqtt/disconnect`,
        { method: "POST" }
      );

      const result = await response.json();
      if (!result) {
        notify(
          toast.error("Disconnecting from MQTT broker", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
      }
      setConnectionStatus(result);
    } catch (error) {}
  };

  const handlePublishMessage = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_MQTT_BACKEND_URL}/api/mqtt/publish`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic: publishTopic,
            message: publishMessage,
          }),
        }
      );

      if (response.ok) {
        notify(
          toast.success("Message published successfully", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
      }
    } catch (error) {}
  };

  console.log(publishTopic, publishMessage);

  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="container pt-4">
          <div className="text-center">
            <h2>MQTT Dashboard</h2>
          </div>

          <div>
            <div className="col-12 col-sm-7 pt-5 mx-auto d-flex justify-content-end">
              <div className="d-flex align-items-center">
                Connection Status:
                <span
                  className={`mx-2 ${
                    connectionStatus ? "bg-success" : "bg-danger"
                  }`}
                  style={{
                    borderRadius: "50%",
                    width: 15,
                    height: 15,
                    display: "inline-block",
                  }}
                ></span>
              </div>
            </div>
            <div className="col-12 col-sm-7 pt-3 mx-auto">
              <form onSubmit={handleFormSubmission}>
                <div className="mb-3">
                  <label className="form-label">Protocol</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setProtocol(e.target.value)}
                  >
                    <option>Select a protocol</option>
                    <option value="mqtt://">mqtt://</option>
                    <option value="mqtts://">mqtts://</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Hostname or IP Address and Port Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="host"
                    id="host"
                    placeholder="hostname or IP address"
                    onChange={(e) => setHost(e.target.value)}
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
                    className="btn btn-success mr-2"
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

            <div className="col-12 col-sm-7 mx-auto pt-3">
              <hr />
            </div>

            <div className="col-12 col-sm-7 pt-3 mx-auto">
              <form onSubmit={handleFormSubmission}>
                <div className="mb-3">
                  <label className="form-label">
                    Publish Topic and Message
                  </label>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1s"
                      placeholder="Topic"
                      onChange={(e) => setPublishTopic(e.target.value)}
                    />
                    <label htmlFor="exampleInputEmail1s">Topic</label>
                  </div>
                </div>

                <div className="mb-3 form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="floatingTextarea2"
                    onChange={(e) => setPublishMessage(e.target.value)}
                    style={{ minHeight: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="floatingTextarea2">Message</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handlePublishMessage}
                >
                  Publish
                </button>
              </form>
            </div>

            <div className="col-12 col-sm-7 mx-auto pt-3">
              <hr />
            </div>

            <div className="col-12 col-sm-7 mx-auto pt-3 pb-5">
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
