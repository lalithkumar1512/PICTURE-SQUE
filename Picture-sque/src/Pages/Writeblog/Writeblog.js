import "./writeblog.css";
import Topbar from "../../Components/topbar/Topbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Writeblog() {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: currentUser.email,
    file: "",
    tag: "",
    title: "",
    desc: "",
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
    console.log(formValues);
    axios.post("https://backend-0sjh.onrender.com/posts", {
      title: formValues.title,
      file: formValues.file,
      tag: formValues.tag,
      email: formValues.email,
      desc: formValues.desc,
    });
    navigate("/Allblogs");
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.file) {
      errors.file = "Link is required!";
    }
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
            <img
              className="writeimg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <form
              className="writeform"
              // enctype="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="writeformgroup">
                <input
                  className="writeinput"
                  placeholder="Image link"
                  id="file"
                  type="text"
                  name="file"
                  value={formValues.file}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   const file = e.target.files[0];
                  //   setFile(file);
                  // }}
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
                Post
              </button>
            </form>
            {/* <p className="error">{formErrors.file}</p>&nbsp; */}
            <p className="error">{formErrors.title}</p>&nbsp;
            <p className="error">{formErrors.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
