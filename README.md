# Project Title: Book Management System

## Overview
The **Book Management System** is a Java-based web application developed as part of the **Advanced Software Engineering Course, PDP 2**. The system is designed to efficiently manage books, genres, and publishers, incorporating the **Model-View-Controller (MVC)** architecture. It integrates key features like data persistence, business logic implementation, and HTTP request handling, providing a comprehensive solution for managing and organizing books and related entities.

## Features
- Manage books, genres, and publishers
- Implements layered architecture (Model, Service, Controller)
- Repository for database access
- User-friendly interface for managing books

## Technologies Used
- **Spring Boot**: Backend framework
- **MySQL**: Database for persistence
- **Maven**: Dependency management
- **PlantUML**: Diagram modeling
- **Thymeleaf**: Template engine for rendering views
- **Bootstrap**: Frontend styling framework

## Project Structure
- **Model Layer**: Defines domain entities like `Book`, `Genre`, and `Publisher`
- **Repository Layer**: Interfaces for data persistence (e.g., `BookRepository`)
- **Service Layer**: Business logic implementation (e.g., `BookServiceImpl`)
- **Controller Layer**: Handles HTTP requests (e.g., `BookController`)
- **View Layer**: Provides UI templates using **Thymeleaf**

## Report (What we have done so far)
- Set up the **Book Management System** as part of the **Advanced Software Engineering Course, PDP 2**.
- Implemented **Model-View-Controller (MVC)** architecture to separate concerns and enhance maintainability.
- Designed and created domain models such as **Book**, **Genre**, and **Publisher**.
- Integrated **Spring Boot** for backend development, using **Maven** for dependency management.
- Set up **MySQL Database** for persistence of book, genre, and publisher data.
- Defined business logic in the **Service Layer** and data access logic in the **Repository Layer**.
- Created HTTP endpoints in the **Controller Layer** for managing books and related entities.
- Developed user-friendly **UI templates** using **Thymeleaf** and **Bootstrap** for efficient book management.

## UI Template (View Layer)
For managing books, genres, and publishers, the following template files are used:

### **Books List Page (books.html)**:
Displays a list of all books, with options to add, update, or delete books.

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Books List</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="mt-4">Book Management</h1>
        <a href="/add-book" class="btn btn-primary mb-3">Add New Book</a>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Publisher</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr th:each="book : ${books}">
                    <td th:text="${book.title}"></td>
                    <td th:text="${book.author}"></td>
                    <td th:text="${book.genre.name}"></td>
                    <td th:text="${book.publisher.name}"></td>
                    <td>
                        <a href="/edit-book/{book.id}" class="btn btn-warning">Edit</a>
                        <a href="/delete-book/{book.id}" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>

## Running the Application
1. Clone the repository:
   ```bash
   git clone https://git01lab.cs.univie.ac.at/vu-advanced-software-engineering/students/2024w/ASE_12247016.git
   ```
2. Navigate to the project directory:
   ```bash
   cd book-management-system
   ```
3. Build the project using Maven:
   ```bash
   mvn clean install
   ```
4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## Testing
Run tests using:
```bash
mvn test
```


