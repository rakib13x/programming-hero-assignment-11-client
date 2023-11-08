const Blog = () => {
  return (
    <div className="bg-red-50 pl-[150px] text-xl">
      <p>1.What is One way data binding?</p>
      <p>
        Ans:One-way data binding is a concept used in many web and application
        development frameworks to control how data flows in a unidirectional
        manner within the application. In one-way data binding, data is
        transferred from a data source (typically a model or data store) to a
        view (user interface) or vice versa, but not in both directions
        simultaneously. The key idea is that changes in the data source
        automatically update the view, but changes in the view do not directly
        affect the data source.
      </p>
      <p className="pt-10">2.What is NPM in node.js?</p>
      <p>
        Ans: NPM stands for "Node Package Manager," and it is the default
        package manager for Node.js. NPM is a command-line tool and an online
        repository of Node.js packages or modules that can be easily integrated
        into your Node.js applications. It is used to manage dependencies, which
        are reusable pieces of code or libraries that your Node.js applications
        can rely on.
      </p>
      <p className="pt-10">
        3.Different between Mongodb database vs mySQL database.
      </p>
      <p>
        Ans: MongoDB and MySQL are both popular database management systems, but
        they have significant differences in terms of their data models,
        architecture, use cases, and when you might choose one over the other.
        Here's a comparison between MongoDB and MySQL:
      </p>
      <p className="pt-10">
        Data Model:MongoDB is a NoSQL database, which means it is based on a
        flexible, schema-less data model. It stores data in JSON-like documents
        and does not require a predefined schema. MySQL is a relational
        database, which uses tables with fixed schemas, where data is stored in
        rows and columns.
      </p>
      <p className="pt-10">
        Schema:MongoDB: Dynamic or flexible schema, allowing you to store
        documents with different structures in the same collection. MySQL:
        Static schema, requiring predefined table schemas where the data must
        conform to the specified structure.
      </p>
    </div>
  );
};

export default Blog;
