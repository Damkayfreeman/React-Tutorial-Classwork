import { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [success, setSuccess] = useState(false);

    const CREATED = 201;
    const titleRegex = /^.{4,20}$/;
    const bodyRegex = /^.{10,200}$/;

    const isTitleValid = titleRegex.test(title);
    const isBodyValid = bodyRegex.test(body);
    const isFormValid = isTitleValid && isBodyValid;

    const handleSubmit = async () => {
      e.preventDefault();
      setSuccess(false);

        const newPost = {
            title,
            body,
            userId: 1,
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        const data = await response.json();
       

        if (response.ok && response.status === CREATED){
            setSuccess(true);
        }
    } 

  return (
    <div className="container mt-5 mb-5">
        {success && (
            <div className="alert alert-success"> Post Created Successfully! </div>
        )}
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="">
          <label className="form-label"> Title </label>
          <input
            type="text"
            className={`form-control ${title && !isTitleValid ? "is-invalid" : ""}`}
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {!isTitleValid && title && (
            <div className="invalid-feedback"> Title must be 4-20 characters.</div>
          )}
        </div>

        <div className="">
          <label className="form-label"> Body </label>
          <textarea
            type="text"
            className={`form-control ${body && !isBodyValid ? "is-invalid" : ""}`}
            placeholder="Post Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {!isBodyValid && body && (
            <div className="invalid-feedback">  Body must be 10-200 characters. </div>
          )}
        </div>
        <br />

        <button type="submit" className="btn btn-success btn-sm" disabled={!isFormValid}> Create </button>
      </form>
    </div>
  );
}

export default CreatePost;
