import React, { useState, useEffect } from "react";
import axios from "axios";

function HttpComp() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  //   useEffect(() => {
  //     axios("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => {
  //         console.log(res);
  //         setPosts(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const res = await fetch(url);
      const resJson = await res.json();
      console.log(resJson);
      setPosts(resJson);
    } catch (error) {
      console.log(error);
    }

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setPosts(res);
    //     console.log(posts);
    //   });
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePush = (e) => {
    e.preventDefault();
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      {" "}
      here goes the products..
      {/* {posts.length &&
        posts.map((item) => <div key={item.id}> {item.title}</div>)} */}
      <form>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={handlePush}>push</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setList([list.splice(list.length, 1)]);
          }}
        >
          pop
        </button>
        <ul>
          {list.map((one) => (
            <li id={one.length}>{one}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default HttpComp;
