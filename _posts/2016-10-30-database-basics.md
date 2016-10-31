---
layout: post
title: Databases Basics
---
### An Imaginary Interview about Databases

*Q: Tell me what you know about Databases...*

A: The big picture is we want to keep data in persistant storage that outlives our application's memory. A naive way of doing this would be to have an application write to and read from files - I think thats how it was done before the 80s. Database management systems are purpose built for storing, retrieving and manipulating data in persistant memory.

*Q: What are some attributes databases aspire to?*

A: Massive, Persistant, Convenient, Reliable, Efficient, Multiuser, Safe [^1]

*Q: Wow, it's almost like you had those memorized. A lot of those attributes are pretty self explantory, but I'm curious about what you mean by multiuser.*

A: Databases should be able to handle multiple users operating on them at the same time. This means that the database be able to handle and resolve collisions (eg two processess attempting to read from and write to the same record). From there I'll handwave a bit and just say the intergrity of the database is maintained via ACID (atomic, consistant, isolated, durable) transactions. I'd like to learn more about how transactions are actually implemented.

*Q: Ok so lets talk about some specific Databases. Which ones are you most familiar with?*

A: I've used PostgreSQL for persistance in a few Rails CRUD apps, Redis for a URL shortening app I build for fun and practice, and MongoDB to store some JSON for another toy app I built.

*Q: Great, what can you tell me about the differences between those databases?*

A: They use different Data Models. PostgreSQL is build on the relational model.The main construct in the relational model is the relation or table. I think the easiest way to think about a table is as similair to a spreadsheet with column names, columns, and rows.

*Q: And the others?*

A: They're "NoSQL" databases, which just broadly means they don't use the relational model. Redis is based on a Key: Value model - you can think of it as hash table that live in persistant storage. MongoDB is based on a document model - the idea being to store data in some format like JSON without any inforced schema. Some DBMSs are built on a graph data model - those are supposidly useful for storing data based on relationships, but I don't have any experience with that.

*Q: Why would someone choose a NoSQL database?*

A: One reason is they solve problems that come up at a massive scale when data is spread out over a ton of connected nodes - I don't have any experience with that. Another potential reason is if they're a logical fit for the data a business is dealing with - for example an online magazine might choose to store article data as a JSON object in a database like MongoDB because it makes more intuitive sense than breaking the article apart and and storing it across multiple tables.

*Q: This contrived Question and Answer thing is getting old. Anything else you want to say about Databases?*

A: Sure...

SQL stands for Structured Query Language. It's a standard high-level language for working with data in relational databases. It's implemented independently in DBMSs like Postgres and MySQL, and there's some inconsistancy in those implementation so it's not 100% portable.

ORM stands for Object Relational Mapping. The main idea with ORM is to put a layer of abstraction between the business logic of an application and the data layer. Developers can write code like "Order.get(3)" and an ORM will handle forming the actualy SQL query to retrieve the 3 requested orders. Active-Record is the out-of-the-box ORM solution for Rails.

Fin.

-----

[^1]: I just made up a mneumonic for remembering this list, which was taken directly from Stanford University's online Database / Relational Alegebra / SQL course <br /> **M**arching **P**enguins **C**herish **REM** **S**leep<br />**Massive** - handle huge amounts of data.<br />**Persistant** - outlives application<br />**Convenient** - abstraction from the details of how data is physically stored. high level query languages for retrieving and manipulating data.<br />**Reliable** - 99.9999% uptime. you don't want business grinding to a halt because a database is down.<br />**Efficient** - 1000s of queries/updates per second<br />**Multiuser** - many people / applications should be able to operate on a database at the same time. Interactions with the database should be wrapped in transactions to prevent errors from colisions (eg two users simulataneously writing to the same record)<br />**Safe** - dealing with critical business data. gurantee data isn't changed or loss from hardware, software, or power failures.security.



