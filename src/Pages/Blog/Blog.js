import React from "react";

const Blog = () => {
  return (
    <div
      data-theme="cupcake"
      className="max-w-screen-lg mx-auto rounded-xl my-10"
    >
      <div>
        <h2 className="text-3xl font-serif bg-pink-300 rounded-xl p-4">
          Difference between SQL and NoSQL:
        </h2>
        <p className="p-4">
          SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS
          or Relational Databases, whereas NoSQL is a Non-relational or
          Distributed Database. Comparing SQL vs NoSQL databases, SQL databases
          are table-based databases, whereas NoSQL databases can be
          document-based, key-value pairs, and graph databases. SQL databases
          are vertically scalable, while NoSQL databases are horizontally
          scalable. SQL databases have a predefined schema, whereas NoSQL
          databases use a dynamic schema for unstructured data. Comparing NoSQL
          vs SQL performance, SQL requires specialized DB hardware for better
          performance while NoSQL uses commodity hardware.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-serif bg-pink-300 rounded-xl p-4">
          What is JWT, and how does it work?
        </h2>
        <p className="p-4">
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-serif bg-pink-300 rounded-xl p-4">
          What is the difference between javascript and NodeJS?
        </h2>
        <p className="p-4">
          1. NodeJS : NodeJS is a cross-platform and opensource Javascript
          runtime environment that allows the javascript to be run on the
          server-side. Nodejs allows Javascript code to run outside the browser.
          Nodejs comes with a lot of modules and mostly used in web development.
          2. JavaScript : Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-serif bg-pink-300 rounded-xl p-4">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className="p-4">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
