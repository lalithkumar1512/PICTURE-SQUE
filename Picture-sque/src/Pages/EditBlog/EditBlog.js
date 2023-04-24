import "./editblog.css";
import Topbar from "../../Components/topbar/Topbar";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditBlog() {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  const navigate = useNavigate();
  const location = useLocation();
  const [formValues, setFormValues] = useState({
    email: currentUser.email,
    tag: location.state.tag,
    title: location.state.title,
    desc: location.state.desc,
  });
  const initdata = new FormData();
  initdata.append("file", location.state.img);
  initdata.append("title", location.state.title);
  initdata.append("tag", location.state.tag);
  initdata.append("email", formValues.email);
  initdata.append("desc", location.state.desc);
  const [file, setFile] = useState({
    file: location.state.img,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const data = new FormData();
    data.append("_id", location.state.id);
    data.append("file", file);
    data.append("title", formValues.title);
    data.append("tag", formValues.tag);
    data.append("email", formValues.email);
    data.append("desc", formValues.desc);
    axios.post("https://backend-0sjh.onrender.com/updatepost", data);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.email) {
      errors.title = "Name is required!";
    }
    if (!values.desc) {
      errors.file = "Description is required!";
    }

    return errors;
  };

  return (
    <div className="writeblog">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/Allblogs")
      ) : (
        <div>
          <Topbar />
          <div className="write">
            <img className="writeimg" src={location.state.img} alt="" />
            <form
              className="writeform"
              enctype="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="writeformgroup">
                <input
                  className="writeinput"
                  placeholder="Image link"
                  id="file"
                  type="file"
                  name="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFile(file);
                  }}
                />
              </div>
              <div className="writeformgroup">
                <input
                  className="writeinput"
                  placeholder="Title"
                  type="text"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                />
              </div>
              <div className="writeformgroup">
                <input
                  className="writeinput"
                  placeholder="Tags"
                  type="text"
                  name="tag"
                  value={formValues.tag}
                  onChange={handleChange}
                />
              </div>
              <div className="writeformgroup">
                <input
                  className="writeinput"
                  placeholder="email"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="writeformgroup">
                <textarea
                  className="writeinput writetext"
                  placeholder="Description..."
                  type="text"
                  name="desc"
                  value={formValues.desc}
                  onChange={handleChange}
                />
              </div>
              <button className="writesubmit" type="submit">
                Update
              </button>
            </form>
            <p className="error">{formErrors.title}</p>&nbsp;
            <p className="error">{formErrors.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
