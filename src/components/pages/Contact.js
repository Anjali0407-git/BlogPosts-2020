import React from 'react';

const Contact =() => {
    return (
        <div className="container">
            <div className="py-4">
            <h1>Add Post</h1>
                <br />
                <form >
                    <div>
                        <label>Title : </label><br />
                        <input type ="text" name="title" />
                    </div>
                    <div>
                        <label>Body : </label><br />
                        <textarea name="body" />
                    </div>
                    <br />
                    <button type = "submit"> Submit </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;